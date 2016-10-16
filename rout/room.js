var Toy=require('./toy');
var inherit=require('./inherit');
var Car=require('../toys/car');
var Ball=require('../toys/ball');
var Block=require('../toys/block');
var Doll=require('../toys/doll');
var Book=require('../toys/book');
var House=require('../toys/house');
var toys=require('../toys/toys.json');

var Room=function(){
    this.listToys=[];
    this.room=[];
}

Room.prototype.setToysInRoom=function(balance,minPrice){
    var randomNumber = Math.random();
    var price=0;
        max=this.listToys.length-1;
        while(balance>=minPrice){
            index=getRandomInt(0, max);
            price=this.listToys[index].price;
            if((balance-price)>=0){
                this.room.push(this.listToys[index]);
                balance=balance-price;         
            }
        }
        
       this.room.forEach((v,i,a)=>{
            console.log(i+1+"---------------");
            v.printAll();
            
        });

        console.log("===========================");
        console.log("Total toys in room: "+this.room.length);
         console.log("");
    function getRandomInt(min, max){
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}

Room.prototype.getToyList=function(){
    var minPrice=0;
    var price=0;
    
    toys.forEach((v,i,a)=>{
        price=Number(v.price);

        if ((minPrice===0)||(minPrice>price)){
            minPrice=price;
        } 

        switch(v.class_name){
            case "car":
            this.listToys.push(new Car(v));    
            break;
            case "ball":
            this.listToys.push(new Ball(v)); 
            break;
            case "block":
            this.listToys.push(new Block(v)); 
            break;
            case "doll":
            this.listToys.push(new Doll(v)); 
            break;
            case "book":
            this.listToys.push(new Book(v)); 
            break;
            case "house":
            this.listToys.push(new House(v)); 
            break;
        }  
    });
    return minPrice;
}


Room.prototype.sortByAge=function(){
    var tempAgesList=[];
    var split1,
        split2;
        this.room.sort((s,t)=>{
            split1=s.age.split('-');
            split2=t.age.split('-');
            
            if((split1[0]<split2[0])&&(split1[1]<split2[1]))
                return -1;
            if((split1[0]>split2[0])&&(split1[1]>split2[1]))
                return 1;
            if ((split1[0]===split2[0])&&(split1[1]<split2[1]))
                return 1;

            return 0;
        });

        this.room.forEach((v,i,a)=>{
            console.log(i+1+"---------------");
                    v.printAll();
        });
         console.log("");
}


Room.prototype.sortByPrice=function(){
    var tempAgesList=[];
    var totalSum=0;

        this.room.sort((s,t)=>{
            return (s.price-t.price);
        });

        this.room.forEach((v,i,a)=>{
             console.log(i+1+"---------------");
                    v.printAll();
                    totalSum=totalSum+Number(v.price);
        })
         console.log("");
         console.log("===========================");
         console.log("Total price in room: "+totalSum);
         console.log("");
}


Room.prototype.findBySize=function(size){
    var listBySize=[];

        listBySize=this.room.filter(function(x){
            return x.size===size;
        });
        if (listBySize.length===0){
            console.log("Not found any toys with parameter "+size+".");
        }else{
            listBySize.forEach((v,i,a)=>{
                console.log(i+1+"---------------");
                v.printAll();
        });
        console.log("");
        }
}

exports.Room=Room;








