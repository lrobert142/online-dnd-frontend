---
---
window.onload = () => {
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