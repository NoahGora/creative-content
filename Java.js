 "use strict"
   /* Wenn man auf den Button klickt, toggle --> zeigt er den Inhalt oder nicht*/
      function myFunction() {
        document.getElementById("über").classList.toggle("animation");
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      // Close the dropdown if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName('dropdown-content');
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
              document.getElementById("über").classList.remove("animation");
            }
          }
        }
      }
      
      /* Um Bilder zu vergrößern */
      const box= document.getElementById("box")
      const scaleImg= document.getElementById("scaleImg")

      box.addEventListener("click", () =>{
        scaleImg.classList.toggle("scaleImg")
          scaleImg.classList.toggle("scaleImgScaled")
      })

     /* window.addEventListener("click", (event) => {
        if(!event.target.matches('.dropbtn')){
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for( i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
              openDropdown.classList.remove('show');
              document.getElementById("über").classList.remove("animation");
            }
            
          } 
        }
      }) */
