window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.page-menu__list'),
    burger = document.querySelector('.page-menu__burger'),
    header = document.querySelector('.page-menu__header'),
    parentBlock = document.querySelector('.page-menu'),
    originalHeight = parentBlock.style.height,
    heightBefore = window.getComputedStyle(header).height;

const links = document.querySelectorAll('.page-menu__link_arrow'),
      submenuItems = document.querySelector('.submenu-page');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        if(submenuItems.classList.contains('active')){
            submenuItems.classList.remove('active');
            
        }else{
            submenuItems.classList.add('active')
            
        }
    })

    
})

    burger.addEventListener('click', () => {
        if(menu.classList.contains('active')){
            menu.classList.remove('active');
            parentBlock.style.height = originalHeight;
            

        }else{
            menu.classList.add('active')
            parentBlock.style.height = heightBefore;
            submenuItems.classList.remove('active')
        }
    })
})

