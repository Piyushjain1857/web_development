import React,{useState} from 'react'

const MultiForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
 
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange}
      />

      <h3>{JSON.stringify(formData)}</h3>
    </>
  );
}

export default MultiForm