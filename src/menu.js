function createMenuPage() {
    const body = document.querySelector('body');
    body.className = '';
    body.classList.add('menu');

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.color = 'black';
    });

    const newContainer = document.createElement('div');
    newContainer.classList.add('flex-container');

    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'A la Carte';
    menuTitle.classList.add('menu-title');

    const menuItem1 = document.createElement('div');
    menuItem1.classList.add('menu-flex-child');
    const title = document.createElement('p');
    title.classList.add('menu-item-title');
    title.textContent = 'Tagliatelle Gorgonzola'
    const text = document.createElement('p');
    text.textContent = 'Fresh tagliatelle in a creamy Gorgonzola sauce, topped with toasted walnuts, fresh arugula, and a drizzle of truffle oil. Rich, bold, and satisfying.'
    text.classList.add('menu-item-text');
    menuItem1.appendChild(title);
    menuItem1.appendChild(text);

    const menuItem2 = document.createElement('div');
    menuItem2.classList.add('menu-flex-child');
    const title2 = document.createElement('p');
    title2.classList.add('menu-item-title');
    title2.textContent = 'Penne Arrabbiata'
    const text2 = document.createElement('p');
    text2.textContent = 'Penne pasta in a spicy tomato sauce with garlic, red chili flakes, and fresh basil. Bold, fiery, and full of flavor.'
    text2.classList.add('menu-item-text');
    menuItem2.appendChild(title2);
    menuItem2.appendChild(text2);

    const menuItem3 = document.createElement('div');
    menuItem3.classList.add('menu-flex-child');
    const title3 = document.createElement('p');
    title3.classList.add('menu-item-title');
    title3.textContent = 'Spaghetti Carbonara'
    const text3 = document.createElement('p');
    text3.textContent = 'Classic spaghetti tossed in a creamy Parmesan sauce with crispy pancetta, cracked black pepper, and a touch of egg yolk. Rich, savory, and comforting.'
    text3.classList.add('menu-item-text');
    menuItem3.appendChild(title3);
    menuItem3.appendChild(text3);



    newContainer.appendChild(menuTitle);
    newContainer.appendChild(menuItem1);
    newContainer.appendChild(menuItem2);
    newContainer.appendChild(menuItem3);
    return newContainer;

}

export { createMenuPage };