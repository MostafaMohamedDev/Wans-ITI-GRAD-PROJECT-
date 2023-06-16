import React, { useState } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setSession , getSession , removeSession ,  getCurrentTime } from "../../helper";

const ShelterProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("Asmaa");
  const [email, setEmail] = useState("Asmaa@gmail.com");
  const [profileImage, setProfileImage] = useState("./Images/profile .jpg");
  const [profileImage2, setProfileImage2] = useState("./Images/profile .jpg");
  const [showForm, setShowForm] = useState(false);
  const [ShelterImage, setShelterImage] = useState("./Images/bloggg.jpg");
  const [PetName, setPetName] = useState("");
  const [ShelterName, setShelterName] = useState("");
  const [people, setPeople] = useState("");
  const [description, setDescription] = useState("");
  const [ShelterAddress, setShelterAddress] = useState("");
  const [ShelterPhone, setShelterPhone] = useState("");
  const [auth, setAuth] = useState({});

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleClose = () => {
    setEditMode(false);
  };

  const handleSave = () => {
    // Perform validation and save changes
    setEditMode(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (editMode) {
        setProfileImage(reader.result);
      } else {
        setShelterImage(reader.result);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleAddShelter = () => {
    setShowForm(true);
  };

  const handleSaveShelter = () => {
    // Perform validation and save shelter data
    setShowForm(false);
  };

  /*******************/
  const redirect = useNavigate();
  const routeLogin = () => {
      redirect("/login");
  }
   useEffect(()=>{
    if (! getSession('login')){
      routeLogin(); 
    }else {
      setAuth(getSession('auth')); 
      console.log(auth);



    }
   },[]); 
  /*******************/
 
  return (
    <div>
      <div className="prof">
        <div className="info">
          <img
            src={(auth.image)?"http://ah.khaledfathi.com/"+auth.image:profileImage}
            className="profileImage"
            alt="Profile"
            style={{
              position: "absolute",
              borderRadius: "50%",
              width: "180px",
              height: "180px",
              top: "-100px",
              left: "50%",
              transform: "translateX(-50%)",
              border: "2px",
            }}
          />
          <h3
            style={{
              marginTop: "100px",
              marginBottom: "10px",
              textAlign: "center",
              fontSize: "30px",
            }}
          >
            {auth.name}
          </h3>
          <h4
            style={{
              textAlign: " center",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            {auth.email}
          </h4>
          <button
            className="Middle-Button"
            style={{
              fontSize: "15px",
              marginLeft: "50%",
              transform: "translateX(-50%)",
              marginBottom: "20px",
              padding: "8px 23px",
              border: "none",
              color: "white",
              cursor: "pointer",
              borderRadius: "8px",
            }}
            onClick={handleEdit}
          >
            Edit profile
          </button>
        </div>

        {editMode && (
          <div
            className="edit"
            style={{
              backgroundColor: "#ffff",
              position: "absolute",
              width: "25%",
              height: "540px",
              border: "1px solid transparent",
              marginLeft: "65%",
              marginTop: "6%",
              borderRadius: "40px 40px 20px 20px",
              zIndex: "150",
            }}
          >
            <img className="editImage" src={profileImage2} alt="Edit Profile" />
            <label className="file-label">
              <input
                type="file"
                className="file-input "
                accept="image/*"
                onChange={handleImageChange}
              />
              <span className="file-custom">
                <i className="fas fa-upload"></i> Choose File
              </span>
            </label>

            <h5 className="editNM"> Name</h5>
            <input
              className="editName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <h5 className="editNM">Email</h5>
            <input
              className="editEmail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="save" onClick={handleSave}>
              Save
            </button>
          </div>
        )}

        {/* ////////////////////////////////////////////////////////////////////////// */}
      </div>
      <div className="addShelter">
        <button id="add" onClick={handleAddShelter}>
          Add Shelter
        </button>
      </div>

      {showForm && (
        <div className="form" id="form">
          <img className="editImage" src={ShelterImage} alt="shelter" />
          <label className="file-label">
            <input
              type="file"
              className="file-input"
              accept="image/*"
              onChange={handleImageChange}
            />
            <span className="file-custom">
              <i className="fas fa-upload"></i> Choose File
            </span>
          </label>
          <div className="form-row">
            <div className="form-group">
              <h5 className="editNM">Pet name</h5>
              <input
                type="text"
                className="editName"
                value={PetName}
                onChange={(e) => setPetName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <h5 className="editNM">Shelter Name</h5>
              <input
                type="text"
                className="editName"
                value={ShelterName}
                onChange={(e) => setShelterName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <h5 className="editNM">Address</h5>
              <input
                type="text"
                className="editName"
                value={ShelterAddress}
                onChange={(e) => setShelterAddress(e.target.value)}
              />
            </div>
            <div className="form-group">
              <h5 className="editNM">Phone</h5>
              <input
                type="text"
                className="editName"
                value={ShelterPhone}
                onChange={(e) => setShelterPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <h5 className="editNM">Description</h5>
            <textarea 
              className="textarea "
              value={description }
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button className="save" onClick={handleSaveShelter}>
            Save
          </button>
        </div>
      )}
      
    </div>
  );
};

export default ShelterProfile;
