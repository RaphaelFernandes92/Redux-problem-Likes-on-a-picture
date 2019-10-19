export default function(likes = 0, action) {
  
  if(action.type === 'increaselikes') {
    var newLikes = likes + 1;
    return newLikes;
  } else {
    return likes;
  }
  
}