


function enrollStudent(studentName) {
    console.log(`${studentName} enrolled successfully`);
    function markAttendance() {
        console.log(`Attendance marked for ${studentName}`);
    }
    return markAttendance;
}
const student1 = enrollStudent("Rahul");
// Hundreds or thousands of lines of code...
student1(); // Attendance marked for Rahul
// More code...
student1(); // Attendance marked for Rahul
enrollStudent("Priya");


## Advanced JavaScript MCQ Quiz (Variables, Functions, Scope, Closures)

**Difficulty Level: High**
**Total Questions: 20**

* Q1–Q12: Conceptual Questions
* Q13–Q20: Outcome-Based (Code Output) Questions

---

### 1. Which statement about `let` and `const` is TRUE?

A. `const` variables are hoisted but inaccessible before initialization. ✅
B. `let` variables can be redeclared in the same scope.
C. `const` objects cannot be modified.
D. `let` variables become properties of the global object.

**Answer:** A

---

### 2. What is the output?

```javascript
console.log(a);
let a = 10;
```

A. undefined
B. 10
C. null
D. ReferenceError ✅

**Answer:** D

---

### 3. Which function creates its own `this` binding?

A. Arrow Function
B. Regular Function ✅
C. Both
D. Neither

**Answer:** B

---

### 4. What is a closure?

A. A function with no parameters
B. A function that remembers variables from its outer scope ✅
C. A function returning another function
D. A recursive function

**Answer:** B

---

### 5. Which scope chain is searched first when resolving a variable?

A. Global Scope
B. Parent Scope
C. Current Scope ✅
D. Function Declaration Scope

**Answer:** C

---

### 6. Which statement about function declarations is TRUE?

A. They are not hoisted.
B. They are hoisted with their implementation. ✅
C. They are hoisted as undefined.
D. They must be declared before use.

**Answer:** B

---

### 7. Which keyword prevents reassignment but not mutation?

A. let
B. var
C. const ✅
D. static

**Answer:** C

---

### 8. What will happen?

```javascript
const user = { name: "John" };
user.name = "Alex";
```

A. Error
B. TypeError
C. name remains John
D. name becomes Alex ✅

**Answer:** D

---

### 9. Which statement about block scope is TRUE?

A. `var` is block scoped.
B. `let` and `const` are block scoped. ✅
C. Functions are block scoped by default.
D. JavaScript has no block scope.

**Answer:** B

---

### 10. What is lexical scope?

A. Scope determined by runtime execution
B. Scope determined by where variables are declared in code ✅
C. Scope determined by function calls
D. Scope determined by closures only

**Answer:** B

---

### 11. Which is NOT a higher-order function?

A. map()
B. filter()
C. reduce()
D. push() ✅

**Answer:** D

---

### 12. Which statement about closures is FALSE?

A. Closures can cause memory leaks if misused.
B. Closures preserve outer variables.
C. Closures are created only when returning a function. ✅
D. Closures enable data encapsulation.

**Answer:** C

---

# Outcome-Based Questions (Tricky)

### 13. What is the output?

```javascript
let a = 10;

function test() {
    console.log(a);
    let a = 20;
}

test();
```

A. 10
B. 20
C. undefined
D. ReferenceError ✅

**Answer:** D

---

### 14. What is the output?

```javascript
let x = 1;

function outer() {
    let x = 2;

    function inner() {
        console.log(x);
    }

    return inner;
}

const fn = outer();
fn();
```

A. 1
B. 2 ✅
C. undefined
D. Error

**Answer:** B

---

### 15. What is the output?

```javascript
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}
```

A. 0 1 2 ✅
B. 3 3 3
C. 0 0 0
D. undefined

**Answer:** A

---

### 16. What is the output?

```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}
```

A. 0 1 2
B. 3 3 3 ✅
C. undefined
D. Error

**Answer:** B

---

### 17. What is the output?

```javascript
const obj = {
    count: 0,
    increment: function () {
        return function () {
            this.count++;
            console.log(this.count);
        };
    }
};

obj.increment()();
```

A. 1
B. NaN ✅
C. undefined
D. Error

**Answer:** B

