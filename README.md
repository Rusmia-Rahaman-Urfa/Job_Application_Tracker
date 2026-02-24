***Selectors***

**getElementById:** It grabs exactly one element by its unique ID. It’s the fastest and most reliable way to target a specific button or container.

**getElementsByClassName:** Returns an "HTML Collection" (which looks like an array but isn't quite one) of all elements with that class. It’s "live," meaning if you add another element with that class later, the collection updates automatically.

**querySelector / querySelectorAll:** You use CSS syntax (like .my-class or #my-id > p). querySelector grabs the first one it finds, while querySelectorAll grabs everything in a static NodeList

***Creating and Inserting Elements***

**It’s a two-step process:**

**Create:** You make the element in memory using const newDiv = document.createElement('div');.

**Insert:** You tell the DOM where it belongs. You’d usually find a parent element and use .appendChild(newDiv) to put it at the end, or .prepend() to put it at the start.

***Event Bubbling***

Think of this like a bubble rising in a glass of soda. When you click a button, the "click" event starts at the button, but then it travels upward to the button's parent, then the grandparent, all the way to the window. If all those parent elements have click listeners, they will all go off one by one.

***Event Delegation***

Instead of putting a listener on every single "Delete" button in your job cards, you put one listener on the parent container.

**Why?** Because of bubbling, the click on the button will reach the parent anyway.

***Usefulness:***

It’s way more efficient for memory, and it works for elements you haven't even created yet (like a new job card added after the page loads).

***preventDefault() vs stopPropagation()***

**preventDefault():** Tells the browser, "Don't do your default thing." For example, it stops a link from opening a URL or a form from refreshing the page when you hit submit.

**stopPropagation():** Tells the event, "Stop right here!" It prevents the event from bubbling up to parent elements. It doesn't stop the default behavior; it just stops the "bubble" from traveling further up the tree.
