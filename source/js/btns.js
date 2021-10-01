import {pageBody, CART_ITEM_DELETED, classAdding, removeWithAnimation} from './utils';

const btnClose = {
  self: pageBody.self.querySelectorAll('.close-btn')
};


// Functions

const btnCloseClickHandler = (evt) => {
  let target = evt.target;
  btnClose.self.forEach((btn) => {
    if (target === btn) {
      removeWithAnimation(btn.parentNode, CART_ITEM_DELETED, 300)
    }
  })
};

document.addEventListener('click', btnCloseClickHandler);
