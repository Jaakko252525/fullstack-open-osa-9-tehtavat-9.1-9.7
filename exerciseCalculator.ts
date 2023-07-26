





















const calculateExercises = (dailyHours: number[], dailyTarget: number) => {

    // number of days
    const days = dailyHours.length;

    // number of training days

    const trainingDaysAndHours = dailyHours.filter(d => d > 0);
    const trainingDays = trainingDaysAndHours.length;
    
    // original target value
    const targetValue = dailyTarget;

    // average time per day
    //sum
    let sumOfHours = 0;
    let count = 0;
    while (count < dailyHours.length) {
        sumOfHours += dailyHours[count]
        count++
    };
    // sum divided with length
    const averageHoursPerDay = sumOfHours / dailyHours.length;

    // boolean value for if target was reached
    const isTargetMet = dailyTarget <= averageHoursPerDay;
    // rating 1-3 how good target was met
    // 90% of target is 3, 70% of target is 2, 40% of target is 1, <40% is 0
    const performance = averageHoursPerDay / dailyTarget;
    let rating = 0;
    if ( performance >= 0.9 ) {
        console.log('rating 3', performance)
        let rating = 3
    }
    else if ( performance < 0.9 && performance >= 0.7) {
        let rating = 2
    }
    else if ( performance < 0.7 && performance >= 0.4) {
        let rating = 1    }
    else if ( performance < 0.4) {
        let rating = 0    };

    // text value explaining the rating
    const ratingExplanation = '90% of target is 3, 70% of target is 2, 40% of target is 1, <40% is 0';

    return ` Number of days ${days}\n Number of training days ${trainingDays}\n Training target value per day: ${dailyTarget}\n Calculated average time ${averageHoursPerDay}\n Was target reached: ${isTargetMet}\n Rating for performance ${rating}\n Explanation for ratingsystem ${ratingExplanation}`;
    

}


console.log(calculateExercises( [1,0,2], 2 ));






/*
const a: number[] = process.argv.slice(2).map(Number);
const b: number = Number(process.argv[3]);
console.log('function called:', calculateExercises(a, b));

*/




