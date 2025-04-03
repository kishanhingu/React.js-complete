// import { useState } from "react";
import { useEffect, useState } from "react";
import { getLocalStorageData } from "../storage/getLocalStorageData";

export const FormTable = ({ storageData, setFormData, setEditData }) => {
  const [storagedataUpdate, setStorageDataUpdate] = useState([]);
  useEffect(() => {
    setStorageDataUpdate(getLocalStorageData());
  }, [storageData]);

  //   edit button click
  const handleEditButton = (num) => {
    setEditData(num);
    setFormData({
      FirstName: storagedataUpdate[num].FirstName,
      LastName: storagedataUpdate[num].LastName,
      email: storagedataUpdate[num].email,
      mobileNo: storagedataUpdate[num].mobileNo,
      gender: storagedataUpdate[num].gender,
      subject: storagedataUpdate[num].subject,
      resume: "",
      url: storagedataUpdate[num].url,
      about: storagedataUpdate[num].about,
    });
  };

  //   delete button onClick
  const handleDeleteButton = (num) => {
    const updateData = storagedataUpdate.filter((_, index) => index !== num);

    setStorageDataUpdate(updateData);
    localStorage.setItem("formData", JSON.stringify(updateData));
  };

  return (
    <section className="formTable-setion">
      <div className="container-fluid">
        <h1 className="fw-bold text-center">Form Details</h1>

        <div className="table-responsive">
          <table className="table text-center">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Subject</th>
                <th>Contact</th>
                <th>Functionality</th>
              </tr>
            </thead>
            <tbody>
              {storagedataUpdate &&
                storagedataUpdate.map((curData, index) => {
                  return (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{`${curData.FirstName} ${curData.LastName}`}</td>
                      <td>{curData.email}</td>
                      <td>{curData.gender}</td>
                      <td>{curData.subject}</td>
                      <td>{curData.mobileNo}</td>
                      <td className="d-flex justify-content-center align-items-center gap-3">
                        <button
                          className="btn btn-success"
                          onClick={() => handleEditButton(index)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDeleteButton(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
