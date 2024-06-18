function removeChar(str) {
    str = str.slice(0, -1);
    str = str.slice(1);
    return str;
  };
  console.log(removeChar("hello"));

  function repeatStr(n, s) {
    return s.repeat(n);
  };
  console.log(repeatStr(3, 'abc')); te
  console.log(repeatStr(2, 'hello'));

  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (distanceToPump / mpg <= fuelLeft) {
      return true;
    } else {
      return false;
    }
   
  }; 
  console.log (zeroFuel (100,50,1))