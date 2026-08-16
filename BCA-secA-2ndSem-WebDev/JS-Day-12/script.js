const Form=document.getElementById("myForm");
const nameInput = document.getElementById("myInput");
const courseInput=document.getElementById("course");
const output=document.getElementById("output");

// courseInput.addEventListener("change",()=>{
//     console.log(courseInput.value);
//     output.textContent=courseInput.value
// })

Form.addEventListener("submit",(event)=>{
    // to prevent the autorefresh
    event.preventDefault();

    const name=nameInput.value;
    const course=courseInput.value;
    console.log(name,course);

    output.textContent=name+" "+course;
})


