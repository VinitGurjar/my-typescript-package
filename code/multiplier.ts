/**
 * const multiplier = (a: number, b: number, printText: string)  => {
 *  console.log(printText, a * b);
 * }
 * multiplier(4, 8, 'when 4 and 8 fussed they make ::><:');
 */

//Creating my own type (string literal union type)

/**
 * In JavaScript, the code would require additional validation
 *  to make sure the last argument is indeed a string. TypeScript 
 * offers a way to define specific types for inputs, which describe 
 * exactly what type of input is acceptable. On top of that, TypeScript
 *  can also show the info on the accepted values already at the editor level.

 * We can create a type using the TypeScript native keyword type.
 * Let's describe our type Operation:

 * type Operation = 'multiply' | 'add' | 'divide';
 */

type Operation = 'add' | 'multiply' | 'divide';
type result = number;

const calculator = (a: number, b: number, op: Operation): result => {
    switch (op) {
        case 'multiply':
            return a * b;
        case 'divide':
            if (b === 0) throw new Error('Can\'t divide by zero');
            return a / b;
        case 'add':
            return a + b;
        default:
            throw new Error('Operatoin is not multiply, add or divide');
    }
}

