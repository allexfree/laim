const topMenuSecond = {
  list: document.querySelector('.menu-list-js'),
  items: document.querySelectorAll('.menu-item-js'),
  links: document.querySelectorAll('.menu-link-js')
};

console.log(topMenuSecond.items);

const menuClickHandler = (evt)=> {
  let target = evt.target;
  topMenuSecond.links.forEach((link)=> {
    link.onfocus = function () {
      console.log('yes');
    }
    link.onblur = function () {
      console.log('no');
    }
  })
};

export default topMenuSecond.list.addEventListener('click', menuClickHandler);
