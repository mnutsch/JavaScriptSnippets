//This is a simple example of how to encode and decode something in Base64.

// Define the string
var string = 'Plain text version of the content.';

// Encode the String
var encodedString = btoa(string);
console.log(encodedString); 

// Decode the String
var decodedString = atob(encodedString);
console.log(decodedString);
