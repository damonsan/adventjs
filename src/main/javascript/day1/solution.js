function wrap(gift) {
  let topbottom = "*".repeat(gift.length + 2);
  return topbottom + "\n*" + gift + "*\n" + topbottom;
}
  
function wrapping(gifts) {
  let wrapped = [];
  for (let gift of gifts) {
    wrapped.push(wrap(gift));   
  }
  return wrapped
}