(() => {

  let userId: string | number;

  userId = 12313;
  userId = 'hhggg';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`)
    } else {
      console.log(`number ${myText.toFixed(1)}`)
    }
  }

  greeting('Jhon');
  greeting(6767.4646464);

})();
