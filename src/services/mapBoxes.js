/*
    this service generates our pattern(in array) to store in our application state
*/

export const mapBox = function(size, checks){
    
    let isBlack = true;

//lets create our rows and iterate upon them according to the checkboard size
    function createCheckerBox(){
        let output = [];
        for(let brd= 0; brd < checks; brd++){

            output = output.concat(createRow(brd));
            isBlack = !isBlack;
            }
            return output;
          
    }
    //function to create the row
    function createRow(brd){
        let arr = [];
        for(let sq = 0; sq <= size; sq++){
            
            //change our conditions if checkboards are odd
            if(checks % 2 !== 0){
                if(brd === 0){
                    isBlack = false;
                }
                isBlack = !isBlack;
            }
            //the string builder that will output the pattern and push it to the row
            let patt = createPattern(sq);
             arr.push(patt);
             
        }
        if(brd === checks - 1){
        arr.push(arr[0]);
        }
        
        return arr;
    }
  //create the string pattern
    function createPattern(sq){
            let text = '';
            let patt = '';
            let initial = '';
               //loop to generate a pattern/ checkerboard size
               for(let ch = 0; ch < checks; ch++){
             
                if(sq === 0 || sq === size){
                 initial = '+';
                 patt = '-';
                    }else{
                     initial = '|';
                        if(isBlack){
                            patt = '#';
                        }else{
                            patt = ' ';
                        }
                    }
           
            text = text.concat(initial);
                    //size of a single checkerbox
                for(let i = 0; i < size; i++){
           
                    text = text.concat(patt);
                    
                }
               //reverse bool to maintain pattern
            isBlack = !isBlack;
               
        }
        text = text.concat(initial);
        return text;


    }
        
    return createCheckerBox();
}
