# Type narrowing
> The default type of the catch block parameter error is `unknown`. The unknown is a kind of top type that was introduced in TypeScript version 3 to be the type-safe counterpart of `any`. Anything is assignable to unknown, but unknown isn’t assignable to anything but itself and any without a type assertion or a control flow-based narrowing. Likewise, no operations are permitted on an unknown without first asserting or narrowing it to a more specific type.

- Both the possible causes of exception (wrong operator or division by zero) will throw an Error object with an error message, that our program prints to the user.

- If our code would be JavaScript, we could print the error message by just referring to the field message of the object error as follows:

```javascript
try {
  console.log(calculator(1, 5 , 'divide'));
} catch (error) {
  console.log('Something went wrong: ' + error.message);
}
```

- Since the default type of the error object in TypeScript is unknown, we have to narrow the type to access the field:

```typescript
try {
  console.log(calculator(1, 5 , 'divide'));
} catch (error: unknown) {
  let errorMessage = 'Something went wrong: '
  // here we can not use error.message
  if (error instanceof Error) {
    // the type is narrowed and we can refer to error.message
    errorMessage += error.message;
  }
  // here we can not use error.message

  console.log(errorMessage);
}
```
> Here the narrowing was done with the instanceof type guard, that is just one of the many ways to narrow a type. We shall see many others later in this part.