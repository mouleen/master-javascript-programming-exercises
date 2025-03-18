
function getPlusAndMinus(num){
    let def='';
    if (num > 59 && num <= 100){
        var strNum = num.toString(); // Convertimos numero a string
        var lastChar= strNum.slice(-1); // tomamos el ultimo digito
        var lastDigit = +(lastChar); // Transformamos a numero
        let min1=0,max1=2,min2=8,max2=9,valm='-',valp='+';
        // console.log(strNum);
        if ( num == 100){
            return valp;
        }
        // 0 - 2
        if(lastDigit >=min1 && lastDigit<=max1){
            return valm;
        }
        // 8 - 9
        if((lastDigit>=min2 && lastDigit<=max2 )){
            return valp;
        }
    }
    return def;
}

function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    let def='INVALID SCORE';
    let obj=[{
        max:'100',
        min:'90',
        grade:'A'
    },
    {
        max:'89',
        min:'80',
        grade:'B'
    },
    {
        max:'79',
        min:'70',
        grade:'C'
    },
    {
        max:'69',
        min:'60',
        grade:'D'
    },
    {
        max:'59',
        min:'0',
        grade:'F'
    }];
    if(Number.isInteger(score) && score <= obj[0].max && score >= obj[obj.length -1].min){
        for (let itemindex in obj){
            //console.log(score);
            if (score >= obj[itemindex].min && score <= obj[itemindex].max ){
                return obj[itemindex].grade + getPlusAndMinus(score);
            }
            
        }
    }
    return def;
}

let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'

output = convertScoreToGradeWithPlusAndMinus(88);
console.log(output); // --> 'B+'

output = convertScoreToGradeWithPlusAndMinus(191);
console.log(output); // --> 'INVALID SCORE'

output = convertScoreToGradeWithPlusAndMinus(59);
console.log(output); // --> 'F'

// El caso de 100 seria un buen ejemplo de una definicion incompleta
// es razonable que 100 sea A+ sin embargo 
// la definicion determina unicamente que se retorna + entre 8 y 9 

output = convertScoreToGradeWithPlusAndMinus(100);
console.log(output); // --> 'A+'