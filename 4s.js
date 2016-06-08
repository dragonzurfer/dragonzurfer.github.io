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


    /* Tutorial 7 Code Start */
    this.animationDelay = 0;
     this.animationIndexCounter = 0;
     this.animationCurrentFrame = 0;
    /* Tutorial 7 Code End */

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

    // Normal draw
    this.drawOldVersion = function(x, y) {
        Context.context.drawImage(this.image, x, y, BLOCK_W, BLOCK_H);
    };

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


    this.rotAnim = function(x, y, sequence, angle)
    {
        if (AnimationCounter[AnimationCounterIndex].animationDelay++ >= 3) {
            AnimationCounter[AnimationCounterIndex].animationDelay = 0;
            AnimationCounter[AnimationCounterIndex].animationIndexCounter++;
            if (AnimationCounter[AnimationCounterIndex].animationIndexCounter >= sequence.length)
                AnimationCounter[AnimationCounterIndex].animationIndexCounter = 0;
            AnimationCounter[AnimationCounterIndex].animationCurrentFrame = sequence[AnimationCounter[AnimationCounterIndex].animationIndexCounter];
        }
        var res = i2xy(AnimationCounter[AnimationCounterIndex].animationCurrentFrame, 8);

        Context.context.save();
        Context.context.translate(x+16, y+16);    // Translate sprite to its center
        Context.context.rotate(angle * this.TO_RADIANS);    // Rotate sprite around its center
        Context.context.drawImage(this.image, res[0]*32, res[1]*32, 32, 32,
            -16, -16,                         // Translate sprite back to its original position
            32, 32);
        Context.context.restore();

        AnimationCounterIndex++;
    };

    // Stretched draw
    this.draw2 = function(x, y, w, h) {
        if (this.is_pattern) {
            //Context.context.fillStyle = Context.context.createPattern(this.image, 'repeat');;
            //Context.context.fillRect(x, y, w, h);
            for (var i = 0; i < this.pattern_x_times; i++) {
                Context.context.drawImage(this.image, x + w*i, y, w, h);
            }
        } else {
            Context.context.drawImage(this.image, x, y, w, h);
        }
    };

    // Rotated draw
    this.rot = function(x, y, angle) {
        Context.context.save();
        Context.context.translate(x, y);
        Context.context.rotate(angle * this.TO_RADIANS);
        Context.context.drawImage(this.image, -(this.image.width/2), -(this.image.height/2));
        Context.context.restore();
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


    /* Tutorial 7 Code Start */
    this.animationDelay = 0;
     this.animationIndexCounter = 0;
     this.animationCurrentFrame = 0;
    /* Tutorial 7 Code End */

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

    // Normal draw
    this.drawOldVersion = function(x, y) {
        Context.context.drawImage(this.image, x, y, BLOCK_W, BLOCK_H);
    };

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


    this.rotAnim = function(x, y, sequence, angle)
    {
        if (AnimationCounter[AnimationCounterIndex].animationDelay++ >= 3) {
            AnimationCounter[AnimationCounterIndex].animationDelay = 0;
            AnimationCounter[AnimationCounterIndex].animationIndexCounter++;
            if (AnimationCounter[AnimationCounterIndex].animationIndexCounter >= sequence.length)
                AnimationCounter[AnimationCounterIndex].animationIndexCounter = 0;
            AnimationCounter[AnimationCounterIndex].animationCurrentFrame = sequence[AnimationCounter[AnimationCounterIndex].animationIndexCounter];
        }
        var res = i2xy(AnimationCounter[AnimationCounterIndex].animationCurrentFrame, 2);

        Context.context.save();
        Context.context.translate(x+16, y+16);    // Translate sprite to its center
        Context.context.rotate(angle * this.TO_RADIANS);    // Rotate sprite around its center
        Context.context.drawImage(this.image, res[0]*32, res[1]*32, 32, 32,
            -16, -16,                         // Translate sprite back to its original position
            32, 32);
        Context.context.restore();

        AnimationCounterIndex++;
    };

    // Stretched draw
    this.draw2 = function(x, y, w, h) {
        if (this.is_pattern) {
            //Context.context.fillStyle = Context.context.createPattern(this.image, 'repeat');;
            //Context.context.fillRect(x, y, w, h);
            for (var i = 0; i < this.pattern_x_times; i++) {
                Context.context.drawImage(this.image, x + w*i, y, w, h);
            }
        } else {
            Context.context.drawImage(this.image, x, y, w, h);
        }
    };

    // Rotated draw
    this.rot = function(x, y, angle) {
        Context.context.save();
        Context.context.translate(x, y);
        Context.context.rotate(angle * this.TO_RADIANS);
        Context.context.drawImage(this.image, -(this.image.width/2), -(this.image.height/2));
        Context.context.restore();
    };
};
