// getting Tax rates

function getTaxRate(salary){
if(salary<=24000){
    return 10;
}
if(salary>24000 && salary<=32333.33){
    return 25;
}
if(salary>32333.33 && salary<=499999.99){
    return 25;
}
if(salary>499999.99 && salary<500000.0){
    return 32.5;
}
return 35;
}
// Determining net salary
function salaryAfterPayee(salary){
    const rate = getTaxRate(salary)/100;
    const taxableIncome = salary*rate;
    const income = salary - taxableIncome;
    const netSalary = income + 2640;
    return netSalary;
}

// determining the NHIF deduction;
function nhifDeduction(salary){
    if(salary<6000){
        return 150;
    }
    if(salary>=6000 && salary<8000){
        return 300;
    }
    if(salary>=8000 && salary<12000){
        return 400;
    }
    if (salary>=12000 && salary<15000){
        return 500;
    }
    if(salary>=15000 && salary<20000){
        return 600;
    }
    if(salary>=20000 && salary<25000){
        return 750;
    }
    if (salary>=25000 && salary<30000){
        return 850;
    }
    if(salary>=30000 && salary<35000){
        return 900
    }
    if (salary>=35000 && salary<40000){
        return 950;
    }
    if (salary>=40000 && salary<45000)
    {return 1000;
    }
    if (salary>=45000 && salary<50000){
        return 1100;
    }
    if (salary>=50000 && salary<60000){
        return 1200;
    }
    if(salary>=60000 && salary<70000){
        return 1300;
    }
    if (salary>=70000 && salary<80000){
        return 1400;
    }
    if (salary>=80000 && salary<90000){
        return 1500;
    }
    if (salary>=90000 && salary<100000){
        return 1600;
    }
    return 1700;
}
function netSalary(salary){
    const afterpay = salaryAfterPayee(salary)
    const nhif =nhifDeduction(salary);
    const netSalary = afterpay - nhif;
    return netSalary;
}
function main()
{const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.sdtout
});
readline.question("Enter your gross salary", (salary) => {
    let s =parseInt(salary);
    if(isNaN(s)){
        console.log("Please enter your salary ");
        main();
        return;
    }
    console.log("If your gross is ", salary, "Your net salary is ", netSalary(salary))
    readline.close();
})}
main()
 