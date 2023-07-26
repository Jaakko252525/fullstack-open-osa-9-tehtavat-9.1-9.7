



















const calculateBmi = (height: number, weight: number) => {

    const bmi = weight / height ** 2 *10000
    console.log('points', bmi)

    if (bmi < 25) {
        return 'Normal (healthy weight)'
    }
    else if (25 < bmi && bmi <= 29.99) {
        return 'Overweight'
    }
    else if (bmi >= 30) {
        return 'Obese'
    }

}







//console.log(calculateBmi(185, 92))

const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])
calculateBmi(a, b);



