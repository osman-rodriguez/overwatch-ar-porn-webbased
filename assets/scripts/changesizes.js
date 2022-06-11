   function func1() {
        document.querySelector(".real").addEventListener("click", function() {
          document.getElementById("puta").setAttribute('scale', {
            x: 7,
            y: 7,
            z: 7,
          });
        });
      }
      
      function func2() {
        document.querySelector(".grande").addEventListener("click", function() {
          document.getElementById("puta").setAttribute('scale', {
            x: 5,
            y: 5,
            z: 5,
          });
        });
      }
      
      function func3() {
        document.querySelector(".mediana").addEventListener("click", function() {
          document.getElementById("puta").setAttribute('scale', {
            x: 3,
            y: 3,
            z: 3,
          });
        });
      }
      
      function func4() {
        document.querySelector(".pequeña").addEventListener("click", function() {
          document.getElementById("puta").setAttribute('scale', {
            x: 1,
            y: 1,
            z: 1,
          });
        });
      }

      function func5() {
        document.querySelector(".muñequita").addEventListener("click", function() {
          document.getElementById("puta").setAttribute('scale', {
            x: 0.3,
            y: 0.3,
            z: 0.3,
          });
        })
      };
      
      window.onload = function() {
        func1();
        func2();
        func3();
        func4();
        func5();
      }