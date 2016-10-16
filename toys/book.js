var Toy=require('../rout/toy.js');
var inherit=require('../rout/inherit.js');

function Book(data){
  
       Book.superclass.constructor.call(this, data);
       this.language=data.language||"russian";
       
}

inherit(Book,Toy);

Book.prototype.printAll=function(){
        this.getAll();
        console.log("Book language: "+this.language+".");
       
        
}



module.exports=Book;