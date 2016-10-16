var inherit=(function(){
    var F=function(){};
    return function(C,P){
       F.prototype=P.prototype;
       C.prototype=new F();
       C.superclass=P.prototype;
       C.prototype.constructor=C; 
    }
}());

module.exports=inherit;