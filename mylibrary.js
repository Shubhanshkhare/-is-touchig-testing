function isTouching(movingRect,fixedRect) {
    if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 
      && fixedRect.x-movingRect.x<(movingRect.width+fixedRect.width)/2
      &&movingRect.y-fixedRect.x<fixedRect.height/2+movingRect.height/2
      && fixedRect.y-movingRect.x<(movingRect.height+fixedRect.height)/2 ) 
    
      { 
        return true ;
    
    }
    
      else{
        return false ;
    }
    
  }
  