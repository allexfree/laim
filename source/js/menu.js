const topMenuFirst = {
  self: document.querySelector('.topmenu-first'),
  items: document.querySelectorAll('.topmenu-item-js'),
  modal: document.querySelector('.delivery-zone-js')
};

console.log(topMenuFirst.inputs);

const topMenuSecond = {
  self: document.querySelector('.topmenu-second'),
  list: document.querySelector('.menu-list-js'),
  items: document.querySelectorAll('.menu-item-js'),
  links: document.querySelectorAll('.menu-link-js')
};


const topMenuFirstClickHandler = (evt) => {
  let target = evt.target;
  if (target !== topMenuFirst.self && target !== topMenuFirst.svgs) {
    target.classList.toggle('btns--active');
    topMenuFirst.modal.toggleAttribute('hidden');
    // topMenuFirst.items.forEach((item) => {
    //   item.classList.remove('btns--active');
    //
    // });
  }
}

const menuClickHandler = (evt)=> {
  let target = evt.target;
  if (target !== topMenuSecond.list) {
    topMenuSecond.links.forEach((link)=> {
      link.classList.remove('topmenu-second__list-link--active');
      target.classList.add('topmenu-second__list-link--active');
    })
  }
};

const listeners = () => {
  topMenuFirst.self.addEventListener('click', topMenuFirstClickHandler);
  topMenuSecond.self.addEventListener('click', menuClickHandler);
};

export default listeners();
