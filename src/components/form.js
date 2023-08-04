import React, { useState } from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import whiteRegBtn from "../asset/registerBtn.png";
import "./form.css";
const Form = () => {
  // Used to set the state of the original image, when the users uploaded their file, the state will be changed to their image
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    setSelectedFile(file);
  };
  const fileInputRef = React.createRef();
  return (
    <div>
      <NavBar />
      <main className="form-section">
        <div className="form-container">
          <div className="form-header">
            <div className="top">
              <h2>Registrasi</h2>
              <p>Lomba</p>
            </div>
            <div className="mid">
              <h1>Cosplay Competition</h1>
            </div>
            <div className="bottom">
              <p>
                Silakan masukkan data diri anda <br />
                untuk melakukan pendaftaran
              </p>
            </div>
          </div>
          <form className="forms">
            <div className="reg-container">
              <div className="input-container">
                <select
                  name="tingkat"
                  className="input-selector"
                  id="select-tingkat"
                >
                  <option value="">Tingkat</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <div className="line" />
              </div>
              <div className="input-container">
                <select
                  name="kategori"
                  className="input-selector"
                  id="select-kategori"
                >
                  <option value="">Kategori</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <div className="line" />
              </div>
              <div className="input-container">
                <select
                  name="provinsi"
                  className="input-selector"
                  id="select-provinsi"
                >
                  <option value="">Provinsi</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <div className="line" />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  className="name input-text"
                  placeholder="NAMA"
                />
                <div className="line" />
              </div>
              <div className="input-container">
                <input
                  type="number"
                  className="phone-number input-text"
                  placeholder="No Handphone / WA"
                />
                <div className="line" />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  className="from input-text"
                  placeholder="Asal Instansi"
                />
                <div className="line" />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  className="id input-text"
                  placeholder="No Kartu Identitas (NIM / NIK / NIS)"
                />
                <div className="line" />
              </div>
              <div className="input-container image-image">
                <div className="image-container">
                  <p className="image-p">Gambar kartu identitas</p>
                  <div className="line" />
                </div>
                <input
                  type="file"
                  accept="image/*" // Only allow image files to be selected
                  onChange={handleFileChange}
                />
                {selectedFile && <p>Selected File: {selectedFile.name}</p>}
              </div>
            </div>
            <div className="button-container">
              <img src={whiteRegBtn} alt="" />
              <button className="send-form">Daftar Sekarang</button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Form;
