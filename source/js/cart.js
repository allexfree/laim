import {pageBody, targetTop, targetLeft, classAdding, getPosition} from './utils';

const cart = {
  self: pageBody.self.querySelector('.cart'),
  modal: pageBody.self.querySelector('.modal-cart-js'),
  link: pageBody.self.querySelector('.cart-link-js'),
  classes: {
    modalOpen: 'cart-modal--open'
  }
};


// Functions

const cartLinkClickHandler = (evt) => {
  let target = evt.target;

  getPosition(target);

  if (target === cart.link) {
    classAdding(cart.modal, cart.classes.modalOpen);
    classAdding(pageBody.wrapperLayout, pageBody.classes.wrapperLayoutOpen);
    cart.modal.style.top = targetTop + 10 + 'px';
    cart.modal.style.left = (targetLeft - targetLeft) - 84 + 'px';
  }
};

const listeners = () => {
  cart.self.addEventListener('click', cartLinkClickHandler);
};

export default listeners();
export {cart};
