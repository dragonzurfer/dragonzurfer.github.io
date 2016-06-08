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
//obstacle
if(start)
{
  wall.draw(translate-=3,310,32,32);
  wall.draw(translate2-=5,310,32,32);
  wall.draw(translate3-=5,310,32,32);

  if(translate<-2000)
    translate=600;
  if(translate2<-1000)
    translate2=translate+1300;
  if(translate3<-500)
    translate3=translate2+1300;
//  if((translate==132&&(many>=240)))
  if(spacestart)
  {
      if(translate>=68&&translate<=80)
      {
        console.log("many",many);
        if(many>253)
        {
            console.log("game over");
              console.log("many",many);
                console.log("translate",translate);
                start=false;
        }
      }
    }
else
{
  if(translate>=68&&translate<=132)
  {
      console.log("many",many);
      if(many>253)
      {
        console.log("game over");
        console.log("many",many);
        console.log("translate",translate);
        start=false;
      }
    }
  }

  }


}



function gameover()
{
  go.drawAnimated(325,130,[0]);//game over image
  manrun.drawAnimated(manx,many+8,[0,1,2,3,4,5,6,7]);//game is over
  wall.draw(translate,310,32,32);//previous positions of the blocks
  wall.draw(translate2,310,32,32);//hence helping the player understand jump lengths
  wall.draw(translate3,310,32,32);
}
