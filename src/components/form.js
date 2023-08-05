import React, { useState } from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import whiteRegBtn from "../asset/registerBtn.png";
import "./form.css";
const Form = () => {
  const [formData, setFormData] = useState({
    tingkat: "",
    kategori: "",
    provinsi: "",
    name: "",
    phoneNumber: "",
    from: "",
    id: "",
    idImage: null,
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!formData.tingkat.trim()) {
      errors.tingkat = "Mohon pilih salah satu!";
    }
    if (!formData.kategori.trim()) {
      errors.kategori = "Mohon pilih salah satu!";
    }
    if (!formData.provinsi.trim()) {
      errors.provinsi = "Mohon pilih salah satu!";
    }
    if (!formData.name.trim()) {
      errors.name = "Lengkapi data Nama";
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Lengkapi nomor telepon";
    }
    if (!formData.from.trim()) {
      errors.from = "Lengkapi data asal";
    }
    if (!formData.id.trim()) {
      errors.id = "Mohon isi No Kartu Identitas anda";
    }
    if (!formData.id.trim()) {
      errors.idImage = "Mohon upload foto identitas anda";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log("Form validated");
    } else {
      console.log("Form failed to validate");
    }
  };
  // Used to set the state of the original image, when the users uploaded their file, the state will be changed to their image
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    setFormData({ ...formData, id: file });
  };

  return (
    <div>
      <NavBar />
      <main className="form-section">
        <div className="form-container">
          <div className="form-header">
            <div className="top">
              <h2>Registrasi</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 11.7105L11.0323 5L18 13.6842L11.0323 20L6 11.7105Z"
                  fill="#DD614B"
                  stroke="white"
                  stroke-opacity="0.24"
                />
              </svg>
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
          <form className="forms" onSubmit={handleFormSubmit}>
            <div className="reg-container">
              <div className="input-container">
                <select
                  name="tingkat"
                  value={formData.tingkat}
                  className="input-selector"
                  id="select-tingkat"
                  onChange={handleInputChange}
                >
                  <option value="">Tingkat</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <div className="line" />
                {formErrors.tingkat && (
                  <span className="error-message">{formErrors.tingkat}</span>
                )}
              </div>
              <div className="input-container">
                <select
                  name="kategori"
                  value={formData.kategori}
                  className="input-selector"
                  id="select-kategori"
                  onChange={handleInputChange}
                >
                  <option value="">Kategori</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <div className="line" />
                {formErrors.kategori && (
                  <span className="error-message">{formErrors.kategori}</span>
                )}
              </div>
              <div className="input-container">
                <select
                  name="provinsi"
                  value={formData.provinsi}
                  className="input-selector"
                  id="select-provinsi"
                  onChange={handleInputChange}
                >
                  <option value="">Provinsi</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <div className="line" />
                {formErrors.provinsi && (
                  <span className="error-message">{formErrors.provinsi}</span>
                )}
              </div>
              <div className="input-container">
                <input
                  type="text"
                  value={formData.name}
                  className="name input-text"
                  placeholder="NAMA"
                  onChange={handleInputChange}
                />
                <div className="line" />
                {formErrors.name && (
                  <span className="error-message">{formErrors.name}</span>
                )}
              </div>
              <div className="input-container">
                <input
                  type="number"
                  value={formData.phoneNumber}
                  className="phone-number input-text"
                  placeholder="No Handphone / WA"
                  onChange={handleInputChange}
                />
                <div className="line" />
                {formErrors.phoneNumber && (
                  <span className="error-message">
                    {formErrors.phoneNumber}
                  </span>
                )}
              </div>
              <div className="input-container">
                <input
                  type="text"
                  value={formData.from}
                  className="from input-text"
                  placeholder="Asal Instansi"
                  onChange={handleInputChange}
                />
                <div className="line" />
                {formErrors.from && (
                  <span className="error-message">{formErrors.from}</span>
                )}
              </div>
              <div className="input-container">
                <input
                  type="text"
                  value={formData.id}
                  className="id input-text"
                  placeholder="No Kartu Identitas (NIM / NIK / NIS)"
                  onChange={handleInputChange}
                />
                <div className="line" />
                {formErrors.id && (
                  <span className="error-message">{formErrors.id}</span>
                )}
              </div>
              <div className="input-container image-image">
                <div className="image-container">
                  <p className="image-p">Gambar kartu identitas</p>
                  <div className="line" />
                  {formErrors.idImage && (
                    <span className="error-message">{formErrors.idImage}</span>
                  )}
                </div>
                <input
                  type="file"
                  name="idImage"
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
