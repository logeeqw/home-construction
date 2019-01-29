
const PROMPT = require(`readline-sync`);
let lotNum, bedNum, bathNum, garageSize, total, bedPrice , bathPrice , garagePrice ;
const BASE_PRICE = 50000;

/**
 * @method
 * @desc The dispatch method for the program
 * @return (null)
 */
function main() {
    setlotNum();
    setbedNum();
    setbathNum();
    setGarageSize();
    setBedPrice();
    setBathPrice();
    setGaragePrice();
    setTotalPrice();
    printTotal();
}

main();

/**
 * @method
 * @desc Sets the lot number
 * @return (null)
 */
function setlotNum() {
    lotNum = Number(PROMPT.question(`\nPlease enter lot number`));
}

/**
 * @method
 * @desc Sets the number of bedrooms
 * @return (null)
 */
function setbedNum() {
    bedNum = Number(PROMPT.question(`\nPlease enter number of bedrooms`));
}

/**
 * @method
 * @desc Sets the number of bathrooms
 * @return (null)
 */
function setbathNum() {
    bathNum = Number(PROMPT.question(`\nPlease enter number of bathrooms`));
}

/**
 * @method
 * @desc Sets the garage size in number of cars
 * @return (null)
 */
function setGarageSize() {
    garageSize = Number(PROMPT.question(`\nPlease enter the size of the garage in number of cars`));
}

/**
 * @method
 * @desc determines total price
 * @return (null)
 */
function setTotalPrice() {
    total = BASE_PRICE + bedPrice + bathPrice + garagePrice;
}

/**
 * @method
 * @desc Sets a price based on bedrooms
 * @return (null)
 */
function setBedPrice() {
    bedPrice = bedNum * 17000;
}

/**
 * @method
 * @desc Sets a price based on bathrooms
 * @return (null)
 */
function setBathPrice() {
    bathPrice = bathNum * 12500;
}

/**
 * @method
 * @desc Sets a price based on garage size
 * @return (null)
 */
function setGaragePrice() {
    garagePrice = garageSize * 6000;
}

/**
 * @method
 * @desc Outputs the total price
 * @return (null)
 */
function printTotal() {
    console.log(`\n your total cost is: ${total}`);
}