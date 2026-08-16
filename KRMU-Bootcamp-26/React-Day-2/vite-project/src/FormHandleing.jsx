import React,{useState} from 'react'

const FormHandleing = () => {
   const [name, setName] = useState("");

   const handleChange=(e)=>{
    console.log(e)
    let value=e.target.value
    let name =e.target.name
    setName(value)
   }

  return (
    <div>
      <input type="text" placeholder="Enter name"
       onChange={handleChange}
      />
      <h2>Hello, {name}</h2>
    </div>
  );
}

export default FormHandleing