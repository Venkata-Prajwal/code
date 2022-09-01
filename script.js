//get value from html
function getVal() {
    let input1 = document.querySelector('.string');
    let input1value= input1.value;
    

    let input2 = document.querySelector('.rank');
    let input2value= input2.value;
    

    let outputVal=main(input1value,input2value);
    let outputEle=document.querySelector('span');
    // console.log(outputVal);
    outputEle.innerText=`${outputVal}`;

}

//split each number to find diffrent intergers
let splitNum = ((num1) => {
    let num = num1;
    let i = 0;
    let b = [];
    while (num != 0) {
        let lstDigit = num % 10;
        num = num / 10;
        num = Math.trunc(num);
        lstDigit = lstDigit.toString();
        b[i] = lstDigit;
        i++;
    }
    return (b.reverse());
});


//form a string from indexing
let formString = ((demo, numChar) => {
    let a = numChar;
    let len = numChar.length;
    let i = 0;
    let b = [];
    for (i = 0; i < len; i++) {
        let tempIndex = a[i];
        tempIndex = parseInt(tempIndex);
        tempIndex--;
        b[i] = demo[tempIndex];
    }
    return (b.join(""));
})

//form a number
let formNumber = (noCmp, spiltStr) => {
    let a = [];
    let newStr = spiltStr;
    let i = 0;
    let p = 0;
    let len = newStr.length;
    for (i = 0; i < len; i++) {
        for (j = 0; j < noCmp.length; j++) {
            if (newStr[i] == noCmp[j]) {
                let temp = j + 1;
                temp = temp.toString();
                a[p] = temp;
                p++;
                break;
            }
        }
    }
    a = a.join("");
    return (a);
}

//assigned index to each char

let index = ((demo) => {
    let i = 0;
    let j = 0;
    let a = demo;
    let len = demo.length;
    let test = 0;
    let b = [];
    let k = 0;
    let p = 0;
    for (i = 0; i < len; i++) {
        for (j = i; j >= 0; j--) {
            if (a[j] == a[i]) {
                test++;
            }
        }
        if (test == 1) {
            k++;
            let sample = k.toString();
            b[p] = sample;
            p++;
        }

        test = 0;
    }
    return (b);

});

//find string string without char rep

let noRep = ((demo) => {
    let i = 0;
    let j = 0;
    let a = demo;
    let len = demo.length;
    let test = 0;
    let c = [];
    let k = 0;
    let p = 0;
    for (i = 0; i < len; i++) {
        for (j = i; j >= 0; j--) {
            if (a[j] == a[i]) {
                test++;
            }
        }
        if (test == 1) {
            k++;
            let sample = k.toString();
            c[p] = a[i];
            p++;
        }

        test = 0;
    }
    return (c);

});

//find rank of word

let rnkWord = ((noCmp, strtWord, count) => {
    let strtNum = formNumber(noCmp, strtWord);
    count = parseInt(count);
    let test = 0;
    let i = 0;
    let storeStrt = parseInt(strtNum);
    let strtArry = strtNum.split("");
    let p = 0;

    while (i != count) {
        let storeArray = splitNum(storeStrt);

        storeArray.sort();
        for (let j = 0; j < strtArry.length; j++) {
            if (strtArry[j] == storeArray[j]) {
                test++;
            }
        }
        if (test == strtArry.length) {
            i++;
        }
        storeStrt++;
        p++;
        test = 0;
    }
    storeStrt--;
    let storeArray = splitNum(storeStrt);
    let output = formString(noCmp, storeArray);
    return output;
    console.log(output);
});

//main 
let main = ((userInput, rnk) => {
    let strtWord = userInput;
    let demo = strtWord.split("");
    demo = demo.sort();
    let noCmp = noRep(demo);
    let output=rnkWord(noCmp, demo, rnk);
    return output;
});


//User Input
//main("independent","100");