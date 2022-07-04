document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('.btn__modal');
    const modal = document.querySelector('.modal');
    const closeButton = document.querySelector('.modal__close');
    const modalContent = document.querySelector('.modal__content');
    const modalContentHeader = document.querySelector('.modal__content__header h3');
    const modalContentText = document.querySelector('.modal__content__text');

    for (let button of buttons) {
        button.onclick = function (e) {
            e.preventDefault();
            modal.classList.add('modal_active');
            document.body.style.overflow = "hidden";
            const target = e.currentTarget.getAttribute('data-modal');
            const content = document.querySelector("#" + target).innerHTML;
            modalContentHeader.textContent = e.currentTarget.textContent;
            modalContentText.innerHTML = content;
        }
    }

    closeButton.onclick = function () {
        modal.classList.remove('modal_active');
        document.body.style.overflow = "visible";
    }

    modal.onmousedown = function (e) {
        let target = e.target;
        if (e.target.closest('.' + modalContent.className) === null) {
            this.classList.remove('modal_active');
            document.body.style.overflow = "visible";
        }
    };

});