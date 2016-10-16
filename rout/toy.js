function Toy(data){
    this.name=data.name||"toy";
    this.price=data.price||"0";
    this.type=data.type||"Toy";
    this.age=data.age||"3-18";
    this.size=data.size||"not specified"
   

}

Toy.prototype.getAll=function(){
    console.log("It is "+this.name+".");  
    console.log("Toy costs: "+this.price+".");
    console.log(this.type);
    console.log("Age group: "+this.age+".");
    console.log("Size: "+this.size+".");
   
}

module.exports=Toy;