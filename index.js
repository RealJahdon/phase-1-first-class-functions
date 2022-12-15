function receivesAFunction(callback) {
    callback()
  }
  
  function returnsANamedFunction() {
    return function named() {
      console.log("Name.")
    }
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log('No name.')
    }
  }