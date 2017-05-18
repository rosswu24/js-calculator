/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

// variables are private

function calculatorModule(){
    var memory = 0;
    var total =0;
    var calculator = {};



  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  function load(x){
        total = x;
        return x;
    }



  /**
   * Return the value of `total`
   * @return { Number }
   */

function getTotal(){
    return total;
}



  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
   function add(x){
    total+=x;
    return total;
   }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

   function subtract (x){
    total -=x;
    return total;
   }



   

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

   function multiply(x){
    total*=x;
    return total;
   }



  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

   function divide(x){
    total/=x;
    return total;
   }



  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
   function recallMemory(){
    return memory;
   }


  /**
   * Stores the value of `total` to `memory`
   */

  function saveMemory(){
   memory = total;

  }


  /**
   * Clear the value stored at `memory`
   */

   function clearMemory(){
    memory =0;

   }



  /**
   * Validation
   */

return {
    load: load,
    getTotal: getTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    recallMemory:recallMemory,
    saveMemory: saveMemory,
    clearMemory: clearMemory
    };

}