var Toy=require('../rout/toy.js');
var inherit=require('../rout/inherit.js');

function House(data){
  
       House.superclass.constructor.call(this, data);      
}

inherit(House,Toy);

House.prototype.printAll=function(){
        this.getAll();
}



module.exports=House;