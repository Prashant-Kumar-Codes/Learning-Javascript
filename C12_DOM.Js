/* DOM: When a web page is loaded, the browser creates a Document Object Model(DOM) of the page.

            window
              |
           document
              |
             html
              /\
             /  \       
            /    \
        head      body
        /          \
    meta,           div -- img, h1, p, div, section ...
    meta,           script
    title,
    links

these are (window, documents, html, head, body) called nodes.

DOM MANIPULATION:
    -selecting tags by using getElement methods:

1) selecting by id:
        document.getElementById('id_name')

2) selecting with class:
        document.getElementByClassName('class_name)

3) selecting with tag:
        document.getElementByTagName('tag')

4) selecting with name:
        document.getElementByName('name')

getElementBy methods returns a live HTMLCollection (live means if DOM changes, the collectioni is automatically updated)

if id does not exits we get null,
if class does not exits we get empty html collection of length=0.
*/


// --------------------------Next------------------------------------------------------
// ------------------------------Topic--------------------------------------------------


/*  QUERYSELECTOR: 

querySelector(): A DOM method used to select the first element that matches a given CSS selector. If no element matches → returns null.

    📌 Syntax
    document.querySelector(selector)
    element.querySelector(selector)


selector → Any valid CSS selector (id, class, tag, attribute, pseudo-class, etc.).

## Works on the whole document or within a specific element.

📌Ways to select by querySelector()

1. By ID
    let title = document.querySelector("#myId");

2. By Class
    let box = document.querySelector(".myClass");

3. By Tag Name
    let firstDiv = document.querySelector("div");


4. By Attribute
    let inputEmail = document.querySelector("input[type='email']");

5. By Descendant (nested elements)
    let nested = document.querySelector("div p");

6. By Direct Child
    let child = document.querySelector("ul > li");

        Selects the first <li> that is a direct child of a <ul>.

7. Using Pseudo-classes
    let firstItem = document.querySelector("li:first-child");
    let lastItem = document.querySelector("li:last-child");
    let nthItem = document.querySelector("li:nth-child(2)");

        Selects elements based on their position.

8. Within a Specific Element
    let list = document.querySelector("ul");
    let item = list.querySelector("li"); 

        Searches only inside that <ul>, not the whole document.


📌 Key Points

Always returns the first match only.
Use querySelectorAll() if you want all matches (NodeList).
Can use any CSS selector → very flexible.
*/


/*
DOM MANIPULATION - PROPERTIES
    1) tagName: returns tag for element nodes.
    2) innerText: returns the text content of the element and all its children.
    3) innerHTML: returns the plain the or HTML contents in the element.
    4) textContent: returns textual content even for hidden elements.
*/




//-------------------------- :: code :: --------------------------
document.getElementById('btnid').addEventListener('click', function() {
    let time = new Date()
    time.toLocaleDateString()
    alert(`Button is clicked at ${time}`)    
    console.log(`Button is clicked at ${time.toLocaleString()}`)
})
console.log('this element is button')


//-------------------------- :: code :: --------------------------
// adding extra text using js in heading tag
let h1Heading = document.querySelector('#h1id')
console.log('This is using console.log()\t',h1Heading.innerText)
console.dir('This is using console.dir()\t',h1Heading.innerText)

h1Heading.innerText += ', Welcoming you to my Webpage'

//-------------------------- :: code :: --------------------------
document.getElementsByName()