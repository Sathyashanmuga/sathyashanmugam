import React, { useEffect, useState } from "react";

const InfoForm = (props) => {
  const [id, setid] = useState("");
  const [Name, setName] = useState("");
  const [Course, setCourse] = useState("");
  const [Email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [Fees, setFees] = useState("");
  const [isEdit, setEdit] = useState(false);

  const infoSubmit = (event) => {
    if (!isEdit) {
      const data = {
        isEdit: isEdit,
        Name: Name,
        Course: Course,
        Email: Email,
        Contact: Contact,
        Fees: Fees,
        
      };
      props.mydata(data);
    } else {
      const data = {
        isEdit: isEdit,
        _id: id,
        Name: Name,
        Course: Course,
        Email: Email,
        Contact: Contact,
        Fees: Fees,
        
      };
      props.mydata(data);
    }
  };

  useEffect(() => {
    if (props.setForm._id != null) {
      setid(props.setForm._id);
      setName(props.setForm.Name);
      setCourse(props.setForm.Course);
      setEmail(props.setForm.Email);
      setContact(props.setForm.Contact);
      setFees(props.setForm.Fees);
      setEdit(true);
    }
  }, [props]);
  return (
    <form onSubmit={infoSubmit} autoComplete="off">
      <div className="form-group-dark">
        <label>Name:</label>
        <input
          type="text"
          class="form-control"
          onChange={(e) => setName(e.target.value)}
          name="Name"
          value={Name}
        />
      </div>
      <div className="form-group">
        <label>Course:</label>
        <input
          type="text"
          class="form-control"
          onChange={(e) => setCourse(e.target.value)}
          name="Course"
          value={Course}
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="text"
          class="form-control"
          onChange={(e) => setEmail(e.target.value)}
          name="Email"
          value={Email}
        />
      </div>
      <div className="form-group">
        <label>Contact:</label>
        <input
          type="Number"
          class="form-control"
          onChange={(e) => setContact(e.target.value)}
          name="Contact"
          value={Contact}
        />
      </div>
      <div className="form-group">
        <label>Fees:</label>
        <input
          type="Number"
          class="form-control"
          onChange={(e) => setFees(e.target.value)}
          name="Fees"
          value={Fees}
        />
      </div>
      <br></br>
      <button type="submit" class="btn btn-success">
        {isEdit ? "Update" : "Create"}
      </button>
    </form>
  );
};
export default InfoForm;
