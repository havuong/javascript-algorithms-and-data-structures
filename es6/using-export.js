// Use export to Reuse a Code Block
/*
We must utilize one of the statements that goes with import, known as export.
When we want some code - a function, or a variable - to be usable in another file,
we must export it in order to import it into another file.
Like import, export is a non-browser feature.
*/

export { capitalizeString } //How to export functions.
export const foo = "bar"; //How to export variables.

// Create an Export Fallback with export default
/*
Since export default is used to declare a fallback value for a module or file,
you can only have one value be a default export in each module or file.
Additionally, you cannot use export default with var, let, or const

Usually you will use this syntax if only one value is being exported from a file.
It is also used to create a fallback value for a file or module.
*/
export default function subtract(x,y) {return x - y;}
