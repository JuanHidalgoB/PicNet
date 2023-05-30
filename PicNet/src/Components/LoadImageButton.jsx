import React, { useState, useRef } from 'react';
import '../Styles/LoadImageButton.css'

const LoadImageButton = () => {
    const [previewImage, setPreviewImage] = useState(null);
    const fileInputRef = useRef(null);
  
    const handleButtonClick = () => {
      fileInputRef.current.click();
    };
  
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
    return (
      <div>
        <div className='flex-column'>
        {previewImage && <img className='max-w-[200px] max-h-[200px]' src={previewImage} alt="Preview" />}
        <button className='my-3 rounded-full bg-rosa-100 px-4 py-2 text-white font-semi-bold' onClick={handleButtonClick}>Seleccionar imagen</button>
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
        
        </div>
      </div>
    );
  };
  
  export default LoadImageButton;