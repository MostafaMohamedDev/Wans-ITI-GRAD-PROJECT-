import React, { useState } from "react";
import "./Profile.css";

const ShelterProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("Asmaa");
  const [email, setEmail] = useState("Asmaa@gmail.com");
  const [profileImage, setProfileImage] = useState("./Images/1.jpg");
  const [showForm, setShowForm] = useState(false);
  const [ShelterImage, setShelterImage] = useState("./Images/1.jpg");
  const [PetName, setPetName] = useState("");
  const [ShelterName, setShelterName] = useState("");
  const [people, setPeople] = useState("");
  const [description, setDescription] = useState("");
  const [ShelterAddress, setShelterAddress] = useState("");
  const [ShelterPhone, setShelterPhone] = useState("");

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

  return (
    <div >
    <div className="prof">
      <div
        className="info"
     
      >
        <img
          src={profileImage}
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
          {name}
        </h3>
        <h4
          style={{
            textAlign: " center",
            fontSize: "20px",
            marginBottom: "10px",
          }}
        >
          {email}
        </h4>
        <button
          style={{
            fontSize: "15px",
            marginLeft: "50%",
            transform: "translateX(-50%)",
            marginBottom: "20px",
            padding: "5px 20px",
            border: "none",
            backgroundColor: " rgb(6, 109, 165)",
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
            backgroundColor: "rgb(223, 223, 223)",
            position: "absolute",
            width: "30%",
            border: "1px solid black",
            marginLeft: "60%",
            borderRadius: "15px",
            marginTop: "10%",
            zIndex: "150"
          }}
        >
          <div className="top">
            <div className="close">
             
              <h4 style={{textAlign:"center"}}>Edit profile</h4>
            </div>
            
          </div>
          <img className="editImage" src={profileImage} alt="Edit Profile" />
          <input
            type="file"
            className="file"
            accept="image/*"
            onChange={handleImageChange}
          />
       
          <h5 className="editNM" > Name</h5>
          <input
            className="editName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h5 className="editNM" >Email</h5>
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
    <div className="form" id="form" 
    style={{
      backgroundColor: "rgb(223, 223, 223)",
      border: "1px solid black",
      borderRadius: "8px",

      width: "30%",
      margin: "0 auto",
      padding: "0 30px",
      position: "absolute",
      top: "320px",            
      left: "20%",
      transform: "translateX(-50%)",
      zIndex: "200",}}>
      <div className="close">
        <h4 style={{textAlign:"center"}}>Add Shelter</h4>
      </div>
      <img className="editImage" src={ShelterImage} alt="shelter" />
      <input
        type="file"
        className="file"
        style={{top:"30%"}}
        
        accept="image/*"
        onChange={handleImageChange}
      />
      <h5 style={{marginTop:"100px"}} className="editNM" >Pet name</h5>
      <input
        type="text"
        
        className="editName"
        value={PetName}
        onChange={(e) => setPetName(e.target.value)}
      />
      <h5  className="editNM" >Shelter Name</h5>
      <input
        type="text"

        className="editName"
        value={ShelterName}
        onChange={(e) => setShelterName(e.target.value)}
      />
      <h5 className="editNM">Description</h5>
      <textarea
        className="textarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

<h5  className="editNM" >Address</h5>
      <input
        type="text"

        className="editName"
        value={ShelterAddress}
        onChange={(e) => setShelterAddress(e.target.value)}
      />
       <h5  className="editNM" >Phone</h5>
      <input
        type="text"

        className="editName"
        value={ShelterPhone}
        onChange={(e) => setShelterPhone(e.target.value)}
      />

      <button className="save" onClick={handleSaveShelter}>
        Save
      </button>
    </div>
  )}
    </div>
  );
};

export default ShelterProfile;
