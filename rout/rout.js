function start(){
    var prompt = require('prompt');
    var room=require('./room');
    var toyRoom=new room.Room();

    console.log("How much money do you have?:)");
    prompt.start();
    prompt.get(['balance'],function(err,result){
            if (err){
                prompt.stop();
            }

            console.log("Set up toys in room...");
            console.log("");
            toyRoom.setToysInRoom(result.balance,toyRoom.getToyList());
            console.log('Do you want sort toys, find toys or exit?');
            console.log('[sortbyAge] [sortbyPrice] [findbySize] [exit]');

            prompt.get(['choice'],function(err,result2){
                if (err){
                    prompt.stop();

                }else{
            
                        switch(result2.choice){
                        case "sortbyAge":
                            toyRoom.sortByAge();
                            prompt.stop();
                        break;
                        case "sortbyPrice":
                            toyRoom.sortByPrice();
                            prompt.stop();
                            
                        break;

                        case "findbySize":
                            prompt.get(['size'],function(err,result3){

                            toyRoom.findBySize(result3.size);
                            prompt.stop();
                            });
                            
                        break;

                        case "exit":
                            prompt.stop();
                        break;

                        default:
                            console.log("Sorry, this command not found. Bye.")
                            prompt.stop();
                    }}});

    });

}
module.exports.start = start;
