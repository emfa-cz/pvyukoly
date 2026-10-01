console.log("proved.operac")

const makeOp = () => {
    console.log("proved op")
};

makeOp()

const calcSqPow = (number) => {
    console.log(number * number)
}

calcSqPow(5);


const checkPasswd = (passwd) => {
    if (passwd.lenght >= 8) {
        console.log('pass ok')
    } else {
        console.log('pass weak')
    }
};
ckeckPasswd()

checkPasswd("NB2***7");


const calcNums = (num1, num2) => {
    return num1 * num2;
};

const result = calcNums(5, 10);



function makeOpFun(num1, num2){
    return num1 * num2;
};

const opRes = makeOpFun(5, 30);

