const modalShowClass = "show";
const modalNoScrollClass = "no-doc-scroll";
const modalHideClass = "hide";

function closeModal(id, urlKey) {
    document.getElementById("modal-" + id).classList.remove(modalShowClass);
    document.getElementById("modal-" + id).classList.remove(modalNoScrollClass);
    document.getElementById("modal-" + id).classList.add(modalHideClass);

    const url = new URL(window.location.href);
    url.searchParams.delete(urlKey);
    window.history.pushState({}, "", url.toString())
}

function showModal(id, urlKey) {
    document.getElementById("modal-" + id).classList.remove(modalHideClass);
    document.getElementById("modal-" + id).classList.add(modalShowClass);
    document.getElementById("modal-" + id).classList.add(modalNoScrollClass);

    const url = new URL(window.location.href);
    url.searchParams.set(urlKey, id);
    window.history.pushState({}, "", url.toString())
}

function closeModalOuterClick(e, id, urlKey) {
    if (e && e.target && (e.target.classList.contains("modal") || e.target.classList.contains("modal-center") || e.target.classList.contains("modal-close"))) {
        closeModal(id, urlKey);
    }
}