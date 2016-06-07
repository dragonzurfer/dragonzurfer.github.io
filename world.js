function DrawMap()
{
  var x=0;
  var y=250+92;


  for(var i=0;i<32;i++)
  {
    bg.draw(x+=32,y,32,32);
  }
  for(var j=0;j<11;j++)
  {
  for(var i=0;i<32;i++)
  {
    water.draw(32+i*32,j*31,32,32);
  }}

}
