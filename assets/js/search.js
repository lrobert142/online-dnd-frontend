(function () {
    async function fetchJson(url) {
        const r = await fetch(url);
        if (!r.ok) throw new Error(`Failed to load ${url}: ${r.status}`);
        return r.json();
    }

    /**
     * Creates a reusable Lunr search controller.
     *
     * Required options:
     * - baseUrl: string (your baseUrl)
     * - collectionKey: string (e.g. "characters", "locations")
     * - inputEl: HTMLInputElement
     * - resultsEl: HTMLElement
     * - refField: string (e.g. "identifier", "id", "slug")
     * - fields: string[] (fields to index)
     * - render: function({ resultsEl, docs, hits, docsById, query }) -> void
     *
     * Optional:
     * - debounceMs: number (default 250)
     * - transformDocForIndex: function(doc) -> object (if you need to normalize fields)
     * - onReady: function({ idx, docs, docsById }) -> void
     */
    function createLunrSearch(options) {
        const {
            baseUrl,
            collectionKey,
            inputEl,
            resultsEl,
            refField,
            fields,
            render,

            debounceMs = 250,
            transformDocForIndex,
            onReady,
        } = options;

        const state = new Map(); // key -> { idx, docs, docsById }

        async function loadCollection(key) {
            if (state.has(key)) return state.get(key);

            const url = `${baseUrl}/search/${key}.json`;
            const docs = await fetchJson(url);

            const docsById = new Map(docs.map(d => [String(d[refField]), d]));

            const idx = lunr(function () {
                this.ref(refField);
                for (const f of fields) this.field(f);

                for (const original of docs) {
                    const doc = transformDocForIndex ? transformDocForIndex(original) : original;
                    // Ensure ref exists and is stringable
                    if (doc && doc[refField] != null) this.add(doc);
                }
            });

            const loaded = {idx, docs, docsById};
            state.set(key, loaded);
            if (onReady) onReady(loaded);
            return loaded;
        }

        async function doSearchNow() {
            const query = inputEl.value.trim();
            const {idx, docsById} = await loadCollection(collectionKey);

            let hits = idx.search(query);
            // In case we find nothing, change to a fuzzy search
            if (hits.length === 0) {
                hits = idx.search("*" + query + "*");
            }
            const docs = hits.map(h => docsById.get(String(h.ref)));

            render({resultsEl, docs, hits, docsById, query});
        }

        const doSearch = debounce(doSearchNow, debounceMs);

        function start({runImmediately = true} = {}) {
            inputEl.addEventListener("input", doSearch);
            if (runImmediately) doSearchNow();
        }

        return {start, searchNow: doSearchNow, load: () => loadCollection(collectionKey)};
    }

    window.createLunrSearch = createLunrSearch;
})(window);
