module.exports = function towelSort (matrix) {
  if (matrix == 0 || matrix === undefined)
  return [];
  
  matrix.map((elem,index) => {
    if(index % 2 !== 0) return elem.reverse()     
      else  return elem
  })  
  return [].concat(...matrix)

}