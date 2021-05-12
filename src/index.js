import 'bootstrap';
// import { Tooltip, Toast, Popover } from 'bootstrap';
import "./js/libs";
// import './style/style.scss'
import AOS from 'aos';

AOS.init({
  disable: function () {
    var maxWidth = 768;
    return window.innerWidth < maxWidth;
  }
});



const burger = document.getElementById('burger-menu')
const shadow = document.getElementById('shadow')
const menu = document.getElementById('main-menu')




const toggleMenu = () => {
    burger.classList.toggle('open')
    menu.classList.toggle('open')
    shadow.classList.toggle('open')
    
}
burger.addEventListener('click', toggleMenu)
shadow.addEventListener('click', toggleMenu)


// // карта

let mapList = document.querySelectorAll('.maps')

mapList.forEach((elementMap, index) =>{

    var coordinate = elementMap.dataset.coordinates

   
    let coordinate2 = coordinate.split(', ', 2)
    let lat=coordinate2[0] 
    let lng=coordinate2[1] 


    var mapNumber = elementMap.dataset.number
    mapNumber = 'map'+mapNumber
    // console.log( mapNumber)



    var myMap;
                  // при успешной загрузке API выполняется соответствующая функция
                  ymaps.ready(function () {
                    // создание экземпляра карты и его привязка к контейнеру с id="map"
                    myMap = new ymaps.Map(mapNumber, {
                      // центр карты
                      center: lat, lng
                      ,
                      // коэффициент масштабирования
                      zoom: 8,
                      // тип карты, по умолчанию используется тип карты "схема"
                      //type: "yandex#map",
                    });
                  }); // end ymaps.ready


})


let fields = document.querySelectorAll('.file_load');



Array.prototype.forEach.call(fields, function (input) {
  let label = input.nextElementSibling,
    labelVal = label.querySelector('.field__file-fake').innerText;

  input.addEventListener('change', function (e) {
    let countFiles = '';
    if (this.files && this.files.length >= 1)
      countFiles = this.files.length;

    if (countFiles)
      label.querySelector('.field__file-fake').innerText = 'Выбрано файлов: ' + countFiles;
    else
      label.querySelector('.field__file-fake').innerText = labelVal;
  });
});



