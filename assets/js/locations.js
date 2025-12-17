---
---
function initLocations() {
    if (!document.getElementById('locations')) {
        return;
    }

    const url = new URL(window.location.href);
    // Select the right tab
    if (url.searchParams.has("{{site.locationTabUrlKey}}")) {
        makeLocationTabActive(url.searchParams.get("{{site.locationTabUrlKey}}"), "{{site.locationTabUrlKey}}")
    } else {
        makeLocationTabActive("{{site.data.planes[0].identifier}}")
    }

    // Show the modal, if needed
    if (url.searchParams.has("{{site.locationUrlKey}}")) {
        showModal(url.searchParams.get("{{site.locationUrlKey}}"), "{{site.locationUrlKey}}")
    }

    // SVG fixups (to avoid having to manually modify the exported SVG file)
    const qeenekMap = document.getElementById("fantasyMap");
    if (qeenekMap) {
        // remove width and height attributes
        qeenekMap.removeAttribute("width");
        qeenekMap.removeAttribute("height");
        qeenekMap.setAttribute("viewBox", "0 0 1728 958");
        qeenekMap.setAttribute("preserveAspectRatio", "meet");
    }

    // For now this will be manual. Maybe later I will automate this
    addTooltipToMapMarker("bae4178c-a1b7-48ec-90cd-6165b3cb2a44", "Phandalin", "marker69")
    addTooltipToMapMarker("c8b535d2-62b8-4ea9-921f-3f8957d91042", "Wolfhaven", "marker70")
    addTooltipToMapMarker("50905b22-27d5-496c-aa27-d2c90659f8ff", "Windsore Planes", "marker71")

    // For now this will be manual. Maybe later I will automate this
    const labels = [
        [document.getElementById("label1"), "580c0304-e112-4bcf-84ca-4823902bcf14"], //Zyxs
        [document.getElementById("label2"), "607d1a32-e2de-4cb2-b9f6-4188636e4609"], //Navirar
        [document.getElementById("stateLabel23"), "2346b690-8428-47ae-9cdf-dc346616c123"], //Kingdom of Five Emperors

        [document.getElementById("stateLabel19"), "1f32c7d5-5352-439b-b1bc-b5d228963b39"], //Malgalus
        [document.getElementById("stateLabel20"), "2dd41b8c-e114-4ccf-8dfe-f712b78b5e25"], //Rathex
        [document.getElementById("stateLabel6"), "625a3220-62bc-4140-a452-93ae1f7c32a0"], //Andoril
        [document.getElementById("stateLabel14"), "6dcbac0b-83ee-48b2-b1fe-1be6144aecd0"], //Hala'Shu
        [document.getElementById("stateLabel11"), "e53774fe-ab52-4845-92de-aedbea8038d1"], //Vuloth
        [document.getElementById("stateLabel3"), "9dcc0ed7-71d9-4ae0-9d9c-a4a754d92be8"], //Tsendoric
        [document.getElementById("stateLabel16"), "502055c5-cc2a-4f9a-b4d0-7c1a2e872873"], //Zarak
        [document.getElementById("stateLabel10"), "7ef34938-e1b5-474d-a0d2-5cac2fd17a09"], //Dalortha

        [document.getElementById("burgLabel3"), "59af4720-25af-4d9c-a814-c71afa539542"], //Profaned Capital
        [document.getElementById("burgLabel240"), "e304ce6e-917c-4c61-b48a-2788045ed5c9"], //Baldur's Gate

        [document.getElementById("stateLabel18"), "c41a9f01-05ff-4482-91d0-85db7ed9ec65"], //Metavixium Commonwealth
        [document.getElementById("stateLabel13"), "aa783363-2892-424d-8da5-6087e4cde44a"], //Quixus
        [document.getElementById("stateLabel12"), "fb7695aa-f638-42b2-9e86-18dabddfa1f1"], //Sedamixium
        [document.getElementById("stateLabel15"), "1fbd1b6d-d026-4b99-bf4f-f4ffae2eb4d4"], //Hypnia
        [document.getElementById("stateLabel9"), "5add2673-f8a0-4c88-bb26-eee00178f27a"], //Illuxtria
        [document.getElementById("stateLabel2"), "27556c2f-a783-4fc0-a6e9-11d04de8254c"], //Namarus
        [document.getElementById("stateLabel21"), "55a6941b-a414-4c9e-a04d-9cc9fd086aef"], //Wintexia
        [document.getElementById("stateLabel1"), "e0945a07-26fb-46f4-a5d2-5592a28b96fd"], //Unholy Kingdom of Thay
        [document.getElementById("stateLabel7"), "ad844d14-4ec1-4076-8e50-f8e6ca4e3e1b"], //Lintave

        [document.getElementById("stateLabel22"), "2d8f7c26-c6e6-4cfb-a01e-abc189c2042e"], //Deadlands of Dolorex
    ];

    for (const [element, id] of labels) {
        element.addEventListener("click", function () {
            showModal(id, "{{site.locationUrlKey}}")
        })
    }
}

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
    url.searchParams.set("{{site.locationTabUrlKey}}", id);
    window.history.pushState({}, "", url.toString())
}

