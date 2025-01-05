# Unhandled Error in TypeScript Arithmetic Functions

This repository demonstrates a common error in TypeScript:  failure to handle potential errors, specifically a division by zero. 

The `bug.ts` file contains a set of arithmetic functions (add, subtract, multiply, divide). The `divide` function correctly throws an error if a division by zero is attempted. However, the main execution flow does not handle this potential `Error` object.

The `bugSolution.ts` file shows how to use a `try...catch` block to gracefully handle this error.

This example highlights the importance of robust error handling in TypeScript to prevent unexpected application crashes.