function s(a,b) {
  console.log(a + b + a);
    return a + b + a;
  }
  function f(a, b, c) {
    function sum(a, b) {
      console.log(a + b);
      return a + b;
    }
    
          a = a || 2;
        b = b || 3;
    
  if ( typeof c == "function"){
      s(a,b);
      return a + b + a;
    } else {
      sum(a,b);
      console.log(a);
      return a + b;
    }  
   
  }
      f(3,5,s);