window.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.querySelector('.search-page__title'),
      searchMenu = document.querySelector('.categories-search__row'),
      searchBtnInner = document.querySelector('.search-page__title span'),
      checkboxItems = document.querySelectorAll('.checkbox__input'),
      searchValue = document.querySelector('.search-page__value');

let quantity = 0;


    //Открытие/закрытие выпадающих категорий в поиске


    searchBtn.addEventListener('click', () => {
        if(searchMenu.classList.contains('active')){
            searchMenu.classList.remove('active');
            searchBtnInner.classList.remove('active');
            searchBtnInner.textContent = 'Везде';
        }else{
            searchMenu.classList.add('active');
            searchBtnInner.classList.add('active');
            
        }
    })


    //Отоборажение количества выделенных элементов


    checkboxItems.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            checkbox.classList.toggle('active');
            quantity = document.querySelectorAll('.checkbox__input.active').length;
            if(quantity > 0){
                searchBtnInner.textContent = `Выбрано: ${quantity}`; 
            }else{
                quantity = 0;
                searchBtnInner.textContent = `Везде`; 
            }
        })
    })



})