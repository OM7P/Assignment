import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from 'react-toastify';

function UserFormPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log("form data:::", formData)
    e.preventDefault();
    try {
      if (formData.firstName && formData.lastName && formData.dob) {

        await axios.post("http://localhost:5000/api/user", formData);
        toast.success("User Add successfully!");
        navigate("/display-page");
      } else {

        toast.error("Please fill the user details")
      }
    } catch (error) {
      console.log("Error saving user", error);
    }
  };








  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100dvh" }}>
      <div style={{ width: "450px", height: "500px", padding: "20px", borderRadius: "10px", backgroundColor: "", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }} className="bg-gradient-to-b from-purple-100 via-white to-purple-50 shadow-md border border-slate-200">
        <h3 style={{ fontSize: "30px", color: "#4D55CC", textAlign: "center", fontWeight: "600" }}>User Form</h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "45px", marginTop: "20px" }}>
          {/* First Name */}
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            sx={{
              "& .MuiInputLabel-root": {
                color: "#4D55CC",
              },
              "& .MuiInputBase-input": {
                color: "black",   // 👈 input value color
              },

            }}
          />

          {/* Last Name */}
          < TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            sx={{
              "& .MuiInputLabel-root": {
                color: "#4D55CC",
              },
              "& .MuiInputBase-input": {
                color: "black",
              },

            }}
          />

          {/* Date of Birth */}
          <TextField
            label="Date of Birth"
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
             sx={{
              "& .MuiInputLabel-root": {
                color: "#4D55CC",
              },
              "& .MuiInputBase-input": {
                color: "black",   // 👈 input value color
              },

            }}
          />

          {/* Submit */}
          <Button onClick={handleSubmit} variant="contained" style={{ backgroundColor: "#7965C1", width: "100%", height: "50px", textAlign: "", fontWeight: 500 }}>
            Submit
          </Button>
        </div>
      </div>
      <ToastContainer />

    </div>
  );
}

export default UserFormPage;
