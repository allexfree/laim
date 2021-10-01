import {pageBody, classToggling, classAdding} from './utils';

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
  evt.preventDefault();
  classAdding(cart.modal, cart.classes.modalOpen);
  classAdding(pageBody.wrapperLayout, pageBody.classes.wrapperLayoutOpen);
};

const listeners = () => {
  cart.self.addEventListener('click', cartLinkClickHandler);
};

export default listeners();
export {cart};
