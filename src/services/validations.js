export function validations(size, checkerboard){
    //input was limited to 20 to prevent potential hanging
    if(size === 0 ||
      size < 0 ||
      size === ''){
        alert("please enter numbers ranging between 1 - 20")
        return false;
      }
      if(checkerboard === 0 ||
        checkerboard < 0 ||
        checkerboard === ''){
          alert("please enter numbers ranging between 1 - 20")
          return false;
        }

      if(checkerboard > 20 ||
         size > 20){
           alert("please enter numbers ranging between 1 - 20")
           return false;
         }

  }

 