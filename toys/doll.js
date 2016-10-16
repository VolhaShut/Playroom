var Toy=require('../rout/toy.js');
var inherit=require('../rout/inherit.js');

function Doll(data){
  
       Doll.superclass.constructor.call(this, data);
       this.speaking=data.speaking||"can't speaking";
       this.colorHair=data.colorHair||"blonde";
}

inherit(Doll,Toy);

Doll.prototype.printAll=function(){
        this.getAll();
        console.log("Features doll: "+this.speaking+".");
        console.log("Doll has "+this.colorHair+".");
        
}



module.exports=Doll;