**Explanation:** `this` refers to global object (or undefined in strict mode), not `obj`.

---

### 18. What is the output?

```javascript
function createCounter() {
    let count = 0;

    return function () {
        return ++count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter1());
console.log(counter2());
```

A. 1 2 3
B. 1 2 1 ✅
C. 1 1 1
D. 2 2 2

**Answer:** B

---

### 19. What is the output?

```javascript
let a = 5;

function test(a) {
    return function(b) {
        return a + b;
    }
}

console.log(test(10)(20));
```

A. 25
B. 30 ✅
C. 35
D. 15

**Answer:** B

---

### 20. What is the output?

```javascript
const arr = [];

for (let i = 0; i < 3; i++) {
    arr.push(() => i);
}

console.log(arr[0]());
console.log(arr[1]());
console.log(arr[2]());
```

A. 3 3 3
B. 0 1 2 ✅
C. 0 0 0
D. 1 2 3

**Answer:** B

---

### Bonus Super-Tricky Question

```javascript
let x = 10;

function foo() {
    console.log(x);

    let x = 20;

    function bar() {
        console.log(x);
    }

    bar();
}

foo();
```

A. 10 20
B. 10 10
C. ReferenceError ✅
D. undefined 20

**Answer:** C

Because `let x` inside `foo()` creates a Temporal Dead Zone before initialization, causing the first `console.log(x)` to throw a `ReferenceError`.






  <body>
    <h1>Welcome to KRMU</h1>
    <button onclick="handleclick()">Click</button>

    <script>
      function handleclick() {
        const heading = document.querySelector("h1");
        heading.textContent = "Welcome to Bootcamp";
        heading.style.backgroundColor = "red";
      }
    </script>
  </body>

<!-- with addEventListener -->

 <body>
    <h1>Welcome to KRMU</h1>
    <button>Click</button>

    <script>
      const heading = document.querySelector("h1");
      const button = document.querySelector("button");

      button.addEventListener("click", () => {
        heading.textContent = "Welcome to Bootcamp";
        heading.style.backgroundColor = "red";
      });
    </script>
  </body>

synchronous function 

console.log("1st");
function demo(){
    console.log("2nd)
}
demo()
console.log("3rd");


function sum(a,b){
    console.log(a+b)
}
function calculator(a,b,sumCallback){
    sumCallback(a,b)
}
calculator(1,2,sum)



Order of Execution :
JavaScript first executes all synchronous code from the Call Stack. After the Call Stack becomes empty, it executes all Microtasks (Promise callbacks, await continuations, queueMicrotask). Once the Microtask Queue is empty, it executes Macrotasks/Callback Queue tasks such as setTimeout, setInterval, DOM events (onclick,onchange), and I/O callbacks. This process is managed by the Event Loop.

first Synchronous then asynchronous

Call Stack (Synchronous)
        ↓
Microtask Queue
(Promise, await)
        ↓
Macrotask Queue
(setTimeout, onclick, setInterval)



let pro = new Promise((res,rej)=>{
    let quiz="top"
    if(quiz==="top"){
        res();
    }
    else{
        rej()
    }
})
pro.then(()=>{
    console.log("I will give you 5 star")
})
.catch(()=>console.log("i will give you Aryabhatta"))



const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");
const p3 = Promise.resolve("C");

Promise.all([p1, p2, p3])
  .then(res => console.log(res))
  .catch(err => console.log("Error:", err));
  


setTimeout(()=>{
    console.log("1")
},1000)
console.log("1st");
function demo(){
    console.log("2nd")
}
demo()
console.log("3rd");



// console.log("a");
// setTimeout(()=>{
//     console.log("b")
// },5000);
// setTimeout(()=>{
//     console.log("c")
// },3000);
// setTimeout(()=>{
//     console.log("d")
// },2000);
// console.log("e");



// setTimeout(()=>{
//     console.log("SetTimeout1");
// },0)
// function delay() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("SetTimeout2");
//       resolve();
//     }, 0);
//   });
// }
// function test() {
//   console.log("Start");
//   delay();
//   console.log("After Delay");
// }
// test();
// console.log("End");



// console.log("a");
// setTimeout(()=>{
//     console.log("b")
// },0);
// Promise.resolve().then(() => {
//  console.log("Promise");
// });
// console.log("e");


console.log("1");

Promise.resolve().then(() => {
  console.log("2");
});

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");





setTimeout(() => {
  console.log("Timeout 1");

  Promise.resolve().then(() => {
    console.log("Promise inside Timeout");
  });

}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});


