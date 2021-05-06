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