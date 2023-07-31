/**
 * const multiplier = (a: number, b: number, printText: string)  => {
 *  console.log(printText, a * b);
 * }
 * multiplier(4, 8, 'when 4 and 8 fussed they make ::><:');
 */
//Creating my own type (string literal union type)
type Operation = 'add' | 'multiply' | 'divide';

const calculator = (a: number, b: number, op: Operation) => {
    if (op === 'add') {
        return a + b;
    } else if (op === 'multiply') {
        return a * b;
    } else if (op === 'divide') {
        if (b === 0) return 'can\'t divide by 0!';
        return a / b;
    }
}

calculator(5, 5, 'add');