const bills = [22,13,23,12,41,2,312541,25132,2];
const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const tips = new Array();
const total = new Array();

const billsLen = bills.length;
for(let index  = 0; index < billsLen; index++){
    const element = bills[index];
    tips.push(calcTip(element));
    total.push(element+tips[index]);
}

const calcAverage = (arr) => {
    var sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;
};

console.log(calcAverage(total));
