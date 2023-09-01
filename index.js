const root = document.getElementById('root');
const buttonClass = 'btn';
const imgClass = '.btn__img';
const visibleClass = 'visible';
const plusIcon = './img/plus.svg'
const minusIcon = './img/minus.svg'

root.addEventListener('click', ({ target }) => {
    if (target.classList.contains(buttonClass)) {
        const isVisible = target.classList.contains(visibleClass);
        const img = target.querySelector(imgClass)

        if (isVisible) {
            target.classList.remove(visibleClass);
            img.src = plusIcon
        } else {
            target.classList.add(visibleClass);
            img.src = minusIcon
        }

    }
});