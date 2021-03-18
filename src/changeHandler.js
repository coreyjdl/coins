const coins = [
    ["silver-dollar",    100],
    ["half-dollar",      50],
    ["quarter",          25],
    ["dime",             10],
    ["nickel",           5],
    ["penny",            1]];

module.exports.makeChange = (number) => {
    
    let output = {};

    if (number.substring(0,1) == '$') {
        number = number.substring(1)
    }
    
    number = parseInt(100 * parseFloat(number));

    if (!number) {
        return "invalid input";
    }

    coins.forEach( coin => {
        let coinName = coin[0];
        let coinValue = coin[1];

        output[coinName] = Math.floor(number / coinValue);
        number = number % coinValue;
    });

    return output;
}
