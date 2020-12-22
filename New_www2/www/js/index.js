
  document.addEventListener('deviceready', addNumber, false);   

  function addNumber(){

      var firstNumber = parseInt(document.getElementById("t1").value);
      var secondNumber = parseInt(document.getElementById("t2").value);

      var result = firstNumber + secondNumber;

      document.getElementById("result11").value = result;

      }