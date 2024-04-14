
function speedDetector(speed){
    if(speed<=70){
        return "Ok";
    }
    let diff = speed - 70;
    let points = Math.floor(diff/5);
    if (points>12){
        return "License Suspended" 
    }
else{ 
return "Demerit points: ", `${points}`;
}
}

    function main()
    {const readline = require('readline').createInterface({
        input:process.stdin,
        output:process.sdtout
    });
readline.question("Enter the speed", (speed) => {
    let s =parseInt(speed);
    if(isNaN(s)){
        console.log("Please enter the speed");
        main();
        return;
    }
    console.log(speedDetector(s));
    readline.close();
})}
main()
 