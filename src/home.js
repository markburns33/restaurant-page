function createHomePage() {
    const body = document.querySelector('body');
    body.className = '';
    body.classList.add('landing');

    const newContainer = document.createElement('div');
    newContainer.classList.add('landing-container');
    const landingTitle = document.createElement('h2');
    landingTitle.textContent = 'Good food choices are good investments.'
    landingTitle.classList.add('landing-title');

    const landingText = document.createElement('p');
    landingText.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi unde error optio soluta eum aliquid.'
    landingText.classList.add('landing-text');

    const landingButton1 = document.createElement('button');
    const landingButton2 = document.createElement('button');
    landingButton1.classList.add('landing-button');
    landingButton2.classList.add('landing-button');
    landingButton1.textContent = 'Menu';
    landingButton2.textContent = 'About';
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.color = 'white';
    });

    newContainer.appendChild(landingTitle);
    newContainer.appendChild(landingText);
    newContainer.appendChild(landingButton1);
    newContainer.appendChild(landingButton2);

    return newContainer;
}

export { createHomePage };