function createAboutPage() {
    const body = document.querySelector('body');
    body.className = '';
    body.classList.add('landing');

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.color = 'white';
    });

    const newContainer = document.createElement('div');
    newContainer.classList.add('landing-container')

    const title = document.createElement('h2')
    title.classList.add('landing-title');
    title.textContent = 'GoodFood\'s mission';

    const text = document.createElement('p');
    text.classList.add('landing-text');
    text.textContent = 'At GoodFood, we\’re passionate about pasta. Our mission is to bring you the freshest, most flavorful pasta dishes made with high-quality ingredients. Whether you\'re craving a classic favorite or something new, we create every dish with care and love. Join us for a meal that feels like home.'

    newContainer.appendChild(title);
    newContainer.appendChild(text);

    return newContainer;
}
export { createAboutPage };