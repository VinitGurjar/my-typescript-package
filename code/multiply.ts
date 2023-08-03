//In the previuos code I did'nt provide much security for input validation so getting NAN error, To prevent this kind of behavior, we have to validate the data given to us from the command line. 
interface MultiplyValues {
    value1: number;
    value2: number;
}

//Documentation level comment for parseArguments:-
/**
 * Parses the command-line arguments and extracts two numeric values for multiplication.
 *
 * @param args - An array of string arguments passed from the command line.
 *              It is expected to have at least 4 elements in the format: [node, scriptName, value1, value2]
 *
 * @returns An object containing the two numeric values extracted from the arguments.
 *          { value1: number, value2: number }
 *
 * @throws {Error} When the number of arguments is less than 4 or more than 4.
 * @throws {Error} When the provided values for multiplication are not valid numbers.
 */

const parseArguments = (args: string[]): MultiplyValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            value1: Number(args[2]),
            value2: Number(args[3])
        }
    } else {
        throw new Error('Provided values were not numbers!');
    }
}

const multiplicator = (a: number, b: number, printText: string) => {
    console.log(printText, a * b);
}

try {
    const { value1, value2 } = parseArguments(process.argv);
    multiplicator(value1, value2, `Multiplied ${value1} and ${value2}, the result is:`);
} catch (error: unknown) {
    let errorMessage = 'Something bad happened.'
    if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
}