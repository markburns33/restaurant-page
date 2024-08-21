import './styles.css';
import { createHomePage } from './home';
import { createMenuPage } from './menu';
import { createAboutPage } from './about';

document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button')
    const content = document.getElementById('content');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active')
            switch (button.textContent) {
                case 'Menu':
                    content.innerHTML='';
                    content.appendChild(createMenuPage());
                    break;
                case 'About':
                    content.innerHTML='';
                    content.appendChild(createAboutPage());
                    break;
                default:
                    content.innerHTML='';
                    content.appendChild(createHomePage());
                    break;
            }
        })

    })
})

const contentContainer = document.getElementById('content');

contentContainer.appendChild(createHomePage());


