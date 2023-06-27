(() => {

  type UserID = string | number;
  let userId: UserID;

  // Literal types

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;

  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  shirtSize = 'XdsfasdfaL';

  function greeting(myText: UserID, size: Sizes) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`)
    }
  }

  greeting('adsfa', 'L')

})();
