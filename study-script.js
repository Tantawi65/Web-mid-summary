// JavaScript Study Guide Script
// Demonstrating various JavaScript concepts from the notes

// Wait for DOM to load - Unobtrusive JavaScript approach
document.addEventListener('DOMContentLoaded', function() {
    console.log('Study Guide JavaScript loaded successfully!');
    
    // Initialize all interactive features
    initDOMDemo();
    initRandomNumberDemo();
    initScrollToTop();
    demonstrateMathObject();
    demonstrateArrayMethods();
    demonstrateParseInt();
});

// DOM Manipulation Demo
function initDOMDemo() {
    // Get elements using getElementById
    var demoText = document.getElementById('demo-text');
    var changeTextBtn = document.getElementById('change-text-btn');
    var changeColorBtn = document.getElementById('change-color-btn');
    var toggleVisibilityBtn = document.getElementById('toggle-visibility-btn');
    
    if (!demoText || !changeTextBtn || !changeColorBtn || !toggleVisibilityBtn) {
        console.log('DOM demo elements not found');
        return;
    }
    
    // Array of colors for demonstration
    var colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'];
    var colorIndex = 0;
    
    // Event listener for changing text - addEventListener() method
    changeTextBtn.addEventListener('click', function() {
        // Demonstrate innerHTML property
        demoText.innerHTML = 'Text changed at: ' + new Date().toLocaleTimeString();
    });
    
    // Event listener for changing color
    changeColorBtn.addEventListener('click', function() {
        // Demonstrate style property - MUST use .style
        // Property names are camelCase (backgroundColor not background-color)
        demoText.style.backgroundColor = colors[colorIndex];
        demoText.style.color = 'white';
        demoText.style.padding = '20px'; // Must include units as string
        demoText.style.borderRadius = '10px';
        
        colorIndex = (colorIndex + 1) % colors.length;
    });
    
    // Event listener for toggling visibility
    toggleVisibilityBtn.addEventListener('click', function() {
        // Demonstrate visibility vs display
        if (demoText.style.display === 'none') {
            demoText.style.display = 'block';
            toggleVisibilityBtn.innerHTML = 'Hide Element';
        } else {
            demoText.style.display = 'none';
            toggleVisibilityBtn.innerHTML = 'Show Element';
        }
    });
}

// Random Number Generator Demo
function initRandomNumberDemo() {
    var randomNumberSpan = document.getElementById('random-number');
    var generateBtn = document.getElementById('generate-random-btn');
    
    if (!randomNumberSpan || !generateBtn) {
        console.log('Random demo elements not found');
        return;
    }
    
    // addEventListener for unobtrusive JavaScript
    generateBtn.addEventListener('click', function() {
        // Math.random() generates number between 0 and 1
        // Math.floor() rounds down to nearest integer
        var rand1to10 = Math.floor(Math.random() * 10 + 1);
        randomNumberSpan.innerHTML = rand1to10;
        
        // Demonstrate other Math methods
        console.log('Random number: ' + rand1to10);
        console.log('Math.PI: ' + Math.PI);
        console.log('Math.floor(Math.PI): ' + Math.floor(Math.PI)); // 3
        console.log('Math.ceil(3.2): ' + Math.ceil(3.2)); // 4
        console.log('Math.abs(-5): ' + Math.abs(-5)); // 5
        console.log('Math.pow(2, 3): ' + Math.pow(2, 3)); // 8
        console.log('Math.sqrt(16): ' + Math.sqrt(16)); // 4
    });
}

// Demonstrate Math Object methods
function demonstrateMathObject() {
    console.log('\n=== Math Object Demonstration ===');
    
    // Properties
    console.log('Math.E: ' + Math.E); // Euler's number
    console.log('Math.PI: ' + Math.PI); // Pi
    
    // Methods
    console.log('Math.abs(-10): ' + Math.abs(-10)); // 10
    console.log('Math.ceil(4.3): ' + Math.ceil(4.3)); // 5
    console.log('Math.floor(4.7): ' + Math.floor(4.7)); // 4
    console.log('Math.round(4.5): ' + Math.round(4.5)); // 5
    console.log('Math.max(1, 5, 3): ' + Math.max(1, 5, 3)); // 5
    console.log('Math.min(1, 5, 3): ' + Math.min(1, 5, 3)); // 1
    console.log('Math.pow(2, 3): ' + Math.pow(2, 3)); // 8
    console.log('Math.sqrt(16): ' + Math.sqrt(16)); // 4
    
    // Trigonometric functions
    console.log('Math.sin(Math.PI / 2): ' + Math.sin(Math.PI / 2)); // 1
    console.log('Math.cos(0): ' + Math.cos(0)); // 1
    console.log('Math.tan(Math.PI / 4): ' + Math.tan(Math.PI / 4)); // ~1
    
    // Logarithm
    console.log('Math.log(Math.E): ' + Math.log(Math.E)); // 1
}

