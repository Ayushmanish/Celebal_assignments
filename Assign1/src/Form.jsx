import { useNavigate } from "react-router-dom"
import { useState } from "react";

function Form(){
  let emailValidator=/^[^\s@]+@[^\s@.]+\.[^\s@.]+$/
  let passwordValidator=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate()

   function validate(formData){
    const errors = {};
    if (!formData.fname) errors.fname = "*First Name is required";
    if (!formData.lname) errors.lname = "*Last Name is required";
    if (!formData.uname) errors.uname = "*Username is required";
    if (!formData.email) {
      errors.email = "*Email is required";
    } else if (!emailValidator.test(formData.email)) {
      errors.email = "*Enter a valid email address like: john@gmail.com";
    }
    if (!formData.pword){
      errors.pword = "*Password is required";
    } else if(!passwordValidator.test(formData.pword)){
      errors.pword = "*Your Password should contain: minimum 8 characters, atleast one uppercase letter, one lowecase letter, one number and one special character"
    }
    if (!formData.phno) errors.phno = "*Phone Number is required";
    if (formData.country==="select country") errors.country = "*Country is required";
    if (formData.city==='select city') errors.city = "*City is required";
    if (!formData.pan) errors.pan = "*PAN No. is required";
    if (!formData.adhar) errors.adhar = "*Aadhar No. is required";
    return errors;
  };

  function handleClick(event){
    event.preventDefault()
    let formData={}
    let elements=event.target.elements
    for(let i=0;i<elements.length;i++){
      let element=elements[i]
      if(element.type!=='submit')
        {
        formData[element.name]=element.value
      }
    }

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
        navigate("/greet", { state: { formData } });
      }
  }
  return(
    <>
    <center><h1>Fill The Registration Form</h1></center>
    <form onSubmit={handleClick}>

    <div className="field">
    <span>First Name</span>
    <input type="text" name="fname" placeholder="enter first name"/>
    {errors.fname && <span className="error">{errors.fname}</span>}
    </div>

    <div className="field">
    <span>Last Name</span>
    <input type="text" name="lname" placeholder="enter last name"/>
    {errors.lname && <span className="error">{errors.lname}</span>}
    </div>

    <div className="field">
    <span>Username</span>
    <input type="text" name="uname" placeholder="enter username"/>
    {errors.uname && <span className="error">{errors.uname}</span>}
    </div>

    <div className="field">
    <span>Email</span>
    <input type="email" name="email" placeholder="enter email"/>
    {errors.email && <span className="error">{errors.email}</span>}
    </div>

    <div className="field">
    <span>Password</span>
    <input type={showPassword ? "text" : "password"} name="pword" placeholder="enter password"/>
    <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Hide' : 'Show'}
    </button>
    {errors.pword && <span className="error">{errors.pword}</span>}
    </div>

    <div className="field">
    <span>Phone number</span>
    <select name="country_code">
      <option>+91</option>
      <option>+62</option>
      <option>+98</option>
    </select>
    <input type="number" name="phno" placeholder="enter phone number"/>
    {errors.phno && <span className="error">{errors.phno}</span>}
    </div>

    <div className="field">
    <span>Select Country</span>
    <select name="country">
        <option>select country</option>
        <option>India</option>
        <option>Nepal</option>
        <option>Bhutan</option>
        <option>Sri Lanka</option>
      </select>
      {errors.country && <span className="error">{errors.country}</span>}
    </div>

    <div className="field">
    <span>Select City</span>
    <select name="city">
        <option>select city</option>
        <option>Bhubaneswar</option>
        <option>Kota</option>
        <option>Bilaspur</option>
        <option>Raipur</option>
      </select>
      {errors.city && <span className="error">{errors.city}</span>}
    </div>

    <div className="field">
    <span>Pan No.</span>
    <input type="text" name="pan"/>
    {errors.pan && <span className="error">{errors.pan}</span>}
    </div>

    <div className="field">
    <span>Adhar No.</span>
    <input type="number" name="adhar"/>
    {errors.adhar && <span className="error">{errors.adhar}</span>}
    </div>

    <div className="field">
    <button type="submit" >Submit</button>
    </div>
    </form>
    </>
  )
}
export default Form