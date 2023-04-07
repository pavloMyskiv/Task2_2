/** @format */

const dishArray = [
  {
    type: 'breakfast',
    name: 'Avocado Toast',
    cost: 8,
    description:
      'A simple yet delicious breakfast dish consisting of mashed avocado, tomato, and a poached egg on top of a slice of sourdough bread.',
    img: './img/avocadoToast.jpg',
  },
  {
    type: 'breakfast',
    name: 'Pancakes',
    cost: 10,
    description:
      'A classic breakfast option, fluffy pancakes served with maple syrup and butter.',
    img: './img/pancakes.jpg',
  },
  {
    type: 'breakfast',
    name: 'Breakfast Burrito',
    cost: 12,
    description:
      'A filling breakfast wrap with scrambled eggs, cheese, avocado, salsa, and bacon.',
    img: './img/breakfastBurrito.jpg',
  },
  {
    type: 'lunch',
    name: 'Caesar Salad',
    cost: 12,
    description:
      'A fresh and healthy salad made with romaine lettuce, Parmesan cheese, croutons, and a creamy Caesar dressing.',
    img: './img/caesarSalad.jpg',
  },
  {
    type: 'lunch',
    name: 'Grilled Chicken Sandwich',
    cost: 14,
    description:
      'A juicy chicken breast served on a toasted bun with lettuce, tomato, and mayonnaise.',
    img: './img/grilledChickenSandwich.jpg',
  },
  {
    type: 'lunch',
    name: 'Pasta Carbonara',
    cost: 16,
    description:
      'A classic Italian pasta dish made with spaghetti, pancetta, egg yolks, and Parmesan cheese.',
    img: './img/pastaCarbonara.jpg',
  },
  {
    type: 'dinner',
    name: 'Ribeye Steak',
    cost: 30,
    description:
      'A mouth-watering, juicy steak cooked to perfection and served with a side of garlic mashed potatoes.',
    img: './img/ribeyeSteak.jpg',
  },
  {
    type: 'dinner',
    name: 'Seafood Paella',
    cost: 26,
    description:
      'A Spanish rice dish with saffron, shrimp, mussels, clams, and chorizo.',
    img: './img/seafoodPaella.jpg',
  },
  {
    type: 'dinner',
    name: 'Vegan Curry',
    cost: 18,
    description:
      'A delicious and flavorful curry made with mixed vegetables, coconut milk, and spices.',
    img: './img/veganCurry.jpg',
  },
  {
    type: 'drinks',
    name: 'Margarita',
    cost: 10,
    description:
      'A classic tequila-based cocktail made with lime juice and triple sec.',
    img: './img/margarita.jpg',
  },
  {
    type: 'drinks',
    name: 'Old Fashioned',
    cost: 12,
    description:
      'A timeless whiskey cocktail made with bitters, sugar, and a twist of citrus.',
    img: './img/oldFashioned.jpg',
  },
  {
    type: 'drinks',
    name: 'Mango Lassi',
    cost: 6,
    description:
      'A refreshing Indian drink made with yogurt, mango, and honey.',
    img: './img/mangoLassi.jpg',
  },
  {
    type: 'drinks',
    name: 'Iced Matcha Latte',
    cost: 5.49,
    description:
      'A refreshing and energizing drink made with matcha green tea powder and milk.',
    img: './img/icedMatchaLatte.jpg',
  },
  {
    type: 'drinks',
    name: 'Strawberry Lemonade',
    cost: 3.99,
    description:
      'A classic summer drink made with fresh strawberries, lemon juice, and sweetened with honey.',
    img: './img/strawberryLemonade.jpg',
  },
];

const dishListContainer = document.querySelector('.dish_list');
const buttons = document.querySelectorAll('.button');

const generateItemHTML = (item) => {
  return (
    `<div class="dish_item">
  <div class="dish_image">
    <img src="` +
    item.img +
    `" alt="" />
  </div>
  <div class="dish_text">
    <div class="dish__main">
      <h3>` +
    item.name +
    `</h3>
      <p>$` +
    item.cost +
    `</p>
    </div>
    <p class="dish__description">
      ` +
    item.description +
    `
    </p>
  </div>
</div>`
  );
};
const renderSelectedItems = (button, array, container) => {
  let listHTML = ``;
  array.forEach((item) => {
    if (item.type == button.id || button.id == `all`) {
      listHTML = listHTML + generateItemHTML(item);
    }
  });
  container.innerHTML = listHTML;
};

renderSelectedItems(buttons[0], dishArray, dishListContainer);

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    renderSelectedItems(button, dishArray, dishListContainer);
  });
});
