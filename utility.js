var Keyboard=function(){
  this.leftArrow=false;
  this.rightArrow=false;
  this.upArrow=false;
  this.downArrow=false;
};
var keyspace;
var key_left=37;
var key_right=39;
var key_up=32;
var key_down=40;
window.key=null;


function InitializeKeyboard()//Keyboard controls
{
  window.key=new Keyboard;

  $(document).keydown(function(e){
    if(e.keyCode==key_left&&start)//if game has started
    {
      key.leftArrow=true;
    }
    if(e.keyCode==key_right&&start)
    {
      key.rightArrow=true;
    }
    if(e.keyCode==key_up)
    {
      key.upArrow=true;
    }
    if(e.keyCode==key_down)
    {
      key.downArrow=true;
    }
    if((e.keyCode==32&&spacedone)||gameover&&e.keyCode==32&&spacedone)
    {
      if(gover)//spacebar to restart game
      {
      gover=false;
      restart();
      }
      keyspace=true;
      spacestart=true;
      spacedone=false;
      t=6;
      start=true;
    }
  });



$(document).keyup(function(e){
      if(e.keyCode==key_left)
      {
        key.leftArrow=false;
      }
      if(e.keyCode==key_right)
      {
        key.rightArrow=false;
      }
      if(e.keyCode==key_up)
      {
        key.upArrow=false;
      }
      if(e.keyCode==key_down)
      {
        key.downArrow=false;
      }
      if(e.keyCode==32)
      {
        keyspace=false;
      }
  });

}

function i2xy(index,mapWidth)
{
  var x=index%mapWidth;
  var y=Math.floor(index/mapWidth);
  return [x,y];
}

function xy2i(x,y,mapWidth)
{
  return y*mapWidth+x;
}

function DisableScrollbars()
{
  document.documentElement.style.overflow='hidden';
}

var Animate = function(animationDelay, animationIndexCounter, animationCurrentFrame)
{
    this.animationDelay = animationDelay;
    this.animationIndexCounter = animationIndexCounter;
    this.animationCurrentFrame = animationCurrentFrame;
};

var AnimationCounterIndex = 0;
var AnimationCounter = new Array();

function InitializeAnimationCounters()
{
    for (var i = 0; i < 32000; i++)
        AnimationCounter[i] = new Animate(0, 0, 0);
}

