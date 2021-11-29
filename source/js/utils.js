export const ESC_KEYCODE = 27,
  CART_ITEM_DELETED = 'cart-list__item--deleted',
  DB_URL = 'http://localhost:3004/users';

export let targetTop, targetLeft;

export const pageBody = {
  self: document.querySelector('body'),
  wrapperLayout: document.querySelector('.wrapper-overlay'),
  classes: {
    wrapperLayoutOpen: 'wrapper-overlay--open',
    auth: 'user-auth'
  }
};

export const classAdding = (element, addedClass) => {
  element.classList.add(addedClass);
};

export const classRemoving = (element, removableClass) => {
  element.classList.remove(removableClass);
};

export const classToggling = (element, toggleClassName) => {
  element.classList.toggle(toggleClassName);
};

export const getPosition = (target) => {
  targetTop = target.getBoundingClientRect().top + pageBody.self.scrollTop;
  targetLeft = target.getBoundingClientRect().left;
};

export const removeWithAnimation = (element, animationClass, delay) => {
  element.classList.add(animationClass);
  setTimeout(() => {
    element.remove();
  }, delay);
};

export const eventEdding = (nodeName, eventName, cb) => {
  nodeName.addEventListener(eventName, cb);
};
