const topMenuSecond = {
  self: document.querySelector('.topmenu-second'),
  list: document.querySelector('.menu-list-js'),
  items: document.querySelectorAll('.menu-item-js'),
  links: document.querySelectorAll('.menu-link-js')
};

console.log(topMenuSecond.items);

const menuClickHandler = (evt)=> {
  let target = evt.target;
  console.log(target);
  if (target !== topMenuSecond.list) {
    topMenuSecond.links.forEach((link)=> {
      link.classList.remove('topmenu-second__list-link--active');
      target.classList.add('topmenu-second__list-link--active');
    })
  }
};

export default topMenuSecond.list.addEventListener('click', menuClickHandler);