function ResetAnimationCounter()
{
    AnimationCounterIndex = 0;
}
var Spritesheet=function(filename)
{
  this.image=new Image();
  this.image.src=filename;
};
//made an object so that no need to make a variable context=canvas.getContext('2d')
//hence avoiding drawImage() use as contex.drawImage which is a pain
var HTML =  function(canvasId, width, height) {
    this.width = width;
    this.height = height;
    this.canvas = null;
    this.context = null;
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext('2d');
    $(this.canvas).attr( { width: this.width, height: this.height } );
    $(this.canvas).attr( { style: 'width:'  + this.width + 'px;' + 'height:' + this.height + 'px' } );
};
//logic for drawing animation is within drawAnimated
//drawAnimated uses drawImage()
//draw also uses drawImage()
//just made it conviniently shorter to use
var Sprite = function(fn,w,h) {

    this.TO_RADIANS = Math.PI/180;
    this.image = null;
    this.is_pattern = false;

    this.pattern = null;
    this.pattern_x_times = 0;

    this.load = function(filename) { this.image = new Image(); this.image.src = filename; return this; };
    this.to_pattern = function(x_times) { this.pattern_x_times = x_times; this.pattern = Context.context.createPattern(this.image, 'repeat'); this.is_pattern = true; };

    this.image = null;
    this.spritesheet = null;



    this.animationDelay = 0;
     this.animationIndexCounter = 0;
     this.animationCurrentFrame = 0;



    if (fn instanceof Spritesheet)
    {
        this.spritesheet = fn;
        this.image = this.spritesheet.image;
    }
    else
    // Load from sprite
    if (fn != undefined && fn != "" && fn != null)
    {
        this.load(fn);
        console.log("Loaded sprite " + fn);
    }
    else
    {
        console.log("Unable to load sprite. Filename '" + fn + "' is undefined or null.");
    }

    this.drawAnimated=function(x,y,spritesheetindex){
      if(spritesheetindex.length!=undefined)
      {
        if(this.animationDelay++>=3)
        {
          this.animationDelay=0;
          this.animationIndexCounter++;
          if(this.animationIndexCounter>=spritesheetindex.length)
            this.animationIndexCounter=0;
            this.animationCurrentFrame=spritesheetindex[this.animationIndexCounter];
        }
        var res=i2xy(this.animationCurrentFrame,9);
          Context.context.drawImage(this.image, res[0]*w, res[1]*h,w,h, x, y,w,h);
      }

    };

    this.draw = function(x, y,W,H)
    {

            Context.context.drawImage(this.image, x, y, W, H);
    };




};
//very similar to the above sprite
var sprite = function(fn,w,h) {

    this.TO_RADIANS = Math.PI/180;
    this.image = null;
    this.is_pattern = false;

    this.pattern = null;
    this.pattern_x_times = 0;

    this.load = function(filename) { this.image = new Image(); this.image.src = filename; return this; };
    this.to_pattern = function(x_times) { this.pattern_x_times = x_times; this.pattern = Context.context.createPattern(this.image, 'repeat'); this.is_pattern = true; };

    this.image = null;
    this.spritesheet = null;


    this.animationDelay = 0;
     this.animationIndexCounter = 0;
     this.animationCurrentFrame = 0;

    // Load from spritesheet
    if (fn instanceof Spritesheet)
    {
        this.spritesheet = fn;
        this.image = this.spritesheet.image;
    }
    else
    // Load from sprite
    if (fn != undefined && fn != "" && fn != null)
    {
        this.load(fn);
        console.log("Loaded sprite " + fn);
    }
    else
    {
        console.log("Unable to load sprite. Filename '" + fn + "' is undefined or null.");
    }


    this.drawAnimated=function(x,y,spritesheetindex){
      if(spritesheetindex.length!=undefined)
      {
        if(this.animationDelay++>=3)
        {
          this.animationDelay=0;
          this.animationIndexCounter++;
          if(this.animationIndexCounter>=spritesheetindex.length)
            this.animationIndexCounter=0;
            this.animationCurrentFrame=spritesheetindex[this.animationIndexCounter];
        }
        var res=i2xy(this.animationCurrentFrame,8);
          Context.context.drawImage(this.image, res[0]*w, res[1]*h,w,h, x, y,32,32);
      }

    };
    this.drawAnimated=function(x,y,spritesheetindex,wi,hi,f){
      if(spritesheetindex.length!=undefined)
      {
        if(this.animationDelay++>=3)
        {
          this.animationDelay=0;
          this.animationIndexCounter++;
          if(this.animationIndexCounter>=spritesheetindex.length)
            this.animationIndexCounter=0;
            this.animationCurrentFrame=spritesheetindex[this.animationIndexCounter];
        }
        var res=i2xy(this.animationCurrentFrame,f);
          Context.context.drawImage(this.image, res[0]*w, res[1]*h,w,h, x, y,wi,hi);
      }

    };

    this.draw = function(x, y,W,H)
    {

            Context.context.drawImage(this.image, x, y, W, H);
    };
};

//ALl background and obstacle image handling is done here
function DrawMap()
{
  var x=-32;
  var y=250+92;

for(var j=0;j<200;j++)
{
  for(var i=0;i<50;i++)
  {
    block.draw(x,y,32,32);
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

  if(score>lo)
  {
    lo+=100;
    xi+=1;
    s+=1;
    t2+=2;
    t3+=1;
  }
  special.drawAnimated(translate4-=3,310,[0,1,2,3,4,5,6],32,32,7);
  wall.draw(translate-=s,310,32,32);
  wall.draw(translate2-=t2,310,32,32);
  wall.draw(translate3-=t3,310,32,32);

  if(translate==0||translate2==0||translate3==0)
  {
  jumpcount+=1;
  document.getElementById("score").textContent = Math.floor(score+=10);
  }

  if(translate<-2000)
    translate=1300;
  if(translate2<-1000)
    translate2=2300;
  if(translate3<-500)
    translate3=1300;
  //collision detection logic
  if(spacestart)
  {
      if(translate>=manx+10&&translate<=manx+35||translate2>=manx+10&&translate2<=manx+35||translate3>=manx+10&&translate3<=manx+35)
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
      if(translate+32>manx+17&&translate<manx)
      {
        if(many>253)
        {
          console.log("many",many);
          console.log("translate",translate);
          console.log("manx",manx);
          start=false;
        }
      }
    }
else
{
  if(translate>=manx+14&&translate<=manx+58||translate2>=manx+14&&translate2<=manx+58||translate3>=manx+14&&translate3<=manx+58)
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

//start of a space
//jump logic
function spaceStart()
{
  many-=t;
  console.log(many);
  manrun.drawAnimated(manx,many,[0,1,2,3,4,5]);
  if(many<200)
  {
      t=-6;
  }
  if(many==293)
  {
    t=0;
    spacestart=false;
    spacedone=true;
  }
}
//reprints the state just before gameover
function gameover()
{
  go.drawAnimated(0,0,[0]);//game over image
  wall.draw(translate,310,32,32);//previous positions of the blocks
  wall.draw(translate2,310,32,32);//hence helping the player understand jump lengths
  wall.draw(translate3,310,32,32);
  manrun.drawAnimated(manx,many,[0,1,2,3,4,5,6,7]);//game is over

}
