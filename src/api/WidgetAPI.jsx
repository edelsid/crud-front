import createRequest from './CreateRequest';

export default class WidgetAPI {
   constructor(url) {
      this.url = url;
   }

   load(callback) {
      createRequest({
      url: `${this.url}/notes`,
      method: 'GET',
      callback: (status, response) => {
         if (status) {
            callback(null, response);
         } else {
            alert('Ошибка!');
         }
      },
   })}

   add(body, callback) {
      createRequest({
      url: `${this.url}/notes`,
      method: 'POST',
      body: {
         id: Math.floor(1 + Math.random() * (100 - 1)),
         content: body.text,
      },
      callback: (status, response) => {
         if (status) {
            callback(null, response);
         } else {
            alert('Ошибка!');
         }
      },
   })}

   delete(id, callback) {
      createRequest({
      url: `${this.url}/notes/${id}`,
      method: 'DELETE',
      callback: (status, response) => {
         if (status) {
            callback(null, response);
         } else {
            alert('Ошибка!');
         }
      },
   })}
}