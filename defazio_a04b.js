/* Amanda DeFazio
defazio_a04b.js
INFO 2124
Rosas
*/

const fname = 'Amanda';
const weight = '195.0';
const age = '24';
const height = '68';
const MarsGravity = 0.38;
const InchesToMeters = 2.54;

let AgeinYears = parseInt(age) * 365;
let MarsAge = AgeinYears/687;
let MarsWeight = parseFloat(weight) * MarsGravity;
let MarsHeight = parseFloat(height) * 2.54;

let msg = `Hello there, ${fname}! On earth you weigh ${weight} pounds.
But, since gravity is weaker on Mars, you would only weigh ${MarsWeight} pounds there.

Neat huh? Want to know what else is neat?

Mars takes longer to rotate around the Sun than does Earth. This means the Mars year is
longer than our "terran" year. So although you are ${Number(age)} years old on Earth, you're
only ${MarsAge.toFixed(2)} years old on Mars. 

Did you know, the European Space Agency requires potential astronauts to measure between
153 and 190 cm? Just in case you ever decide to move to Europe and want to be
an astronaut, your height in metric is ${String(MarsHeight)} cm.`;

console.log(msg);
