export function validations(size, checkerboard){
    //input was limited to 20 to prevent potential hanging
    if(size === 0 ||
      size < 0 ||
      size === ''){
        alert("please enter numbers ranging between 1 - 20")
        return false;
      }
      if(checkerboard === 1 ||
        checkerboard < 1 ||
        checkerboard === ''){
          alert("please enter number of checkerboard ranging between 2 - 20")
          return false;
        }

      if(checkerboard > 30 ||
         size > 30){
           alert("please enter numbers ranging between 1 - 20")
           return false;
         }

  }

 