//task-1
console.log("A");

new Promise((resolve) => {
  console.log("B");
  resolve();
  console.log("C");
}).then(() => {
  console.log("D");
});

console.log("E");


setTimeout(() => console.log("Timeout 1"), 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
  setTimeout(() => console.log("Timeout 2"), 0);
});

Promise.resolve().then(() => console.log("Promise 2"));








// setTimeout(() => {
//     console.log("1")
//     setTimeout(() => {
//         console.log("1")
//         setTimeout(() => {
//             console.log("1")
//             setTimeout(() => {
//                 console.log("1")
//                 setTimeout(() => {
//                     console.log("1")
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// function pro(num) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log(num);
//             res();
//         }, 1000)
//     })
// }
// pro(1)
//     .then(() => pro(2))
//     .then(() => pro(3))
//     .then(() => pro(4))
//     .then(() => pro(5))





// const pro = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("Promise resolved");
//     },3000)
// })


// function getData(){
//     pro.then(x=>console.log(x));
//     console.log("after promise");
// }
// getData();


// why async and await exist?
// 1. to avoid promise chaining
// 2. To execute the async code properly witrhout confusion
// 3. To handle the promise in a better way



// 1. Async function always return a promise. 

// async function getData(){
//   return "async intro";
// }
// console.log(getData())


// 1. await always used inside async function
// 2. await uses infront of the promise

// Await: it pauses the async function untill the promise returns a result

// const pro = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("Payment Done");
//     },5000)
// })

// async function getData(){
//     const res = await pro;
//     console.log(res);
//     console.log("Dashboard Access Given")

// }
// getData()


// Fetch API

// fetch('https://jsonplaceholder.typicode.com/users') it returns a promise, if the link is correct then promise resolved
//     .then(response => response.json()). // .json() converts to Javascript object and also return a promise.
//     .then(json => console.log(json)) 

// Using asyc and await 
// async function getData() {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/users')
//         let json = await response.json()
//         console.log(json)
//     } catch (err) {
//         console.error(err);
//     }
// }
// getData()


// Fetch weather data

