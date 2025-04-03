import { useEffect, useState } from "react";
import { getLocalStorageData } from "../storage/getLocalStorageData";
import { FormTable } from "./FormTable";

export const Form = () => {
  const [existingData, setExistingData] = useState([]);
  const [storageData, setStorageData] = useState([]);
  const [editData, setEditData] = useState(null);
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    mobileNo: "",
    gender: "",
    subject: "math",
    resume: "",
    url: "",
    about: "",
  });

  // localStorage data get
  useEffect(() => {
    setExistingData(getLocalStorageData());
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (editData !== null) {
      existingData[editData] = formData;
      localStorage.setItem("formData", JSON.stringify(existingData));

      setEditData(null);

      setFormData({
        FirstName: "",
        LastName: "",
        email: "",
        mobileNo: "",
        gender: "",
        subject: "math",
        resume: "",
        url: "",
        about: "",
      });
      window.location.reload();
    } else if (editData === null) {
      existingData.push(formData);

      localStorage.setItem("formData", JSON.stringify(existingData));

      setStorageData(existingData);

      setFormData({
        FirstName: "",
        LastName: "",
        email: "",
        mobileNo: "",
        gender: "",
        subject: "",
        resume: "",
        url: "",
        about: "",
      });
    }
  };

  return (
    <>
      <section className="section-form">
        <div className="container">
          <h1 className="fw-bold">Form In React</h1>
          <form onSubmit={handleFormSubmit}>
            <div className="d-flex flex-column gap-5">
              <div className="row g-4">
                <div className="col-xl-6">
                  <div className="row">
                    <div className="col-xl-4">
                      <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="col-xl-8">
                      <input
                        autoComplete="off"
                        type="text"
                        placeholder="Enter First Name"
                        name="FirstName"
                        value={formData.FirstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="row">
                    <div className="col-xl-4">
                      <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div className="col-xl-8">
                      <input
                        autoComplete="off"
                        type="text"
                        placeholder="Enter Last Name"
                        name="LastName"
                        value={formData.LastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-xl-6">
                  <div className="row">
                    <div className="col-xl-4">
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-xl-8">
                      <input
                        autoComplete="off"
                        type="email"
                        placeholder="Enter Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="row">
                    <div className="col-xl-4">
                      <label htmlFor="mobileNo">Mobile No</label>
                    </div>
                    <div className="col-xl-8">
                      <input
                        autoComplete="off"
                        type="tel"
                        placeholder="Enter Your Mobile No"
                        name="mobileNo"
                        value={formData.mobileNo}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-xl-6">
                  <div className="row">
                    <div className="col-xl-4">
                      <label htmlFor="gender">Gender</label>
                    </div>
                    <div className="col-xl-8 d-flex justify-content-around align-items-center">
                      <span className="d-flex justify-content-around align-items-center gap-2 text-white fw-bold fs-5 span-text">
                        <input
                          autoComplete="off"
                          type="radio"
                          name="gender"
                          value="male"
                          checked={formData.gender === "male"}
                          onChange={handleInputChange}
                        />
                        Male
                      </span>
                      <span className="d-flex justify-content-around align-items-center gap-2 text-white fw-bold fs-5 span-text">
                        <input
                          autoComplete="off"
                          type="radio"
                          name="gender"
                          value="female"
                          checked={formData.gender === "female"}
                          onChange={handleInputChange}
                        />
                        Female
                      </span>
                      <span className="d-flex justify-content-around align-items-center gap-2 text-white fw-bold fs-5 span-text">
                        <input
                          autoComplete="off"
                          type="radio"
                          name="gender"
                          value="other"
                          checked={formData.gender === "other"}
                          onChange={handleInputChange}
                        />
                        Other
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="row">
                    <div className="col-xl-4">
                      <label htmlFor="subject">Subject</label>
                    </div>
                    <div className="col-xl-8">
                      <select
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                      >
                        <option value="math">Math</option>
                        <option value="science">Science</option>
                        <option value="english">English</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-xl-6">
                  <div className="row">
                    <div className="col-xl-4">
                      <label htmlFor="resume">Resume</label>
                    </div>
                    <div className="col-xl-8">
                      <input
                        autoComplete="off"
                        type="file"
                        placeholder="Select Resume"
                        name="resume"
                        value={formData.resume}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="row">
                    <div className="col-xl-4">
                      <label htmlFor="url">URL</label>
                    </div>
                    <div className="col-xl-8">
                      <input
                        autoComplete="off"
                        type="text"
                        name="url"
                        placeholder="Enter Image URL"
                        value={formData.url}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-4">
                <div className="col-xl-4">
                  <label htmlFor="about">About</label>
                </div>
                <div className="col-xl-8">
                  <textarea
                    name="about"
                    id="about"
                    cols="30"
                    rows="7"
                    placeholder="Enter description"
                    value={formData.about}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
              </div>

              <div className="row g-4">
                <div className="col-md-12">
                  <button type="submit" className="button">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      <FormTable
        storageData={storageData}
        setFormData={setFormData}
        setEditData={setEditData}
      />
    </>
  );
};
