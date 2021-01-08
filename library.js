//edasjf'sfdjrdghfdrhfdrhfdhtrsejuykuy
function istouching (ob1, ob2) {
    var hi = ob1.width / 2 + ob2.width / 2
    var bye = ob1.height / 2 + ob2.height / 2
      if(ob2.x - ob1.x <= hi && 
        ob1.x - ob2.x <= hi &&
        ob1.y - ob2.y <= bye &&
        ob2.y - ob1.y <= bye ) {
        return true;
    } else {
      return false;
    }
  
   
  }
  
  function bounceOff(ob1,ob2){
    var hi = ob1.width / 2 + ob2.width / 2
    var bye = ob1.height / 2 + ob2.height / 2
    if(ob2.x - ob1.x <= hi && 
      ob1.x - ob2.x <= hi ) {
      ob1.velocityX = ob1.velocityX * (-1);
      ob2.velocityX = ob2.velocityX * (-1);   
      }
    if(ob1.y - ob2.y <= bye &&
        ob2.y - ob1.y <= bye ) {
        ob1.velocityY = ob1.velocityY * (-1);
        ob2.velocityY = ob2.velocityY * (-1); 
      }
  }