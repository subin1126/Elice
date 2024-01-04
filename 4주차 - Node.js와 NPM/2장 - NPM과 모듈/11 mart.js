// 매개변수로 boolean을 입력 받아, true인 경우 "Buy milk"를 6번 출력하는 코드를 작성하세요.
module.exports = function(buyMilk){
    if(buyMilk){
        for(let i = 0; i<6; i++){
            console.log("Buy milk");
        }
    }
};