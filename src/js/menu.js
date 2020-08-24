const menu = document.querySelector('.page-menu__list'),
    burger = document.querySelector('.page-menu__burger'),
    header = document.querySelector('.page-menu__header'),
    parentBlock = document.querySelector('.page-menu'),
    originalHeight = parentBlock.style.height;
    heightBefore = window.getComputedStyle(header).height

    console.log(originalHeight)



burger.addEventListener('click', () => {
    if(menu.classList.contains('active')){
        menu.classList.remove('active');
        parentBlock.style.height = originalHeight;

    }else{
        menu.classList.add('active')
        parentBlock.style.height = heightBefore;
    }
})

