const heading = document.getElementById("myHeading");
console.log(heading);

heading.style.color= "tomato";
heading.style.backgroundColor= "yellow";
console.log(heading.textContent );
heading.textContent ="Hello India!";


const subHeading = document.getElementsByClassName("sub-heading");
console.log(subHeading);

for(let i=0;i<subHeading.length;i++){
    subHeading[1].style.color="blue";
}


const h2heading=document.getElementsByTagName("h2");
console.log(h2heading);

for(i=0;i<h2heading.length;i++){
    h2heading[i].style.backgroundColor="cyan"
}


