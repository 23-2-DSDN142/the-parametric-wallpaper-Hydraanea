
//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;

  var starX1 = 40;
  var starY1 = 50;
  var starSize1 = 50;
  
  var starX2 = 160;
  var starY2 = 90;
  var starSize2 = 50;
  
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

  //colour varibles are in my symbol function.

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 220;
  pWallpaper.grid_settings.cell_height = 300;
  pWallpaper.grid_settings.row_offset  = 100;  

}

function wallpaper_background() {
  // background("#feB96e"); //yellow background
  background("#984447"); //red background

}


function my_symbol() { // do not rename this function. Treat this similarly to a Draw function


  noStroke(0);
  strokeWeight(1);

// COLOURS VARIABLES

  let bodyColour = color(255, 244, 228); // white cat
  // let baseColour = color(0, 145, 173); // blue hat
  let baseColour = color(87, 30, 23); // red hat
  // let baseColour = color(255, 244, 228); //white hat
  let accentColour = color(243, 233, 189); // yellow paws/eyebrows
  let starColour = (255, 255, 255); // white star
  let extraColour = color(152, 68, 71); // red nose/ears
  let eyeColour = color(0, 145, 173); //blue eyes

  if (baseColour.toString() === color(87, 30, 23).toString()) { // if hat colour = red
    eyeColour = color(0, 145, 173); //blue eyes
  } else {
    eyeColour = color(87, 30, 23); //dark red eyes
  }
 

//////////////// BACKGROUND STARS/FLOWERS

fill (starColour);
ellipse(starX1, starY1, starSize1, starSize1); //star 1
   fill ("#feB96e"); 
  ellipse(starX1-20, starY1+20, starSize1-10, starSize1-10); //petals
  ellipse(starX1+20, starY1+20, starSize1-10, starSize1-10);
  ellipse(starX1-20, starY1-20, starSize1-10, starSize1-10);
  ellipse(starX1+20, starY1-20, starSize1-10, starSize1-10);
 
   fill (starColour);
  
ellipse(starX2, starY2, starSize1, starSize1); //star 1
fill ("#feB96e"); 
ellipse(starX2-20, starY2+20, starSize2-10, starSize2-10); //petals/star shaper
ellipse(starX2+20, starY2+20, starSize2-10, starSize2-10);
ellipse(starX2-20, starY2-20, starSize2-10, starSize2-10);
ellipse(starX2+20, starY2-20, starSize2-10, starSize2-10);



///////////////////// CAT


   fill(bodyColour);
   ellipse(headX, headY, headSize, headSize); // top head
   ellipse(headX, headY+50, headSize, headSize); // body
   quad(earLeft, earTop, earLeft, earBottom, earRight, earTop, earRight, earBottom); //ea

   fill (extraColour); //red ears
   quad(earLeft+3, earTop+5, earLeft+3, earBottom-5, earRight-3, earTop+5, earRight-3, earBottom-5);

   fill(bodyColour); //white ear covers
   ellipse(headX, headY, headSize-5, headSize-5);

   fill(eyeColour); //blue eye
   ellipse(eyeX, eyeY, eyeSize, eyeSize); 
   ellipse(eyeX-30, eyeY, eyeSize, eyeSize); 
   
   fill(bodyColour); //white eye shines
   ellipse(eyeX, eyeY-1, eyeSize-12, eyeSize-3); 
   ellipse(eyeX-30, eyeY-1, eyeSize-12, eyeSize-3); 

   fill (accentColour); //eyebrows
   ellipse(eyeX-30, eyeY-12, eyeSize-5, eyeSize-10);
   ellipse(eyeX, eyeY-12, eyeSize-5, eyeSize-10);


   fill (extraColour); // red nose
   triangle(noseX-5, noseY, noseX+5, noseY, noseX, noseY+5);
   triangle(noseX+5, noseY+10, noseX-5, noseY+10, noseX, noseY+5);
   
   fill(bodyColour);
   triangle(noseX+6, noseY+11, noseX-6, noseY+11, noseX, noseY+6);




  /////////////////// MAGICIAN HAT

  fill(baseColour);
  rect(headX-45, headY+50, headSize+40, headSize+40);

  fill (accentColour);
  rect(headX-45, headY+60, headSize+40, headSize-30);

  fill(baseColour);
  rect(headX-55, headY+50, headSize+60, headSize-40);

  fill (accentColour); //paws
  ellipse(eyeX-30, eyeY+45, eyeSize, eyeSize-5);
  ellipse(eyeX, eyeY+45, eyeSize, eyeSize-5);

}

