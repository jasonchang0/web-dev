document.write("We are now using an external .js file!");
// Must always start variable declaration with VAR
var num = 0;            // Numeric variables - numbers
var str = " some text";  // String variables - text and characters - MUST be surrounded by double quotation marks
var bool = true;        // Boolean - True or False

/*
    Function defines the action or behavior that works with the variables.
    
    Why use variables? Storage - programs memory - and allows us to REUSE THEM
    Variable naming: Can only start with letter or _ and are CASE SENSITIVE

    JavaScript is a loosely typed language.
    e.g.: var num = 0;

    Java is a strongly typed language.
    e.g.: int num = 0;
*/

alert(num + str);

function add(num1, num2) {
    /*  All statements go inside curly braces.
        The multiplication and division operators take precedence over the addition and subtraction operators. */
    var sum = num1 + num2;

    alert("Sum of " + num1 + " and " + num2 + " is " + sum);
}

add(5, 10);