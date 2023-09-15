// === PUBLICATIONS SELECTOR === //
window.setupPubsBlock = function setupPubsBlock() {
    let boxs = document.querySelectorAll(".publication-selector__item");
    let menu = document.querySelector(".publication-selector__menu");
    let btns = document.querySelectorAll('.pub-menu-slider .pub-selector-button');

//������ ���� �� �������� ���� ���� � �������� � ���� ������
    if (menu && btns) {

        //��� ���� ������ ������� �����, � ��� ������� �������������
        btns.forEach(elem => {
            elem.addEventListener("click",
                function (event) {
                    btns.forEach(btn => {
                        btn.classList.remove("pub-selector-button-active");
                    });
                    elem.classList.add("pub-selector-button-active");
                });
        });

        menu.addEventListener("click", function (event) {
            if (event.target.tagName != "BUTTON") return false;

            let target = event.target.dataset["view"];

            //���� ���� ���� �� ���� �������� ��� ������
            if (boxs) {
                boxs.forEach(function (el) {
                    el.classList.remove("hide");
                    if (!el.classList.contains(target) && target != "pub-all") {
                        el.classList.add("hide");
                    }
                });
            }
        });
    }
}
setupPubsBlock();