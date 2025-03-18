function convertScoreToGrade(score) {
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
        // cumplimos la condicion agregando/harcodeando que 
        // el maximo 100 lo tomamos de la propiedad max del primer elemento
        // el minimo de la propiedad min del ultimo elemento
        // de esta form si uno quiere agregar rangos y mover los min y max 
        // puede hacerlo sin alterar la logica

        if(Number.isInteger(score) && score < obj[0].max && score > obj[obj.length -1].min){
            for (let itemindex in obj){
                //console.log(obj[itemindex].max,obj[itemindex].min,obj[itemindex].grade);
                if (score > obj[itemindex].min && score < obj[itemindex].max ){
                    return obj[itemindex].grade;
                }
                
            }
        } else{
            return def;
        }

    }


let output = convertScoreToGrade(91);
console.log(output); // --> 'A'

output = convertScoreToGrade(121);
console.log(output); // --> 'I S'

output = convertScoreToGrade(-1);
console.log(output); // --> 'I S'

output = convertScoreToGrade(72);
console.log(output); // --> 'I S'