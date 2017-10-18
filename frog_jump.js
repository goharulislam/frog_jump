let min = 0, max = 0, i = 0, j = 0, x = 0, y = 0, d = 0;
let a = [0], total=[0];
let btn1 = document.getElementsByTagName("button")[0];

function getRandomInt(max, min){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function solution(x, y, d){
    
    for(i=0; i<=y; i++){
        a[i] = x+(d*i);
        console.log(i);
        if(a[i] >= y){
            break;
        }
    }
    return a;
}

btn1.addEventListener('click', function( event ){
    x = getRandomInt(min, 10);
    y = getRandomInt(x, 100);
    d = getRandomInt(x, y);

    console.log(x,y,d);

    document.getElementsByTagName("p")[0].innerHTML = "x = "+ x +", y = "+ y +", d = "+ d;
    document.getElementsByTagName("p")[1].innerHTML = solution(x, y, d);
    document.getElementsByTagName("p")[1].innerHTML += "<br>Total steps = " + i;
});