(function () {
    // Bail if not on locations page
    const materialPlaneResultsEl = document.querySelector("#plane-container-material-plane .locations-output");
    const materialPlaneSearchbarEl = document.getElementById("material-plane-searchbar");
    const materialPlaneTemplateEl = document.querySelector("#plane-container-material-plane .locations-template");
    if (!materialPlaneResultsEl || !materialPlaneSearchbarEl || !materialPlaneTemplateEl) return;

    const feywildResultsEl = document.querySelector("#plane-container-the-feywild .locations-output");
    const feywildSearchbarEl = document.getElementById("the-feywild-searchbar");
    const feywildTemplateEl = document.querySelector("#plane-container-the-feywild .locations-template");
    if (!feywildResultsEl || !feywildSearchbarEl || !feywildTemplateEl) return;

    function renderLocations({resultsEl, docs}) {
        resultsEl.innerHTML = "";
        if (!docs.length) {
            resultsEl.innerHTML = "No locations found";
            return;
        }

        const fragment = document.createDocumentFragment();

        for (const doc of docs) {
            const node = materialPlaneTemplateEl.content.cloneNode(true);

            // Main list
            const listItemEl = node.querySelector(".location-list-item");
            const minimap = listItemEl.querySelector(".minimap");
            const nameEl = listItemEl.querySelector(".name");
            const snippetEl = listItemEl.querySelector(".snippet");

            listItemEl.onclick = () => showModal(doc.identifier, locationUrlKey);
            minimap.src = `${baseUrl}/assets/img/location/100x100/${doc.image}`;
            minimap.alt = doc.name;
            nameEl.innerHTML = doc.name;
            snippetEl.innerHTML = doc.snippet;

            // Modal content
            const modalEl = node.querySelector(".location-modal");
            const modalCenterEl = modalEl.querySelector(".modal-center");
            const modalCloseEl = modalEl.querySelector(".close");
            const modalMapLinkEl = modalEl.querySelector(".map-link");
            const modalMapImageEl = modalMapLinkEl.querySelector(".map");
            const modalNameEl = modalEl.querySelector(".name");
            const modalPronunciationEl = modalEl.querySelector(".pronunciation");
            const modalTypeEl = modalEl.querySelector(".type");
            const modalDescriptionEl = modalEl.querySelector(".description");

            const close = (event) => closeModalOuterClick(event, doc.identifier, characterUrlKey);

            modalEl.id = `modal-${doc.identifier}`;
            modalEl.onclick = close;
            modalCenterEl.onclick = close;
            modalCloseEl.onclick = close;

            modalMapLinkEl.href = `${baseUrl}/assets/img/location/${doc.image}`;
            modalMapImageEl.src = `${baseUrl}/assets/img/location/200x200/${doc.image}`;
            modalMapImageEl.alt = doc.name;
            modalNameEl.textContent = doc.name;
            if (!!doc.pronunciation) {
                modalPronunciationEl.textContent = ` (${doc.pronunciation})`;
            }
            modalTypeEl.textContent = doc.type;
            modalDescriptionEl.innerHTML = doc.content;

            fragment.appendChild(node);
        }

        resultsEl.appendChild(fragment);
    }

    const materialPlaneController = createLunrSearch({
        baseUrl,
        collectionKey: "locations-material-plane",
        inputEl: materialPlaneSearchbarEl,
        resultsEl: materialPlaneResultsEl,
        refField: "identifier",
        fields: ["name", "snippet", "type", "content"],
        debounceMs: 250,
        render: renderLocations,
    });
    materialPlaneController.start({runImmediately: true});
    materialPlaneController.searchNow().then(() => {
        const url = new URL(window.location.href);
        if (url.searchParams.has(locationUrlKey) && url.searchParams.get(locationTabUrlKey) === "material-plane") {
            // Give it a slight delay to prevent race conditions. Navie, but it works.
            setTimeout(() => {
                showModal(url.searchParams.get(locationUrlKey), locationUrlKey);
            }, 100)
        }
    });

    const feywildController = createLunrSearch({
        baseUrl,
        collectionKey: "locations-feywild",
        inputEl: feywildSearchbarEl,
        resultsEl: feywildResultsEl,
        refField: "identifier",
        fields: ["name", "snippet", "type", "content"],
        debounceMs: 250,
        render: renderLocations,
    });
    feywildController.start({runImmediately: true});
    feywildController.searchNow().then(() => {
        const url = new URL(window.location.href);
        if (url.searchParams.has(locationUrlKey) && url.searchParams.get(locationTabUrlKey) === "the-feywild") {
            // Give it a slight delay to prevent race conditions. Navie, but it works.
            setTimeout(() => {
                showModal(url.searchParams.get(locationUrlKey), locationUrlKey);
            }, 100)
        }
    });

    function makeLocationTabActive(id) {
        const allTabs = document.getElementsByClassName("tab");
        const allPlanesContainers = document.getElementsByClassName("plane-container");
        // Clear everything out
        for (const tab of allTabs) {
            tab.classList.remove("active");
        }
        for (const container of allPlanesContainers) {
            container.classList.remove("active");
        }

        // Set only the single active tab and container
        document.getElementById("tab-" + id).classList.add("active");
        document.getElementById("plane-container-" + id).classList.add("active");

        // Update the URL
        const url = new URL(window.location.href);
        url.searchParams.set(locationTabUrlKey, id);
        window.history.pushState({}, "", url.toString())
    }

    const url = new URL(window.location.href);
    if (url.searchParams.has(locationTabUrlKey)) {
        makeLocationTabActive(url.searchParams.get(locationTabUrlKey), locationTabUrlKey)
    } else {
        makeLocationTabActive("material-plane");
    }

    window.makeLocationTabActive = makeLocationTabActive;
})(window);