var Toy=require('../rout/toy.js');
var inherit=require('../rout/inherit.js');

function Block(data){
  
       Block.superclass.constructor.call(this, data);
       this.amount=data.amount||"without amount";
       this.color=data.color||"multicolored";
}

inherit(Block,Toy);

Block.prototype.printAll=function(){
        this.getAll();
        console.log("Amount blocks in boxing "+this.amount+".");
        console.log("All blocks are "+this.color+".");
        
}



module.exports=Block;