// Restrict Possible Usernames
/* 
1) The only numbers in the username have to be at the end.
There can be zero or more of them at the end.
2) Username letters can be lowercase and uppercase.
3) Usernames have to be at least two characters long.
A two-letter username can only use alphabet letter characters.
 */
let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i;
let result = userCheck.test(username);

/* The only numbers in the username have to be at the end. \d$
There can be zero or more of them at the end. /\d*$/;
Username letters can be lowercase and uppercase./\d*$/i;
Usernames have to be at least two characters long.{2,}
A two-letter username can only use alphabet letter characters. ^[a-z]
/^[a-z]{2,}\d*$/i;
 */