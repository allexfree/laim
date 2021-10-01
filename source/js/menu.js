import {pageBody, ESC_KEYCODE, classAdding, classRemoving, classToggling, eventEdding} from "./utils";
import {cart} from './cart';


const topMenuFirst = {
  self: pageBody.self.querySelector('.topmenu-first'),
  deliveryBtn: pageBody.self.querySelector('.delivery-zone__btn'),
  items: pageBody.self.querySelectorAll('.topmenu-item-js'),
  modal: pageBody.self.querySelector('.delivery-zone-js'),
  classes: {
    btnActive: 'btns--active'
  }
};

const topMenuSecond = {
  self: pageBody.self.querySelector('.topmenu-second'),
  list: pageBody.self.querySelector('.menu-list-js'),
  items: pageBody.self.querySelectorAll('.menu-item-js'),
  links: pageBody.self.querySelectorAll('.menu-link-js'),
  classes: {
    listLinkActive: 'topmenu-second__list-link--active'
  }
};


// Functions

const topMenuFirstClickHandler = (evt) => {
  let target = evt.target;
  if (target !== topMenuFirst.self) {
    classAdding(target, topMenuFirst.classes.btnActive);
    classAdding(pageBody.wrapperLayout, pageBody.classes.wrapperLayoutOpen);
  } else {
    classRemoving(target, topMenuFirst.classes.btnActive);
    classRemoving(pageBody.wrapperLayout, pageBody.classes.wrapperLayoutOpen);
  }
};

const topMenuSecondClickHandler = (evt)=> {
  let target = evt.target;
  if (target !== topMenuSecond.list) {
    topMenuSecond.links.forEach((link)=> {
      classRemoving(link, topMenuSecond.classes.listLinkActive);
      classAdding(target, topMenuSecond.classes.listLinkActive);
    })
  }
};

const wrapperLayoutClickHandler = () => {
  classRemoving(topMenuFirst.deliveryBtn, topMenuFirst.classes.btnActive);
  classRemoving(pageBody.wrapperLayout, pageBody.classes.wrapperLayoutOpen);
  classRemoving(cart.modal, cart.classes.modalOpen);
};

const documentPressESCHandler = (evt) => {
  let keycode = evt.keyCode;
  if (keycode === ESC_KEYCODE) {
    classRemoving(topMenuFirst.deliveryBtn, topMenuFirst.classes.btnActive);
    classRemoving(pageBody.wrapperLayout, pageBody.classes.wrapperLayoutOpen);
    classRemoving(cart.modal, cart.classes.modalOpen);
  }
};

const listeners = () => {
  eventEdding(pageBody.wrapperLayout, 'click', wrapperLayoutClickHandler);
  eventEdding(topMenuFirst.self, 'click', topMenuFirstClickHandler);
  eventEdding(topMenuSecond.self, 'click', topMenuSecondClickHandler);
  eventEdding(document, 'keydown', documentPressESCHandler);
};

export default listeners();
