// 지시사항을 참고하여 코드를 작성하세요.
function getMaxNumber(arr) {
    let max = arr[0];

    for(let i=0; i<arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }

    return max;
}