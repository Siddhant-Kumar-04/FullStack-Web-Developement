function gun()
{
    return 0;
}

function fun2(){
    return 10;
}

var res =(function evaluate(i){
    if (i % 2 == 0)
        gun();
    else
        fun2();
})();

// IIFY