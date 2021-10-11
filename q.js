function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
  factorialize(5);

  function vowels(num){
    if(num % 3 == 0){
      return 'fizz'
    }else if(num % 5 == 0){
      return 'buzz'
    }else if( num % 3 == 0 && num % 5 == 0 ){
      return 'fizz buzz'
    }else{
        return num
    }
    }
    
vowels(6)