async function getData(city) {

    const API_Key = "af9f63c59a649f27d602b96a43d0bd14";
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`)
        let data = await response.json();
        console.log(data);

        console.log(city);
        console.log(" City Temp: ", data.main.temp);
        console.log("Humidity",data.main.humidity)
       
    } catch (err) {
        console.error(err);
    }
}
getData("Gurugram")






## Integrate the <FlowingMenu /> component from React Bits

You are helping integrate an open-source React component into an existing application.

### Component: FlowingMenu
### Variant: JavaScript + CSS
### Dependencies: gsap

---

### Usage Example
```jsx
import FlowingMenu from './FlowingMenu'

const demoItems = [
  { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
  { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
];

<div style={{ height: '600px', position: 'relative' }}>
  <FlowingMenu items={demoItems} />
</div>
```

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| items | object[] | [] | An array of objects containing: link, text, image. |
| speed | number | 15 | Duration of the marquee animation in seconds (lower = faster). |
| textColor | string | #ffffff | Color of the static menu text. |
| bgColor | string | #120F17 | Background color of the menu container. |
| marqueeBgColor | string | #ffffff | Background color of the marquee overlay. |
| marqueeTextColor | string | #120F17 | Text color inside the marquee. |
| borderColor | string | #ffffff | Color of the dividing lines between menu items. |

### Full Component Source
```jsx
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

import './FlowingMenu.css';

function FlowingMenu({
  items = [],
  speed = 15,
  textColor = '#fff',
  bgColor = '#120F17',
  marqueeBgColor = '#fff',
  marqueeTextColor = '#120F17',
  borderColor = '#fff'
}) {
  return (
    <div className="menu-wrap" style={{ backgroundColor: bgColor }}>
      <nav className="menu">
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            {...item}
            speed={speed}
            textColor={textColor}
            marqueeBgColor={marqueeBgColor}
            marqueeTextColor={marqueeTextColor}
            borderColor={borderColor}
          />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ link, text, image, speed, textColor, marqueeBgColor, marqueeTextColor, borderColor }) {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const animationRef = useRef(null);
  const [repetitions, setRepetitions] = useState(4);

  const animationDefaults = { duration: 0.6, ease: 'expo' };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const distMetric = (x, y, x2, y2) => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  };

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!marqueeInnerRef.current) return;

      // Get the first marquee part to measure content width
      const marqueeContent = marqueeInnerRef.current.querySelector('.marquee__part');
      if (!marqueeContent) return;

      const contentWidth = marqueeContent.offsetWidth;
      const viewportWidth = window.innerWidth;

      // Calculate how many copies we need to fill viewport + extra for seamless loop
      // We need at least 2, but calculate based on content vs viewport
      const needed = Math.ceil(viewportWidth / contentWidth) + 2;
      setRepetitions(Math.max(4, needed));
    };

    calculateRepetitions();
    window.addEventListener('resize', calculateRepetitions);
    return () => window.removeEventListener('resize', calculateRepetitions);
  }, [text, image]);

  useEffect(() => {
    const setupMarquee = () => {
      if (!marqueeInnerRef.current) return;

      const marqueeContent = marqueeInnerRef.current.querySelector('.marquee__part');
      if (!marqueeContent) return;

      const contentWidth = marqueeContent.offsetWidth;
      if (contentWidth === 0) return;

      if (animationRef.current) {
        animationRef.current.kill();
      }

      // Animate exactly one content width for seamless loop
      animationRef.current = gsap.to(marqueeInnerRef.current, {
        x: -contentWidth,
        duration: speed,
        ease: 'none',
        repeat: -1
      });
    };

    // Small delay to ensure DOM is ready after repetitions update
    const timer = setTimeout(setupMarquee, 50);

    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [text, image, repetitions, speed]);

  const handleMouseEnter = ev => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
  };

  const handleMouseLeave = ev => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);
  };

  return (
    <div className="menu__item" ref={itemRef} style={{ borderColor }}>
      <a
        className="menu__item-link"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ color: textColor }}
      >
        {text}
      </a>
      <div className="marquee" ref={marqueeRef} style={{ backgroundColor: marqueeBgColor }}>
        <div className="marquee__inner-wrap">
          <div className="marquee__inner" ref={marqueeInnerRef} aria-hidden="true">
            {[...Array(repetitions)].map((_, idx) => (
              <div className="marquee__part" key={idx} style={{ color: marqueeTextColor }}>
                <span>{text}</span>
                <div className="marquee__img" style={{ backgroundImage: `url(${image})` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;

```

### Component CSS
```css
.menu-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.menu {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  padding: 0;
}

.menu__item {
  flex: 1;
  position: relative;
  overflow: hidden;
  text-align: center;
  border-top: 1px solid;
}

.menu__item:first-child {
  border-top: none;
}

.menu__item-link {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  font-weight: 600;
  font-size: 4vh;
}

.menu__item-link:hover {
  color: inherit;
}

.menu__item-link:focus:not(:focus-visible) {
  color: inherit;
}

.marquee {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transform: translate3d(0, 101%, 0);
}

.marquee__inner-wrap {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.marquee__inner {
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  width: fit-content;
  will-change: transform;
}

.marquee__part {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.marquee span {
  white-space: nowrap;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 4vh;
  line-height: 1;
  padding: 0 1vw;
}

.marquee__img {
  width: 200px;
  height: 7vh;
  margin: 2em 2vw;
  padding: 1em 0;
  border-radius: 50px;
  background-size: cover;
  background-position: 50% 50%;
}

```

### Integration Instructions
1. Install any listed dependencies.
2. Copy the component source into the appropriate directory in the project.
3. Import the CSS file alongside the component.
4. Import and render the component using the usage example above as a starting point.
5. Adjust props as needed for the specific use case — refer to the props table for all available options.


