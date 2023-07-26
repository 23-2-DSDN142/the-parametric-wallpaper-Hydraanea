//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background("#feB96e"); 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  var headX = 100;
  var headY = 50;
  var headSize = 50;

  var eyeY = 55;
  var eyeX = 115;
  var eyeSize = 18;

  var earLeft = 75;
  var earRight = 125;
  var earTop = 10;
  var earBottom = 50;

  var noseX = 100;
  var noseY = 55;


   fill("#FFF4E4");
   stroke(500);
   strokeWeight(0);

   ellipse(headX, headY, headSize, headSize); // top head
   ellipse(headX, headY+50, headSize, headSize);
   rect(headX-25, headY+50, headSize, headSize);
   quad(earLeft, earTop, earLeft, earBottom, earRight, earTop, earRight, earBottom);

   fill ("#984447"); //red ears
   quad(earLeft+3, earTop+5, earLeft+3, earBottom-5, earRight-3, earTop+5, earRight-3, earBottom-5);

   fill("#FFF4E4"); //white ear covers
   ellipse(headX, headY, headSize-5, headSize-5);

   fill("#0091AD"); //blue eye
   ellipse(eyeX, eyeY, eyeSize, eyeSize); 
   ellipse(eyeX-30, eyeY, eyeSize, eyeSize); 
   
   fill("#FFF4E4"); //white eye shines
   ellipse(eyeX, eyeY-1, eyeSize-12, eyeSize-3); 
   ellipse(eyeX-30, eyeY-1, eyeSize-12, eyeSize-3); 

   fill ("#984447"); // red nose
   triangle(noseX-5, noseY, noseX+5, noseY, noseX, noseY+5);
   strokeWeight(5);
  
   fill ("#F3E9BD");
   strokeWeight(0);
  //  triangle(70, 20, 130, 120, 100, 150);
  //  triangle(75, 150, 75, 95, 100, 150);
  //  triangle(100, 150, 125, 95, 125, 150);

  //  fill("#6EFAFB"); 
  //  ellipse(100, 75, 30, 10);

  //  fill("#F6CB0D"); 
  //  ellipse(100, 80, 10, 10);

  fill("#0091AD");
  rect(headX-45, headY+50, headSize+40, headSize+40);

  fill ("#F3E9BD");
  rect(headX-45, headY+60, headSize+40, headSize-30);

fill("#0091AD");
  rect(headX-55, headY+50, headSize+60, headSize-40);

}