import {pageBody, wrapperLayoutClickHandler} from "./utils";

const topMenuFirst = {
  self: pageBody.self.querySelector('.topmenu-first'),
  deliveryBtn: pageBody.self.querySelector('.delivery-zone__btn'),
  items: pageBody.self.querySelectorAll('.topmenu-item-js'),
  modal: pageBody.self.querySelector('.delivery-zone-js'),
  classes: {
    btnActive: 'btn--active'
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
  console.log(target);
  if (target !== topMenuFirst.self && target !== topMenuFirst.svgs) {
    target.classList.toggle(topMenuFirst.classes.btnActive);
    pageBody.wrapperLayout.classList.add(pageBody.classes.wrapperLayoutOpen);
  }
};

const topMenuSecondClickHandler = (evt)=> {
  let target = evt.target;
  if (target !== topMenuSecond.list) {
    topMenuSecond.links.forEach((link)=> {
      link.classList.remove(topMenuSecond.classes.listLinkActive);
      target.classList.add(topMenuSecond.classes.listLinkActive);
    })
  }
};

const listeners = () => {
  pageBody.wrapperLayout.addEventListener('click', wrapperLayoutClickHandler);
  topMenuFirst.self.addEventListener('click', topMenuFirstClickHandler);
  topMenuSecond.self.addEventListener('click', topMenuSecondClickHandler);
};

export default listeners();
export {topMenuFirst};
