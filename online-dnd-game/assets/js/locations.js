---
---
window.onload = () => {
    const url = new URL(window.location.href);
    // Select the right tab
    if (url.searchParams.has('{{site.locationTabUrlKey}}')) {
        makeLocationTabActive(url.searchParams.get('{{site.locationTabUrlKey}}'), '{{site.locationTabUrlKey}}')
    } else {
        makeLocationTabActive("{{site.data.planes[0].identifier}}")
    }

    // Show the modal, if needed
    if (url.searchParams.has('{{site.locationUrlKey}}')) {
        showModal(url.searchParams.get('{{site.locationUrlKey}}'), '{{site.locationUrlKey}}')
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
