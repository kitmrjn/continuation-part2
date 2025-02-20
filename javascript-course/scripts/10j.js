let calculation = localStorage.getItem('calculation') ||'';

      DisplayResult();

      function updateCalculation(chosenNumber) {
        calculation += chosenNumber ;
        DisplayResult();
        localStorage.setItem('calculation', calculation);
      }
      
      function saveCalculation() {
        localStorage.setItem('calculation', calculation);
      }

      function DisplayResult () {
        document.querySelector('.js-display-result').innerHTML = calculation
      }


    