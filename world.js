function DrawMap()
{
  var x=-32;
  var y=250+92;

for(var j=0;j<200;j++)
{
  for(var i=0;i<50;i++)
  {
    wall.draw(x,y,32,32);
    x=x+32;
  }
  y+=31;x=0;
}
  for(var j=0;j<11;j++)
  {
  for(var i=0;i<50;i++)
  {
    water.draw(i*32,j*31,32,32);
  }}
//obstacle
if(start)
{
  if(jumpcount>5)
  {
    jumpcount=0;
    translate4=1000;
  }

  if(score==50||score==100||score==200||score==300||score==400)
  {
    s+=1;
    t2+=2;
    t3+=1;
  }
  special.drawAnimated(translate4-=3,310,[0,1,2,3,4,5,6]);
 wall.draw(translate-=s,310,32,32);
  wall.draw(translate2-=t2,310,32,32);
  wall.draw(translate3-=t3,310,32,32);

  if(translate==0||translate2==0||translate3==0){  jumpcount+=1;
  document.getElementById("score").textContent = Math.floor(score+=10);}
  if(translate<-2000)
    translate=1000;
  if(translate2<-1000)
    translate2=2300;
  if(translate3<-500)
    translate3=1300;

//  if((translate==132&&(many>=240)))
  if(spacestart)
  {
      if((translate>=68&&translate<=80)||(translate2>=68&&translate2<=80)||(translate3>=68&&translate3<=80))
      {
        console.log("translate2",translate2);
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
  if(translate>=68&&translate<=132||(translate2>=68&&translate2<=132)||(translate3>=68&&translate3<=132))
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
  go.drawAnimated(0,0,[0]);//game over image
  manrun.drawAnimated(manx,many+8,[0,1,2,3,4,5,6,7]);//game is over
  wall.draw(translate,310,32,32);//previous positions of the blocks
  wall.draw(translate2,310,32,32);//hence helping the player understand jump lengths
  wall.draw(translate3,310,32,32);
}
