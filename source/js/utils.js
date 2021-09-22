import {topMenuFirst} from "./menu";

const pageBody = {
  self: document.querySelector('body'),
  wrapperLayout: document.querySelector('.wrapper-layout'),
  classes: {
    wrapperLayoutOpen: 'wrapper-layout--open'
  }
};

const wrapperLayoutClickHandler = () => {
  topMenuFirst.deliveryBtn.classList.remove(topMenuFirst.classes.btnActive);
  pageBody.wrapperLayout.classList.remove(pageBody.classes.wrapperLayoutOpen);
};

export {pageBody, wrapperLayoutClickHandler};
