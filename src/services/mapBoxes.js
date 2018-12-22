/*
    this service generates our pattern(in array) to store in our application state
*/

export const mapBox = (size, checks) => {

  let isBlack = true;
  const black = '#';
  const white = ' ';
  const verticalBorder = '|';
  const horizontal = '-';
  const checkerCorner = '+';
  const checkerBorder = getChecker(horizontal, checkerCorner);
  const blackChecker = getChecker(black, verticalBorder);
  const whiteChecker = getChecker(white, verticalBorder);

  function getChecker(pattern, border) {
    let output = border;
    for (let i = 0; i < size; i++) {
      output = output.concat(pattern);
    }
    return output;
  }

  //lets create our rows and iterate upon them according to the checkboard size
  function createCheckerBox() {
    let output1 = [];
    let output2 = [];
    for (let brd = 0; brd < 2; brd++) {
      switch(brd) {
        case 0:
          output1 = output1.concat(createRow(brd));
        break;
        case 1:
        output2 = output2.concat(createRow(brd));
        break;
        default:
        break;
      }
      isBlack = !isBlack;
    }
    const remainer = Math.floor((checks - 2) / 2);
    let result = [];
    result = result.concat(output1, output2);
    if(remainer === 0 &&
      checks % 2 !== 0){
      result = result.concat(output1);
    }
    for(let i = 0; i < remainer; i++){
      result = result.concat(output1, output2);

      if (i === (remainer - 1) &&
      checks % 2 !== 0){
        result = result.concat(output1);
      }
    }
    result.push(result[0]);
  
    
    return result;

  }
  //function to create the row
  function createRow(brd) {
    let arr = [];
    for (let sq = 0; sq <= size; sq++) {

      //change our conditions if checkboards are odd
      if (checks % 2 !== 0) {
        if (brd !== 0) {
          isBlack = true;
        }
        isBlack = !isBlack;
      }
      //the string builder that will output the pattern and push it to the row
      const patt = createPattern(sq);
      arr.push(patt);

    }
    
    return arr;
  }
  //create the string pattern
  function createPattern(sq) {
    let text = '';

    //loop to generate a pattern/ checkerboard size
    for (let ch = 0; ch < checks; ch++) {
      if (sq === 0 ||
        sq === size) {
        text = text.concat(checkerBorder);
      } else {
        if (isBlack) {
          text = text.concat(blackChecker);
        } else {
          text = text.concat(whiteChecker);
        }
        isBlack = !isBlack;
      }
    }
    if (sq === 0) {
      text = text.concat(checkerCorner);
    } else {
      text = text.concat(verticalBorder);
    }
   
    return text;
  }

  return createCheckerBox();
}