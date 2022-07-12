const lenChar = (characters) => {

    const res = [];
  
    for(const char of characters ){
      res.push(char.length);
    }
  
    return res;
  
  }

  // refactoring reduce

  const characters = "Bonjour tout le monde".split(' ')
  characters.reduce((acc, curr) => {
    acc.push(curr.length);
    return acc; 
  }, [] )

  const example =  "    Bonjour tout    le monde   "
  .trim().
  split(' ').
  filter(char => char != '')
  console.log(example)