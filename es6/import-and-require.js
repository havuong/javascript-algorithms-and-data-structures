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