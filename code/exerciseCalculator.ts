interface Result {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

const calculateExercises = (hours: number[], target: number): Result => {

    const periodLength = hours.length;
    const trainingDays = hours.filter(hour => hour > 0).length;
    const totalHours = hours.reduce((sum, hour) => sum + hour, 0);
    const average = totalHours / periodLength;
    const success = average >= target;

    let rating;
    let ratingDescription;
    if (average >= target) {
        rating = 3;
        ratingDescription = 'great job, target reached!';
    } else if (average >= target * 0.8) {
        rating = 2;
        ratingDescription = 'not too bad but could be better';
    } else {
        rating = 1;
        ratingDescription = 'need to improve, target not reached';
    }

    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average,
    };

};

const exerciseHours: number[] = [3, 0, 2, 4.5, 0, 3, 1];
const targetHours: number = 2;

const result: Result = calculateExercises(exerciseHours, targetHours);
console.log(result);

