export const ESC_KEYCODE = 27,
  CART_ITEM_DELETED = 'cart-list__item--deleted';

export const pageBody = {
  self: document.querySelector('body'),
  wrapperLayout: document.querySelector('.wrapper-layout'),
  classes: {
    wrapperLayoutOpen: 'wrapper-layout--open'
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

export const removeWithAnimation = (element, animationClass, delay) => {
  element.classList.add(animationClass);
  setTimeout(() => {
    element.remove();
  }, delay);
};

export const eventEdding = (nodeName, eventName, cb) => {
  nodeName.addEventListener(eventName, cb);
};
