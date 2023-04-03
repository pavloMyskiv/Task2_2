
const dishItems = document.querySelectorAll('.dish_item');

const btnAll = {
  type: 'dish_item',
  body: document.getElementById('all'),
};
const btnBreakfast = {
  type: 'breakfast',
  body: document.getElementById('breakfast'),
};
const btnLunch = {
  type: 'lunch',
  body: document.getElementById('lunch'),
};
const btnDinner = {
  type: 'dinner',
  body: document.getElementById('dinner'),
};
const btnDrinks = {
  type: 'drink',
  body: document.getElementById('drinks'),
};

const sortDishes = (btn, colection) => {
  for (item of colection) {
    if (item.classList.contains(btn.type)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  }
};

btnAll.body.addEventListener('click', function () {
  sortDishes(btnAll, dishItems);
});
btnBreakfast.body.addEventListener('click', function () {
  sortDishes(btnBreakfast, dishItems);
});
btnLunch.body.addEventListener('click', function () {
  sortDishes(btnLunch, dishItems);
});
btnDinner.body.addEventListener('click', function () {
  sortDishes(btnDinner, dishItems);
});
btnDrinks.body.addEventListener('click', function () {
  sortDishes(btnDrinks, dishItems);
});
