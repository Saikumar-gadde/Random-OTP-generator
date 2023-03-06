# random-otp-generator

'random-otp-generator' is a function that generates a random one-time password (OTP). This function takes in two arguments - length and options - and returns a randomly generated OTP as a string.

#### Installation
To use randomOtp in your project, you can install it via npm: 
````Javascript 
npm install random-otp-generator
````


#### Usage
Here's an example of how you can use randomOtp in your code:

```` Javascript
const randomOtp = require('random-otp-generator');

//  Generate a 4- digits OTP by default
const otp = randomOtp();

console.log(otp);  //Example output: "5172"

//You can also specify length of the OTP

const otp = randomOtp(6);

console.log(otp) // Example output : "517141"

````

#### You can also pass in an optional options object to customize the generated OTP:

````Javascript
// Generate a 6-character OTP consisting of lowercase letters;
const otp = randomOtp(6, { alpha: true, lower: true });

console.log(otp); // Example output: "svprna" 
````

### Arguments
The randomOtp function takes in two arguments:

```length``` (optional): The length of the OTP to be generated. Defaults to 4 if not specified.
#### `options` (optional): An object that can contain the following properties:

```alpha``` (boolean): If true, the generated OTP will return alphabet letters.
```lower``` (boolean): If true, the generated OTP will include lowercase letters.
The `randomOtp` function returns a randomly generated OTP as a string.
