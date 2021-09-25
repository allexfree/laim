import {topMenuFirst} from './menu';

const ESC_KEYCODE = 27;

const pageBody = {
  self: document.querySelector('body'),
  wrapperLayout: document.querySelector('.wrapper-layout'),
  classes: {
    wrapperLayoutOpen: 'wrapper-layout--open'
  }
};

const documentPressESCHandler = (evt) => {
  let keycode = evt.keyCode;
  if (keycode === ESC_KEYCODE) {
    topMenuFirst.deliveryBtn.classList.remove(topMenuFirst.classes.btnActive);
    pageBody.wrapperLayout.classList.remove(pageBody.classes.wrapperLayoutOpen);
  }
};

const wrapperLayoutClickHandler = () => {
  topMenuFirst.deliveryBtn.classList.remove(topMenuFirst.classes.btnActive);
  pageBody.wrapperLayout.classList.remove(pageBody.classes.wrapperLayoutOpen);
};

export {pageBody, wrapperLayoutClickHandler, documentPressESCHandler};
