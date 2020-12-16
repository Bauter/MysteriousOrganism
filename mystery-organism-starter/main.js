// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  // return random index of 'dnaBases' array
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//Step 1 - Create a factory function called 'pAequorFactory()'

const pAequorFactory = (num, array) => {
  return {
    specimenNum: num,
    dna: array,
    mutate() {
      // random number (0-14 and 0-2) generators to use to randomly select index of array.
      const randomNum = Math.floor(Math.random() * 15);
      const randomLetter = Math.floor(Math.random() * 3);
      // Select element in 'dna' array to mutate.
      const mutatedBase = this.dna[randomNum];
      // conditional statement to determine letter and remaining choices.
      switch(mutatedBase) {
        case 'A':
          // list the other options
          const optionA = ['T', 'C', 'G'];
          // select letter form array with random number.
          const select1 = optionA[randomLetter];
          // update specific item in array.
          array[randomNum] = select1;
          // modify array.
          pAequorFactory.dna = array;
          break;
        case 'T':
          // list the other options.
          const optionB = ['A', 'C', 'G'];
          // select letter form array with random number.
          const select2 = optionB[randomLetter];
          // update specific item in array.
          array[randomNum] = select2;
          // modify array.
          pAequorFactory.dna = array;
          break;
        case 'C':
          // list the other options.
          const optionC = ['A', 'T', 'G'];
          // select letter form array with random number.
          const select3 = optionC[randomLetter];
          // update specific item in array.
          array[randomNum] = select3;
          // modify array.
          pAequorFactory.dna = array;
          break;
        case 'G':
          // list the other options.
          const optionD = ['A', 'T', 'C'];
          // select letter form array with random number.
          const select4 = optionD[randomLetter];
          // update specific item in array.
          array[randomNum] = select4;
          // modify array.
          pAequorFactory.dna = array;
          break;
        default:
          console.log('That letter is not one of the provided options');
      }
    },
    compareDNA(pAequor) {
      console.log(`Sample 1: \n ${this.specimenNum} \n ${this.dna}`);
      console.log(`Sample 2: \n ${pAequor.specimenNum} \n ${pAequor.dna}`)
      const testSubject1 = this.dna;
      const testSubject2 = pAequor.dna;
      const matchedLetters = []
      for (let i=0; i< testSubject1.length; i++) {
          if(testSubject1[i] === testSubject2[i]) {
            
            matchedLetters.push(testSubject1[i]);
          };
      };
      console.log(matchedLetters.length)
      let amountMatching = matchedLetters.length
      let outOf = amountMatching / 15;
      let result = outOf * 100;
      console.log(`${Math.floor(result)}% match between subjects!`);
      return Math.floor(result);
    }
  };
};

// Test Function 1:
let test1 = pAequorFactory(1, mockUpStrand())
console.log(`Test 1: \n ${JSON.stringify(test1)}`);

// Test Function 2:
let test2 = pAequorFactory(1, mockUpStrand())
console.log(`Original: \n ${JSON.stringify(test2)}`)
test2.mutate();
console.log(`Mutated: \n ${JSON.stringify(test2)}`)

//Test Function 3:
let test3 = pAequorFactory(1, mockUpStrand());
let test4 = pAequorFactory(2, mockUpStrand());
console.log(JSON.stringify(test3))
console.log(JSON.stringify(test4))
test3.compareDNA(test4);