// Demonstrate Array Methods
function demonstrateArrayMethods() {
    console.log('\n=== Array Methods Demonstration ===');
    
    // Create array
    var a = ["Stef", "Jason"];
    console.log('Initial array: ' + a); // Stef, Jason
    
    // push - adds to end
    a.push("Brian");
    console.log('After push("Brian"): ' + a); // Stef, Jason, Brian
    
    // unshift - adds to front
    a.unshift("Kelly");
    console.log('After unshift("Kelly"): ' + a); // Kelly, Stef, Jason, Brian
    
    // pop - removes from end
    var removed = a.pop();
    console.log('After pop(): ' + a); // Kelly, Stef, Jason
    console.log('Removed element: ' + removed); // Brian
    
    // shift - removes from front
    var shifted = a.shift();
    console.log('After shift(): ' + a); // Stef, Jason
    console.log('Shifted element: ' + shifted); // Kelly
    
    // sort - sorts alphabetically
    a.sort();
    console.log('After sort(): ' + a); // Jason, Stef
    
    // reverse
    a.reverse();
    console.log('After reverse(): ' + a); // Stef, Jason
    
    // concat - joins arrays
    var b = ["Alice", "Bob"];
    var c = a.concat(b);
    console.log('After concat: ' + c); // Stef, Jason, Alice, Bob
    
    // join - creates string from array
    var str = c.join(", ");
    console.log('After join(", "): ' + str); // Stef, Jason, Alice, Bob
    
    // slice - extracts portion
    var sliced = c.slice(1, 3);
    console.log('After slice(1, 3): ' + sliced); // Jason, Alice
    
    // splice - adds/removes elements
    var numbers = [1, 2, 3, 4, 5];
    numbers.splice(2, 1, 99, 100); // At position 2, remove 1 element, add 99 and 100
    console.log('After splice: ' + numbers); // 1, 2, 99, 100, 4, 5
    
    // Array as stack (LIFO - Last In First Out)
    console.log('\n--- Array as Stack ---');
    var stack = [];
    stack.push(1); // [1]
    stack.push(2); // [1, 2]
    stack.push(3); // [1, 2, 3]
    console.log('Stack after pushes: ' + stack);
    console.log('Pop from stack: ' + stack.pop()); // 3
    console.log('Stack now: ' + stack); // [1, 2]
    
    // Array as queue (FIFO - First In First Out)
    console.log('\n--- Array as Queue ---');
    var queue = [];
    queue.push(1); // [1]
    queue.push(2); // [1, 2]
    queue.push(3); // [1, 2, 3]
    console.log('Queue after pushes: ' + queue);
    console.log('Shift from queue: ' + queue.shift()); // 1
    console.log('Queue now: ' + queue); // [2, 3]
}

// Demonstrate parseInt and parseFloat
function demonstrateParseInt() {
    console.log('\n=== parseInt and parseFloat Demonstration ===');
    
    // parseInt - converts string to integer
    console.log('parseInt("42"): ' + parseInt("42")); // 42
    console.log('parseInt("42.5"): ' + parseInt("42.5")); // 42 (truncates decimal)
    console.log('parseInt("42px"): ' + parseInt("42px")); // 42 (stops at non-numeric)
    console.log('parseInt("abc"): ' + parseInt("abc")); // NaN (Not a Number)
    
    // parseInt with radix (base)
    console.log('parseInt("10", 10): ' + parseInt("10", 10)); // 10 (decimal)
    console.log('parseInt("10", 2): ' + parseInt("10", 2)); // 2 (binary)
    console.log('parseInt("10", 16): ' + parseInt("10", 16)); // 16 (hexadecimal)
    console.log('parseInt("FF", 16): ' + parseInt("FF", 16)); // 255
    
    // parseFloat - converts string to floating-point number
    console.log('parseFloat("42.5"): ' + parseFloat("42.5")); // 42.5
    console.log('parseFloat("3.14159"): ' + parseFloat("3.14159")); // 3.14159
    console.log('parseFloat("42"): ' + parseFloat("42")); // 42
    console.log('parseFloat("42.5px"): ' + parseFloat("42.5px")); // 42.5
    console.log('parseFloat("abc"): ' + parseFloat("abc")); // NaN
}

