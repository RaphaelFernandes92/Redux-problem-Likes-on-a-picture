export default function(hearts = 0, action) {
  
  if(action.type === 'increasehearts') {
    var newHearts = hearts + 1;
    return newHearts;
  } else {
    return hearts;
  }
  
}