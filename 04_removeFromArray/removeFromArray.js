const removeFromArray = function(...args) {
    const array = args[0];
    const newArray = [];

    array.forEach((itemFromFuncInput) => {
        if (!args.includes(itemFromFuncInput)) {
            newArray.push(itemFromFuncInput);
        }
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
