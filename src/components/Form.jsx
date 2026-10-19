import React, { useState } from "react";
import Name from "./Name";
import Email from "./Email";
import Password from "./Password";
import Gender from "./Gender";
import City from "./City";
import SubmitButton from "./SubmitButton";

const initialData = {
  name: "",
  email: "",
  password: "",
  gender: "",
  city: "",
};
const Form = () => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState(initialData);
  const handleChange = (e) => {
    const { value, name, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
   const validate=()=>{
    const newErrors={}
    if(!formData.name){
      newErrors.name="Add your name!"
    }
    if(!formData.email){
      newErrors.email="Add your email!"
    }else if(!formData.email.includes("@")){
      newErrors.email="The email address is incorrect"
    }
    if(!formData.password){
      newErrors.password="Add your password"
    }else if(formData.password.length<8){
      newErrors.password="The password must be at least 8 characters long"
    }
    if(!formData.gender){
      newErrors.gender="Choose gender"
    }
    if(!formData.city){
      newErrors.city="Choose city"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length===0
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(validate()){
      console.log(formData);
      alert('The form was successfully submitted')
      setFormData(initialData)
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 py-8">
     <form
  onSubmit={handleSubmit}
  noValidate
  className="w-full max-w-md sm:max-w-lg bg-black rounded-2xl shadow-lg shadow-[#C654C3]/50 p-6 sm:p-8 space-y-5"
>
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#C654C3]">
          FORM
        </h1>
        <Name
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <Email
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <Password
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />
        <Gender
          value={formData.gender}
          onChange={handleChange}
          error={errors.gender}
        />
        <City
          value={formData.city}
          onChange={handleChange}
          error={errors.city}
        />
        <SubmitButton />
      </form>
    </div>
  );
};

export default Form;
