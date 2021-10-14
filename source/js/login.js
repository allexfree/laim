import {pageBody, DB_URL, classAdding, eventEdding, classRemoving} from "./utils";

const modalLogin = {
    self: pageBody.self.querySelector('.modal-login-js'),
    hiddenInputRole: pageBody.self.querySelector('.hidden-input-js[name="user-role"]'),
    hiddenInputName: pageBody.self.querySelector('.hidden-input-js[name="user-name"]'),
    hiddenInputPass: pageBody.self.querySelector('.hidden-input-js[name="user-pass"]'),
    inputLogin: pageBody.self.querySelector('.input-js[name="login"]'),
    inputPass: pageBody.self.querySelector('.input-js[name="pass"]'),

    classes: {
      modalOpen: 'modal-login--open'
  }
};

export const documentLoad = () => {
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
      console.log(data);
      console.log(modalLogin.hiddenInputRole.value);
      data.forEach((item) => {
        modalLogin.hiddenInputRole.value = item.role;
      });
      console.log(modalLogin.hiddenInputRole.value);
    } else {
      console.error('Fuck');
    }
  });
};

eventEdding(document, 'DOMContentLoaded', documentLoad);
eventEdding(document, 'DOMContentLoaded', req);
eventEdding(pageBody.wrapperLayout, 'click', wrapperLayoutClickHandler);
