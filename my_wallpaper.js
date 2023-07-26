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
  var x = 100;
  var ellipseY = 50;
  var eyeY = 50;

  var earLeft = 75
  var earRight = 125
  var earTop = 10
  var earBottom = 50


   fill("#FFF4E4");
   stroke(500);
   strokeWeight(0);

   ellipse(x, ellipseY, 50, 50); // top head
   ellipse(x, ellipseY+50, 50, 50);
   rect(x-25, 100, 50, 50);
   quad(earLeft, earTop, earLeft, earBottom, earRight, earTop, earRight, earBottom);

   fill ("#984447"); //red
   quad(earLeft+3, earTop+5, earLeft+3, earBottom-5, earRight-3, earTop+5, earRight-3, earBottom-5);

   fill("#FFF4E4"); //white 
   ellipse(x, ellipseY, 45, 45);

   fill("#0091AD"); //blue
   ellipse(85, eyeY, 15, 15); 
   ellipse(115, eyeY, 15, 15); 
   
   fill("#FFF4E4"); //white eye shines
   ellipse(85, eyeY-1, 3, 12); 
   ellipse(115, eyeY-1, 3, 12); 

   fill ("#984447"); // red nose
   triangle(95, 55, 105, 55, 100, 60);
   strokeWeight(5);
  
   fill ("#F3E9BD");
   strokeWeight(0);
  //  triangle(70, 20, 130, 120, 100, 150);
   triangle(75, 150, 75, 95, 100, 150);
   triangle(100, 150, 125, 95, 125, 150);

  //  fill("#6EFAFB"); 
  //  ellipse(100, 75, 30, 10);

  //  fill("#F6CB0D"); 
  //  ellipse(100, 80, 10, 10);

}  

