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
    dna: array
  };
};

console.log(pAequorFactory(1, mockUpStrand()))






