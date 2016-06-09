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

    this.draw = function(x, y,W,H)
    {

            Context.context.drawImage(this.image, x, y, W, H);
    };
};
