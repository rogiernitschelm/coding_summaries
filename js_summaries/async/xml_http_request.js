const root = 'https://jsonplaceholder.typicode.com/posts/1';

const httpGetRequest = url => {
  return new Promise(
    (resolve, reject) => {
      const request = new XMLHttpRequest();
      request.onload = function () {
          if (request.status === 200) {
              resolve(request.response);
          } else {
              reject(new Error(request.statusText));
          }
      };
      request.onerror = function () {
          reject(new Error(request.statusText));
      };
    request.open('GET', url);
    request.send();
  });
}

httpGetRequest(root)
  .then(response => console.log(response))
