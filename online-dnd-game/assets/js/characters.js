---
---
window.onload = () => {
    const url = new URL(window.location.href);
    if (url.searchParams.has('{{site.characterUrlKey}}')) {
        showModal(url.searchParams.get('{{site.characterUrlKey}}'), '{{site.characterUrlKey}}')
    }
}