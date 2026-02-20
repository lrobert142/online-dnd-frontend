(function () {

    // Bail if not on characters page
    const resultsEl = document.querySelector("#lore .lore-article-cards-container");
    const inputEl = document.getElementById("lore-searchbar");
    const templateEl = document.getElementById("lore-template");
    if (!resultsEl || !inputEl || !templateEl) return;

    function renderLore({resultsEl, docs}) {
        resultsEl.innerHTML = "";
        if (!docs.length) {
            resultsEl.innerHTML = "No lore articles found";
            return;
        }

        const fragment = document.createDocumentFragment();

        for (const doc of docs) {
            const node = templateEl.content.cloneNode(true);

            const cardEl = node.querySelector(".lore-article-card");
            const cardLinkEl = cardEl.querySelector(".card-link");
            const bannerImageEl = cardEl.querySelector(".card-banner-image");
            const titleEl = cardEl.querySelector(".card-title");
            const excerptEl = cardEl.querySelector(".card-excerpt");

            cardLinkEl.href = doc.url;
            bannerImageEl.src = doc.banner;
            bannerImageEl.alt = doc.title;
            titleEl.textContent = doc.title;
            excerptEl.innerHTML = doc.excerpt;

            fragment.appendChild(node);
        }

        resultsEl.appendChild(fragment);
    }

    const controller = createLunrSearch({
        baseUrl,
        collectionKey: "lore",
        inputEl,
        resultsEl,
        refField: "url",
        fields: ["title", "excerpt", "content"],
        debounceMs: 250,
        render: renderLore,
    });
    controller.start({runImmediately: true});
    const _ = controller.searchNow();
})();