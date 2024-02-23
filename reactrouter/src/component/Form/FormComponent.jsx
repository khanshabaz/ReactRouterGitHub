import React, { useState } from "react";

function FormComponent() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };
  const validateField = (fieldName, value) => {
    let fieldError = "";
    switch (fieldName) {
      case "username":
        fieldError = value.trim() === "" ? "UserName is required" : "";
        break;
      case "password":
        fieldError = value.trim() === "" ? "Password is required" : "";
        break;
      default:
        break;
    }
    setErrors({
      ...errors,
      [fieldName]: fieldError,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault()

    validateField("username", formData.username);
    validateField("password", formData.password);

    if (!Object.values(errors).some((error) => error !== "")) {
      console.log("Form Submitted", formData);
    } else {
      console.log("Form has errors pleas fix them!!");
    }
    setFormData({
      username:"",
      password:""
    })
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-orange-100">
    <form onSubmit={handleSubmit} className="w-full sm:max-w-md ">
        <div className="mb-4 pd-10 pt-10">
          <h1 className="text-center text-3xl pb-8">Login</h1>
          <div className="flex flex-col">
            <label htmlFor="username" className="block text-black text-sm font-semibold mb-2">Username:</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:border-orange-500 focus:outline-none "
              id="username"
              name="username"
              placeholder="username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <label htmlFor="password" className="block text-black text-sm font-semibold mb-2 pt-5">Password:</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md focus:border-orange-500 focus:outline-none "
              id="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="w-full bg-orange-700 hover:bg-orange-600 text-white py-2 mt-5  rounded-md  focus:outline-none focus:bg-blue-600"
>Submit</button>
        <div className="flex justify-between mt-3">
          <div>
          <input type="checkbox" className="mr-1"/><span>REMEMBER ME</span>
          </div>
          <p className="underline cursor-pointer">Forgot Password?</p>
        </div>
        </div>
    </form>
    </div>
  );
}

export default FormComponent;
