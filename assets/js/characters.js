---
---
function initCharacters() {
    if (!document.getElementById('character-list')) {
        return;
    }

    const url = new URL(window.location.href);
    if (url.searchParams.has('{{site.characterUrlKey}}')) {
        showModal(url.searchParams.get('{{site.characterUrlKey}}'), '{{site.characterUrlKey}}')
    }
}