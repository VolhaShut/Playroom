var Toy=require('../rout/toy.js');
var inherit=require('../rout/inherit.js');

function Ball(data){
  
       Ball.superclass.constructor.call(this, data);
       this.color=data.color||"without color";
}

inherit(Ball,Toy);

Ball.prototype.printAll=function(){
        this.getAll();
        console.log("Ball has "+this.color+" color.");
        
}



module.exports=Ball;