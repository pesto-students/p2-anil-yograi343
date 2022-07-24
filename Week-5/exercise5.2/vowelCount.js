  function getVowelCount(str) {
    const map = new Map();
  
    // convert lower case string to array
    const strArr = str.toLowerCase().split("");
  
    strArr.forEach((ch) => {
      if ("aeiou".includes(ch)) {
        if (map.has(ch)) {
          map.set(ch, map.get(ch) + 1);
        } else {
          map.set(ch, 1);
        }
      }
    });
    console.log(map);
  }
  
  getVowelCount("Generators, async/await promises programming"); 
