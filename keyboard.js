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


function InitializeKeyboard()
{
  window.key=new Keyboard;

  $(document).keydown(function(e){
    if(e.keyCode==key_left)
    {
      key.leftArrow=true;
    }
    if(e.keyCode==key_right)
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
    if(e.keyCode==32&&spacedone)
    {
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
