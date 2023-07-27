





















export const calculateExercises = (dailyHours: number[], dailyTarget: number) => {

    // number of days
    const days = dailyHours.length;

    // number of training days

    const trainingDaysAndHours = dailyHours.filter(d => d > 0);
    const trainingDays = trainingDaysAndHours.length;


    // average time per day
    //sum
    let sumOfHours = 0;
    let count = 0;
    while (count < dailyHours.length) {
        sumOfHours += dailyHours[count];
        count += 1;
    }
    // sum divided with length
    const averageHoursPerDay = sumOfHours / dailyHours.length;

    // boolean value for if target was reached
    const isTargetMet = dailyTarget <= averageHoursPerDay;
    // rating 1-3 how good target was met
    // 90% of target is 3, 70% of target is 2, 40% of target is 1, <40% is 0
    const performance = averageHoursPerDay / dailyTarget;

    // text value explaining the rating
    const ratingExplanation = '90% of target is 3, 70% of target is 2, 40% of target is 1, <40% is 0';


    if ( performance >= 0.9 ) {
        console.log('rating 3', performance);
        const rating = 3;
        return ` Number of days ${days}\n Number of training days ${trainingDays}\n Training target value per day: ${dailyTarget}\n Calculated average time ${averageHoursPerDay}\n Was target reached: ${isTargetMet}\n Rating for performance ${rating}\n Explanation for ratingsystem ${ratingExplanation}`;

    }
    else if ( performance < 0.9 && performance >= 0.7) {
        const rating = 2;
        return ` Number of days ${days}\n Number of training days ${trainingDays}\n Training target value per day: ${dailyTarget}\n Calculated average time ${averageHoursPerDay}\n Was target reached: ${isTargetMet}\n Rating for performance ${rating}\n Explanation for ratingsystem ${ratingExplanation}`;

    }
    else if ( performance < 0.7 && performance >= 0.4) {
        const rating = 1;    
        return ` Number of days ${days}\n Number of training days ${trainingDays}\n Training target value per day: ${dailyTarget}\n Calculated average time ${averageHoursPerDay}\n Was target reached: ${isTargetMet}\n Rating for performance ${rating}\n Explanation for ratingsystem ${ratingExplanation}`;

    }
    else if ( performance < 0.4) {
        const rating = 0;
        return ` Number of days ${days}\n Number of training days ${trainingDays}\n Training target value per day: ${dailyTarget}\n Calculated average time ${averageHoursPerDay}\n Was target reached: ${isTargetMet}\n Rating for performance ${rating}\n Explanation for ratingsystem ${ratingExplanation}`;

    }
    else return null;

    

    

};


//console.log(calculateExercises( [1,0,2], 2 ));







//const a: number[] = process.argv.slice(2).map(Number);
//const b: number = Number(process.argv[3]);
//console.log('function called:', calculateExercises(a, b));






