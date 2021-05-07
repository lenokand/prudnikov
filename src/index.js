import 'bootstrap';
// import { Tooltip, Toast, Popover } from 'bootstrap';
import "./js/libs";
// import './style/style.scss'
import AOS from 'aos';
AOS.init();
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
// var myMap;
// // при успешной загрузке API выполняется функция инициализации карты
// ymaps.ready(init);

// function init(){
//     // создание экземпляра карты и его привязка к контейнеру с id="map"
//     myMap = new ymaps.Map("map", {
//         // центр карты
//         center: [55.75396, 37.620393],
//         // коэффициент масштабирования
//         zoom: 8,
//         // тип карты, по умолчанию используется тип карты "схема"
//         //type: "yandex#map",
//     });
// }

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





let myUnicMap = document.getElementById('map')

var coordinate = myUnicMap.dataset.coordinates
let coordinate2 = coordinate.split(', ', 2)
let lat=coordinate2[0] 
let lng=coordinate2[1] 

var myMap;
                  // при успешной загрузке API выполняется соответствующая функция
                  ymaps.ready(function () {
                    // создание экземпляра карты и его привязка к контейнеру с id="map"
                    myMap = new ymaps.Map("map", {
                      // центр карты
                      center: lat, lng
                      ,
                      // коэффициент масштабирования
                      zoom: 8,
                      // тип карты, по умолчанию используется тип карты "схема"
                      //type: "yandex#map",
                    });
                  }); // end ymaps.ready

console.log("rere")

