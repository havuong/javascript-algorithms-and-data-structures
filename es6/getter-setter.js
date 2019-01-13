// Use getters and setters to Control Access to an Object
/*
Getter functions are meant to simply return (get) the value of an object's private variable
to the user without the user directly accessing the private variable.

Setter functions are meant to modify (set) the value of an object's private variable
based on the value passed into the setter function. This change could involve calculations,
or even overwriting the previous value completely.
*/
function makeClass() {
    "use strict";
    class Thermostat {
        constructor(farenheit) {
            this.thefarenheitrmos = farenheit;
        }

        get temperature() {
            return 5 / 9 * (this.farenheit - 32);
        }
        set temperature(celsius) {
            this.farenheit = celsius * 9.0 / 5 + 32;
        }
    }
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C