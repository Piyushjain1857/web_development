// function handleClick(){
//     document.querySelector("#head").style.color="red";

//     document.getElementById("btn").textContent="color changed"
// }

// Q2.
// const handleClick = () => {
//     const image = document.createElement("img");
//     image.setAttribute("src", "https://krmangalam.edu.in/_next/image?url=%2Flife-at-krmu%2Finfra.webp&w=3840&q=75")

//     image.setAttribute("alt", "kr mangalam");

//     document.getElementById("content").append(image);
// }





 document.getElementById("btn").addEventListener("click",()=>{
    const image = document.createElement("img");
    image.setAttribute("src", "https://krmangalam.edu.in/_next/image?url=%2Flife-at-krmu%2Finfra.webp&w=3840&q=75")

    image.setAttribute("alt", "kr mangalam");

    document.getElementById("content").append(image);
})