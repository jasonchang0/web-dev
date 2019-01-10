document.write("We are now using an external .js file!");

// Writes a new line
document.write("<br>");

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

// alert(num + str);

function add(num1, num2) {
    /*  All statements go inside curly braces.
        The multiplication and division operators take precedence over the addition and subtraction operators. 
     */

    if ((typeof num1 == "number" || (typeof num1 == "object" && num1.constructor === Number)) && (typeof num2 == "number" || (typeof num2 == "object" && num2.constructor === Number))) {
        /* Must include var keyword to instantiate local variable, else the variable is declared as global. */
        var sum = num1 + num2;
        return "Sum of " + num1 + " and " + num2 + " is " + sum;
    }

    return "TypeError: Incorrect parameter types given";
}

// alert(add(5, 10));

/*
Dynamic JavaScript Custom Objects:
    1. Variables inside an object are called properties.
    2. Real life objects have multiple properties.
    3. Use the . to access an object's properties.
    4. Functions inside objects are called methods.
 */
var obj = {
    height: 780,
    width: 560,
    length: 320,
    material: "metal",

    volume: function () {
        return this.height * this.width * this.length;
    }
}

document.write("Volume of obj is " + obj.volume());
document.write("<br>");

/* 
JavaScript Global Objects:
    1. Objects that JavaScript provides that we can use.
    2. Already written for us so we can use their methods and properties.
 */
var todayDate = new Date();

// Date Object in JavaScript
document.write(todayDate.toDateString());

/*
Document Object Model (DOM):
    1. Browser loads page
    2. DOM is created — objects that we can use that represents the HTML. Objects are stored in the DOM.
    3. The DOM allows us to use our JavaScript code to access parts of the web pages.

    Types of Node (with corresponding hierarchy):
        1. Element node
        2. Attribute node (class/id)
        3. Text node
 */

/*
changeStyle function (with element ID):
    1. Need to grab the element ID. We can do that with the getelementbyid method
    2. Once we have the ID, we are good to go and can start to style the element with the style object, which is another object in the DOM.
    
    [Same properties apply to TagName and ClassName]
 */
function changeStyle() {
    // var text = document.getElementById("sub1");
    // var text = document.getElementsByTagName("p")[0];
    var text = document.getElementsByClassName("para")[0];

    text.style.backgroundColor = "#003262";
    text.style.color = "#FDB515";
    text.style.fontWeight = "bold";
}

function changeText() {
    var text = document.getElementsByClassName("para")[1];

    text.innerHTML = "Some submissions have been made.";
}

function combineText() {
    var confirmation = confirm("These changes are permanent, click OK to continue");

    if (confirmation) {
        var paras = document.getElementsByClassName("para");
        var tempLength = 5
        var text = paras[tempLength - 1];

        for (var i = 2; i < tempLength - 1; i += 1) {
            text.innerHTML += paras[i].innerHTML;
            paras[i].innerHTML = "";
        }

        document.getElementById("combine").style.visibility = "hidden";
    }
}

function changeWeather(weather) {
    var img = document.getElementById("weather");

    img.src = "../../data/" + weather + ".jpg";
    img.title = weather.replace("_", " ");
    img.alt = img.title;
}

/*
Steps to creating an event:
    1. Choose the element where we will place our event — in this case the button  element
    2. Choose the event we want to use (in the above case onclick)
    
    When the event happens (i.e. when the user clicks the button), our JavaScript function is called by the onclick event.
 */
function changeBackground(input) {
    var text = document.getElementById("main");

    if (input == "on") {
        text.style.color = "white";
        text.style.backgroundColor = "#4E2A84";

    } else if (input == "off") {
        text.style.color = "";
        text.style.backgroundColor = "";
    }
}

function moreJavaScript() {
    var element = document.createElement("p");
    var main = document.getElementById("main");

    var text = document.createTextNode("Initially only implemented client-side in web browsers, JavaScript engines are now embedded in many other types of host software, including server-side in web servers and databases, and in non-web programs such as word processors and PDF software, and in runtime environments that make JavaScript available for writing mobile and desktop applications, including desktop widgets.");

    main.appendChild(element);
    element.appendChild(text);

    var prevText = document.querySelector("#main .para");
    var pAttribute = document.createAttribute("class");

    pAttribute.value = prevText.getAttribute("class");
    element.setAttributeNode(pAttribute);

    // element.className = prevText.className;
}

// Traversing the DOM
function lessJavaScript() {
    var parent = document.getElementById("main");
    // 3 -> A white space is also treated as a node in DOM.
    var element = parent.childNodes[3];

    // var element = document.querySelectorAll("#main .para")[1];
    // var parent = element.parentNode;

    parent.removeChild(element);
}

function isEmpty(element) {
    return element.value == "" || element.length <= 3;
}

function redHighlight(field) {
    field.focus();
    field.style.border = "solid 3px red";
}

function validateRadio(radios) {
    for (var radio of radios) {
        if (radio.checked) {
            return true;
        }
    }
    return false;
}

function validateResponse() {
    var fields = ["firstname", "lastname", "comment"];
    var valid = true;

    for (var id of fields) {
        var field = document.getElementById(id);
        valid = valid && !isEmpty(field);

        if (isEmpty(field)) {
            redHighlight(field);
        }
    }

    if (!valid) {
        alert("The field marked in red cannot be blank.");
    }

    // var firstname = document.getElementById("firstname");

    // if (isEmpty(firstname)) {
    //     alert("The field marked in red cannot be blank.");
    //     return false;
    // }

    validRadio = validateRadio(document.forms["user_form"]["yes/no"]);

    if (!validRadio) {
        alert("Please answer all questions");
    }

    valid = valid && validRadio;

    return valid;
}

/* Almost everything is an object - EVEN simple variables with a single value
 
var car = "Ford";
 
==========================================================================================
 
But in reality most objects have multiple values
Here a single object is created with 3 name:value pairs
 
var car = {type:"Compact", color:"Blue", miles:5000};
 
==========================================================================================
 
What if we need to create many objects off the same generic object?  
We can create an Object Type which is essentially a template that you can reuse over and over again.
THIS IS ALSO CALLED A CLASS.  We do not need values in the Object Type because this is our 'template'.  When
we create new objects off of the Object Type then we will assign values.  The this keyword is the place holder for new object. 
*/

class car {
    constructor(type, color, miles) {
        this.type = type;
        this.color = color;
        this.miles = miles;
    }
}

// Define class as only the constructor function
// function car(type, color, miles) {
//     this.type = type;
//     this.color = color;
//     this.miles = miles;
// }

var car1 = new car("Compact", "blue", 6580);
var car2 = new car("Truck", "red", 397);
var car3 = new car("SUV", "yellow", 9948);

function getCar() {
    document.getElementById("car").innerHTML = car1.type + " car with " + car2.miles + " miles.  " + car3.color + " is the color.";

}

function changePage() {
    window.location = "index.html";
}
