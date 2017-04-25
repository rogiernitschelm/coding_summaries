const promise = new Promise((resolve, reject) => {
  const ourAsyncRequestSucceeded = true

  if (ourAsyncRequestSucceeded)
    resolve('SUCCESS!');

  if (!ourAsyncRequestSucceeded)
    reject('FAILURE!');
});

promise
  .then(result => console.log(result)) // SUCCESS!
  .catch(error => console.log(error)); // FAILURE!

Promise.all([somePromise1, somePromise2, somePromise3])
  .then(values => console.log(values))
  .catch(error => console.log(error));

Promise.race([fastPromise1, slowPromise2])
  .then(value => console.log(value)); // the fastest promise is returned
