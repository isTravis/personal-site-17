int totalFlashTime = 100; //In milliseconds
int stage = 1;
int x = 2560; //horizontal pixels in the screen
int y = 1440; //vertical pixels in the screen

void setup(){
  
size(x, y, P2D); //size of the processing window
  
}

void draw(){
  if(stage == 0){
    fill(255, 0, 0); //flash red
    rect(0, 0, x, y);
  }else if(stage==1){
    fill(0, 255, 0); //flash blue
    rect(0, 0, x,y);
  }else{
    fill(0, 0, 255); //flash green
    rect(0, 0, x, y);
  }
  stage = (stage+1)%3;
  delay(totalFlashTime/3); 
}
