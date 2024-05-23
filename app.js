//Declare new variables that I will alter and create with JS from HTML
const body = document.querySelector("Body");
const h1 = document.querySelector("h1");
const img = document.querySelector("img");
const h2 = document.createElement("h2")
const unorderedList = document.createElement("ul");
const listItem1 = document.createElement("li");
const listItem2 = document.createElement("li");
const listItem3 = document.createElement("li");


console.log(body);
//Change the textContent of the h1
h1.textContent = "Hello world!";
//Log the new textContent of h1
console.log(h1);

//Alter the img tag using JS
img.src = "https://fastly.picsum.photos/id/788/200/300.jpg?hmac=86XnLHCHcI7HWgr9Y662VsXxUxs7H70DjGHc_6iaIw4";
img.alt = "Picture of a sunset over the ocean";
img.width = "400"
img.height = "400"

//Add textContent to the newly created h2 element
h2.textContent = "I made this using JS";
//Add the h2 tag to the body element
body.appendChild(h2);

//add the ul to the html body
body.appendChild(unorderedList);
unorderedList.appendChild(listItem1);
unorderedList.appendChild(listItem2);
unorderedList.appendChild(listItem3);

//Change the textContent of all new list items
listItem1.textContent = "First item";
listItem2.textContent = "Second item";
listItem3.textContent = "Third item";