function addTooltipToMapMarker(locationId, locationName, markerId) {
    const qeenekMap = document.getElementById("fantasyMap");

    // Create the group and append it to the map
    const tooltipGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    tooltipGroup.setAttribute("id", "tooltip-" + locationId);
    tooltipGroup.setAttribute("class", "tooltip");
    qeenekMap.appendChild(tooltipGroup);

    // Set up the text
    const tooltipText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    tooltipText.textContent = locationName;
    tooltipText.setAttribute("class", "tooltip-text");
    tooltipGroup.appendChild(tooltipText);
    const tooltipTextBbox = tooltipText.getBBox();

    // Set up the background box for the text
    const tooltipRectExtraWidth = 20
    const tooltipRectExtraHeight = 10
    const tooltipRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    tooltipRect.setAttribute("width", tooltipTextBbox.width + tooltipRectExtraWidth + "");
    tooltipRect.setAttribute("height", tooltipTextBbox.height + tooltipRectExtraHeight + "");
    tooltipGroup.appendChild(tooltipRect);
    const tooltipRectBbox = tooltipRect.getBBox();

    // Set up the triangle that attacked to the pin
    const tooltipTriangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    const tooltipTriangleWidth = 5
    tooltipTriangle.setAttribute("points", "0,0 10,0 " + tooltipTriangleWidth + ",10");
    tooltipTriangle.setAttribute("transform", "translate(" + ((-tooltipTriangleWidth / 2) + tooltipRectBbox.width / 2) + ", " + tooltipRectBbox.height + ")");
    tooltipGroup.appendChild(tooltipTriangle);

    // Align the text in the center of the rectangle
    tooltipText.setAttribute("transform", "translate(" + (tooltipRectExtraWidth / 2) + ", " + (tooltipRectExtraHeight * 2) + ")");

    // Remove and re-add the text to sort out the layering issues (otherwise the box will be above the text)
    tooltipGroup.removeChild(tooltipText);
    tooltipGroup.appendChild(tooltipText);

    // Move the tooltip to where it needs to be
    const marker = document.getElementById(markerId)
    const tooltipXPosition = marker.x.baseVal.value + 12 - tooltipGroup.getBBox().width / 2;
    const tooltipYPosition = marker.y.baseVal.value - 10 - tooltipGroup.getBBox().height / 2;
    tooltipGroup.setAttribute("transform", "translate(" + tooltipXPosition + "," + tooltipYPosition + ")");

    // Add the event listeners to toggle the tooltip display (via classes)
    marker.addEventListener("mouseenter", function () {
        tooltipGroup.classList.add("show");
    });
    marker.addEventListener("mouseleave", function () {
        tooltipGroup.classList.remove("show");
    });

    // While we're at it, add click handlers to the marker itself too
    marker.addEventListener("click", function () {
        showModal(locationId, "{{site.locationUrlKey}}")
    })
}