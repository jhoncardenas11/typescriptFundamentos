(() => {

  let prices = [1,2,3,4,5,6, 'aa', true];
  prices.push(7);

  let products = ['hola', true];
  products.push(false);

  let mixed: (number | string | boolean)[] = ['hola', true];
  mixed.push(123456);



})();
