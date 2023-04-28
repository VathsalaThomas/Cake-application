import React, { useState } from "react";
import './AddImage.css'
import CakeDetails from "../CakeDetails/CakeDetails";
function AddImageForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch("/api/images", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Image uploaded successfully!");
      } else {
        console.error("Failed to upload image.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (event) => {
    const file=event.target.files[0];
    setSelectedFile(file);
    setImageUrl(URL.createObjectURL(file));
  };

  return (
    <div className="app-body">
      
    <div className="body-right">
    <form onSubmit={handleSubmit}>
    <div className="display-image">
      {imageUrl && <img src={imageUrl} alt="Selected image" />}
      </div>
      <label className="upload-image">
        Select image to upload:
        <input type="file" onChange={handleFileChange} />
      </label>
     <br />
      <button className="image-submit" type="submit">Upload Image</button>
    </form>
    </div>
    <CakeDetails/>
    </div>
  );
}

export default AddImageForm;
