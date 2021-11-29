import {pageBody, DB_URL, classAdding, eventEdding, classRemoving} from "./utils";

const modalLogin = {
    self: pageBody.self.querySelector('.modal-login-js'),
    hiddenInputName: pageBody.self.querySelector('.hidden-input-js[name="user-name"]'),
    hiddenInputPass: pageBody.self.querySelector('.hidden-input-js[name="user-pass"]'),
    inputLogin: pageBody.self.querySelector('.input-js[name="login"]'),
    inputPass: pageBody.self.querySelector('.input-js[name="pass"]'),
    btnSubmit: pageBody.self.querySelector('.form-login-submit-js'),

    classes: {
      modalOpen: 'modal-login--open'
  }
};

export const documentLoadHandler = () => {
  classAdding(pageBody.wrapperLayout, pageBody.classes.wrapperLayoutOpen);
  classAdding(modalLogin.self, modalLogin.classes.modalOpen);
};

export const wrapperLayoutClickHandler = () => {
  classRemoving(pageBody.wrapperLayout, pageBody.classes.wrapperLayoutOpen);
  classRemoving(modalLogin.self, modalLogin.classes.modalOpen);
};

export const req = () => {
  const request = new XMLHttpRequest();
  request.open('GET', DB_URL);
  request.setRequestHeader('Content-type', 'application-json; charset=utf-8');
  request.send();
  eventEdding(request, 'load', () => {
    if (request.status === 200) {
      let data = JSON.parse(request.response);
      data.forEach((item, index) => {
        modalLogin.hiddenInputName.value = item.login;
        modalLogin.hiddenInputPass.value = item.login;
      });
    } else {
      console.error('Fuck');
    }
  });
};

export const inputHandler = (evt) => {
  if (modalLogin.inputLogin.value === 'user' && modalLogin.inputPass.value === 'user') {
    alert('Вы авторизовались как User');
    classRemoving(pageBody.wrapperLayout, pageBody.classes.wrapperLayoutOpen);
    classRemoving(modalLogin.self, modalLogin.classes.modalOpen);
    classAdding(pageBody.self, pageBody.classes.auth);
    modalLogin.hiddenInputName.value = '';
    modalLogin.hiddenInputPass.value = '';
    modalLogin.inputLogin.value = '';
    modalLogin.inputPass.value = '';
  } else {
    alert('Пользователь с таким логином и паролем не найден. Попробуйте еще раз');
    evt.preventDefault();
  }
};


eventEdding(modalLogin.self, 'submit', inputHandler);
eventEdding(document, 'DOMContentLoaded', documentLoadHandler);
eventEdding(document, 'DOMContentLoaded', req);
eventEdding(pageBody.wrapperLayout, 'click', wrapperLayoutClickHandler);
