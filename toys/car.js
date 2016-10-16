var Toy=require('../rout/toy.js');
var inherit=require('../rout/inherit.js');

function Car(data){
       Car.superclass.constructor.call(this, data);
       this.wheels=data.wheels||"without wheels";
}

inherit(Car,Toy);

Car.prototype.printAll=function(){
        this.getAll();
        console.log("Car has "+this.wheels+ " wheels.");
}



module.exports=Car;