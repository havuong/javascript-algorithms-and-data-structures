// Understand the Differences Between import and require
/*
In the past, the function require() would be used to import the functions and code in external files and modules.
While handy, this presents a problem: some files and modules are rather large,
and you may only need certain code from those external resources.

ES6 gives us a very handy tool known as import. With it, we can choose which parts of a module or file
to load into a given file, saving time and memory.
*/
import { capitalizeString } from "string_functions"
capitalizeString("hello!");

// Use * to Import Everything from a File
import * as capitalize_strings from "capitalize_strings";

// Import a Default Export
/*
The syntax differs in one key place - the imported value, add, is not surrounded by curly braces, {}.
Unlike exported values, the primary method of importing a default export is
to simply write the value's name after import.
*/
import subtract from "math_functions";
subtract(7, 4);