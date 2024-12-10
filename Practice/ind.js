
function createCounterDec() {
    let counter = 0;
  
    this.increment = function () {
      counter += 1;
    };
    this.getValue = function () {
      return counter;
    };
  }
  
  const counter2 = new createCounterDec();
  
  counter2.increment();
  counter2.increment();
  console.log(counter2.getValue());

  counter2.increment();

  console.log(counter2.getValue());