// Demonstrate setInterval - Timer function
function initScrollToTop() {
    // Create a scroll-to-top button
    var scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'fixed-position';
    scrollBtn.style.display = 'none';
    scrollBtn.style.fontSize = '24px';
    scrollBtn.style.width = '50px';
    scrollBtn.style.height = '50px';
    scrollBtn.style.cursor = 'pointer';
    document.body.appendChild(scrollBtn);
    
    // Show/hide button based on scroll position
    // setInterval runs function repeatedly
    setInterval(function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    }, 100);
    
    // Scroll to top when clicked
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Demonstrate event-driven programming concepts
// Event listeners for pseudo-class demonstrations
document.addEventListener('DOMContentLoaded', function() {
    // Get all links in the navbar
    var navLinks = document.querySelectorAll('#navbar a');
    
    // Add smooth scrolling to navigation links
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Demonstrate focus event
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(btn) {
        btn.addEventListener('focus', function() {
            console.log('Button focused: ' + this.innerHTML);
        });
    });
    
    // Demonstrate hover effect through JavaScript (though CSS is better for this)
    var interactiveBox = document.getElementById('box-demo');
    if (interactiveBox) {
        interactiveBox.addEventListener('mouseenter', function() {
            console.log('Mouse entered the box!');
        });
        
        interactiveBox.addEventListener('mouseleave', function() {
            console.log('Mouse left the box!');
        });
    }
});

// Demonstrate DOM property access
function demonstrateDOMProperties() {
    console.log('\n=== DOM Properties Demonstration ===');
    
    // Get element by ID
    var mainSection = document.getElementById('html-section');
    
    if (mainSection) {
        // tagName property
        console.log('tagName: ' + mainSection.tagName); // SECTION
        
        // className property
        console.log('className: ' + mainSection.className);
        
        // innerHTML property
        console.log('innerHTML length: ' + mainSection.innerHTML.length);
        
        // Get image if exists
        var images = document.getElementsByTagName('img');
        if (images.length > 0) {
            console.log('First image src: ' + images[0].src);
        }
    }
}

// Call DOM properties demonstration
setTimeout(demonstrateDOMProperties, 1000);

// Demonstrate common styling errors (corrected versions)
function demonstrateCorrectStyling() {
    console.log('\n=== Correct DOM Styling Examples ===');
    
    var demoText = document.getElementById('demo-text');
    
    if (demoText) {
        // CORRECT: Use .style
        demoText.style.color = "red";
        
        // CORRECT: Use camelCase for properties
        demoText.style.fontSize = "14pt";
        
        // CORRECT: Use strings with units
        demoText.style.width = "200px";
        demoText.style.padding = "0.5em";
        
        console.log('Styling applied correctly!');
    }
}

// Error handling example
try {
    demonstrateCorrectStyling();
} catch (error) {
    console.error('Error in styling demonstration: ' + error.message);
}

// Demonstrate event types
function demonstrateEventTypes() {
    console.log('\n=== Event Types ===');
    console.log('Available event types:');
    console.log('- click: Mouse click on element');
    console.log('- dblclick: Double click');
    console.log('- mouseenter: Mouse enters element');
    console.log('- mouseleave: Mouse leaves element');
    console.log('- mouseover: Mouse over element');
    console.log('- mouseout: Mouse out of element');
    console.log('- keydown: Key is pressed');
    console.log('- keyup: Key is released');
    console.log('- focus: Element receives focus');
    console.log('- blur: Element loses focus');
    console.log('- change: Form element value changes');
    console.log('- submit: Form is submitted');
    console.log('- load: Page finishes loading');
    console.log('- scroll: Page is scrolled');
}

demonstrateEventTypes();

// Console message for students
console.log('\n' + '='.repeat(50));
console.log('Welcome to the Web Programming Study Guide!');
console.log('Open the browser console to see JavaScript demonstrations');
console.log('All concepts from your notes are demonstrated here');
console.log('='.repeat(50) + '\n');

// Unobtrusive JavaScript reminder
console.log('💡 Remember: This is UNOBTRUSIVE JavaScript!');
console.log('✓ No inline event handlers in HTML');
console.log('✓ All JavaScript separated in external file');
console.log('✓ Better maintainability and organization');
console.log('✓ addEventListener() instead of onclick attributes\n');