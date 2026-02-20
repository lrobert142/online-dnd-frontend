(function () {
    // If we're not on the right page, immediately bail!
    if (!document.getElementById('character-list')) {
        return;
    }

    const baseUrl = (window.SEARCH_BASEURL || "").replace(/\/$/, "");
    const urlKey = "character-id"

    const searchbarEl = document.getElementById("q");
    const resultsEl = document.getElementById("results");
    const templateEl = document.getElementById("character-portrait-template");

    // Cache indexes/docs per collection in-memory (per page load)
    const state = new Map(); // key -> { idx, docsById }

    async function loadCollection(key) {
        if (state.has(key)) return state.get(key);

        const url = `${baseUrl}/search/${key}.json`;
        const docs = await fetch(url).then(r => {
            if (!r.ok) throw new Error(`Failed to load ${url}: ${r.status}`);
            return r.json();
        });

        // Build a fast lookup for rendering results
        const docsById = new Map(docs.map(d => [String(d.identifier), d]));

        const idx = lunr(function () {
            this.ref("identifier");
            this.field("name");
            this.field("species");
            this.field("gender");
            this.field("occupation");
            this.field("lastSeen");
            this.field("content");

            for (const doc of docs) {
                this.add(doc);
            }
        });

        const loaded = {idx, docsById};
        state.set(key, loaded);
        return loaded;
    }

    function renderResults(hits, docsById) {
        resultsEl.innerHTML = "";
        if (!hits.length) {
            resultsEl.innerHTML = "No results found";
            return;
        }

        const fragment = document.createDocumentFragment();
        const docs = hits.map(hit => docsById.get(hit.ref))

        for (const doc of docs) {
            const node = templateEl.content.cloneNode(true);

            // Main display
            const portraitDivEl = node.querySelector(".character-portrait");
            const imageEl = portraitDivEl.querySelector(".portrait-image");
            const nameEl = portraitDivEl.querySelector(".name");
            const deceasedOverlayEl = portraitDivEl.querySelector(".deceased-overlay");

            portraitDivEl.onclick = () => {
                showModal(doc.identifier, urlKey)
            }
            imageEl.src = `${baseUrl}/assets/img/npc/200x300/${doc.image}`;
            imageEl.alt = doc.name;
            nameEl.innerHTML = doc.name;

            // Modal content
            const modalEl = node.querySelector(".character-modal");
            const modalCenterEl = modalEl.querySelector(".modal-center");
            const modalCloseEl = modalEl.querySelector(".close");
            const modalPortraitLinkEl = modalEl.querySelector(".portrait");
            const modalPortraitImageEl = modalPortraitLinkEl.querySelector(".image");
            const modalDeceasedOverlayEl = modalPortraitLinkEl.querySelector(".deceased-overlay");
            const modalNameEl = modalEl.querySelector(".name");
            const modalGenderEl = modalEl.querySelector(".gender");
            const modalSpeciesEl = modalEl.querySelector(".species");
            const modalOccupationEl = modalEl.querySelector(".occupation");
            const modalLastSeenEl = modalEl.querySelector(".location");
            const modalDescriptionEl = modalEl.querySelector(".description");

            const closeModal = () => {closeModalOuterClick(event, doc.identifier, urlKey)}

            modalEl.id = `modal-${doc.identifier}`;
            modalEl.onclick = closeModal;
            modalCenterEl.onclick = closeModal;
            modalCloseEl.onclick = closeModal;
            modalPortraitLinkEl.href = `${baseUrl}/assets/img/npc/${doc.image}`;
            modalPortraitImageEl.src = `${baseUrl}/assets/img/npc/200x300/${doc.image}`;
            modalNameEl.alt = doc.name;
            modalGenderEl.innerHTML = doc.gender;
            modalSpeciesEl.innerHTML = doc.species;
            modalOccupationEl.innerHTML = doc.occupation;
            modalLastSeenEl.innerHTML = doc.lastSeen;
            modalDescriptionEl.innerHTML = doc.content;


            // Special checks for whether the NPC is alive
            if (doc.isAlive) {
                deceasedOverlayEl.classList.add("hide");
                modalDeceasedOverlayEl.classList.add("hide");
            } else {
                deceasedOverlayEl.alt = `${doc.name} is deceased`;
                modalDeceasedOverlayEl.alt = `${doc.name} is deceased`;
            }

            fragment.appendChild(node);
        }

        resultsEl.appendChild(fragment);
    }

    async function doSearch() {
        let q = searchbarEl.value.trim();
        const {idx, docsById} = await loadCollection("characters");

        const hits = idx.search(q);
        renderResults(hits, docsById);
    }

    searchbarEl.addEventListener("input", doSearch);
    // Initialise
    doSearch().then(() => {
        // Now see if we can display the default modal (if the URL params have an ID we should show)
        const url = new URL(window.location.href);
        if (url.searchParams.has(urlKey)) {
            showModal(url.searchParams.get(urlKey), urlKey)
        }
    });
})();