import { useLocation } from "react-router-dom";
import "./greet.css"

function Greet(){
  const location = useLocation();
  const { state } = location;
  const { formData } = state || {};
  return (
    <div className="greet">
      <h1>Form Submitted Successfully</h1>
      {formData && (
        <div>
          <p>First Name: {formData.fname}</p>
          <p>Last Name: {formData.lname}</p>
          <p>Username: {formData.uname}</p>
          <p>Email: {formData.email}</p>
          <p>Phone No.: {formData.country_code}-{formData.phno}</p>
          <p>Country: {formData.country}</p>
          <p>City: {formData.city}</p>
          <p>PAN No.: {formData.pan}</p>
          <p>Aadhar No.: {formData.adhar}</p>
        </div>
      )}
    </div>
  );
};

export default Greet;
