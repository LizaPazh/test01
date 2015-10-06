/**
 * Created by Лиза on 06.10.2015.
 */
function divisibleBy(numbers, divisor){
    var arr = [];
    for(var i = 0; i < numbers.length; i++){

        if ((numbers[i]%divisor)===0){
            arr.push(numbers[i]);
        }
    }
    return arr;
}