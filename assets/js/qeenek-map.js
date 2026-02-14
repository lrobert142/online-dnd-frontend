// Closure to stop global scope pollution
function initQeenekMap() {
    const qeenekMapEl = document.getElementById("fantasyMap");
    if (!qeenekMapEl) {
        return;
    }

    const defaultZoom = 0.825;
    let currentZoom = defaultZoom;
    const originalWidth = qeenekMapEl.getAttribute('width')
    const originalHeight = qeenekMapEl.getAttribute('height')
    qeenekMapEl.setAttribute("viewBox", "0 0 " + originalWidth + " " + originalHeight);

    function resizeMap() {
        qeenekMapEl.setAttribute('width', `${(originalWidth * currentZoom)}`);
        qeenekMapEl.setAttribute('height', `${(originalHeight * currentZoom)}`);
    }

    function zoomIn(amount) {
        currentZoom += amount
        resizeMap()
    }

    function zoomOut(amount) {
        currentZoom -= amount
        resizeMap()
    }

    function resetZoom() {
        currentZoom = defaultZoom
        resizeMap()
    }

    // Get it to a close enough fit to the default viewport size
    resizeMap(currentZoom)

    const labels = [
        [document.getElementById("burgLabel480"), "50905b22-27d5-496c-aa27-d2c90659f8ff"], //Windsore Planes
        [document.getElementById("burgLabel87"), "bae4178c-a1b7-48ec-90cd-6165b3cb2a44"], //Phandalin
        [document.getElementById("burgLabel329"), "c8b535d2-62b8-4ea9-921f-3f8957d91042"], //Wolfhaven
        [document.getElementById("burgLabel481"), "846c0fe8-df38-4531-bcee-bdb2e9b1b50c"], //Thundertree
        [document.getElementById("burgLabel3"), "59af4720-25af-4d9c-a814-c71afa539542"], //Profaned Capital
        [document.getElementById("burgLabel240"), "e304ce6e-917c-4c61-b48a-2788045ed5c9"], //Baldur's Gate

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
        element.style.cursor = "pointer";
        element.addEventListener("click", function () {
            showModal(id, "{{site.locationUrlKey}}")
        })
    }

    return {
        zoomIn: zoomIn,
        zoomOut: zoomOut,
        resetZoom: resetZoom,
    };
}

// Export for use in other locations, such as zoom elements.
const qeenekMap = initQeenekMap();