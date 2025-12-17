function initCollapsibles() {
    // Set up listeners for all buttons and content
    let allCollapsibleButtons = document.getElementsByClassName("collapsible-button");
    for (let i = 0; i < allCollapsibleButtons.length; i++) {
        allCollapsibleButtons[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }

    // Open the items marked as active by default
    let defaultOpenCollapsibleContents = document.getElementsByClassName("collapsible-content active");
    for (let i = 0; i < defaultOpenCollapsibleContents.length; i++) {
        defaultOpenCollapsibleContents[i].style.maxHeight = defaultOpenCollapsibleContents[i].scrollHeight + "px";
    }
}
