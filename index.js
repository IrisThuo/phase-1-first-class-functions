function receivesAFunction(doSomething) {
    doSomething();
}

   
  function returnsAnAnonymousFunction(){
    return () => {};
  }

  function returnsANamedFunction(){
    function someFunction(){

    }
    return someFunction;
  }


  