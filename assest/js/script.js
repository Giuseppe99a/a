
function myFunction() {
    document.getElementById("Los Angeles").innerHTML = "https://api.teleport.org/api/cities/?search=los%20angeles";
}

fetch('https://api.teleport.org/api/cities/LosAngeles/')
.then(data => {
return data.json();
})
.then(post => {
console.log(post.title);
});

