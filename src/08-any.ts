(() => {

  let myDynamic: any;

  myDynamic = 100;
  myDynamic = null;
  myDynamic = {};
  myDynamic = '';

  myDynamic = 'Hola';
  const rta = (myDynamic as string).toLowerCase();
  console.log(rta);

  myDynamic = 1234;
  const rta2 = (<number>myDynamic).toFixed();
  console.log(rta2);

})();
