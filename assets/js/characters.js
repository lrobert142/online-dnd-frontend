(function () {

    // Bail if not on characters page
    const resultsEl = document.getElementById("characters");
    const inputEl = document.getElementById("character-searchbar");
    const templateEl = document.getElementById("character-portrait-template");
    if (!resultsEl || !inputEl || !templateEl) return;

    function renderCharacters({ resultsEl, docs }) {
        resultsEl.innerHTML = "";
        if (!docs.length) {
            resultsEl.innerHTML = "No characters found";
            return;
        }

        const fragment = document.createDocumentFragment();

        for (const doc of docs) {
            const node = templateEl.content.cloneNode(true);

            // Main list
            const portraitDivEl = node.querySelector(".character-portrait");
            const imageEl = portraitDivEl.querySelector(".portrait-image");
            const nameEl = portraitDivEl.querySelector(".name");
            const deceasedOverlayEl = portraitDivEl.querySelector(".deceased-overlay");

            portraitDivEl.onclick = () => showModal(doc.identifier, characterUrlKey);
            imageEl.src = `${baseUrl}/assets/img/npc/200x300/${doc.image}`;
            imageEl.alt = doc.name;
            nameEl.textContent = doc.name;

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

            const close = (event) => closeModalOuterClick(event, doc.identifier, characterUrlKey);

            modalEl.id = `modal-${doc.identifier}`;
            modalEl.onclick = close;
            modalCenterEl.onclick = close;
            modalCloseEl.onclick = close;

            modalPortraitLinkEl.href = `${baseUrl}/assets/img/npc/${doc.image}`;
            modalPortraitImageEl.src = `${baseUrl}/assets/img/npc/200x300/${doc.image}`;
            modalNameEl.textContent = doc.name;
            modalGenderEl.textContent = doc.gender;
            modalSpeciesEl.textContent = doc.species;
            modalOccupationEl.textContent = doc.occupation;
            modalLastSeenEl.textContent = doc.lastSeen;
            modalDescriptionEl.innerHTML = doc.content;

            // Special handling for whether the NPC is alive
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

    const controller = createLunrSearch({
        baseUrl,
        collectionKey: "characters",
        inputEl,
        resultsEl,
        refField: "identifier",
        fields: ["name", "species", "gender", "occupation", "lastSeen", "content"],
        debounceMs: 250,
        render: renderCharacters,
    });
    controller.start({ runImmediately: true });
    controller.searchNow().then(() => {
        const url = new URL(window.location.href);
        if (url.searchParams.has(characterUrlKey)) {
            showModal(url.searchParams.get(characterUrlKey), characterUrlKey);
        }
    });
})();