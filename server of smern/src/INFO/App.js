import React, { useEffect, useState } from "react";
import InfoForm from "./form";
import InfoTable from "./table";
import axios from "axios";

const App = () => {
  const [data, datafunc] = useState([]);
  const [editData, editdatafunc] = useState([]);

  const createstudent = (data) => {
    if (data.isEdit === false) {
      axios
        .post("https://react-crud1.onrender.com/info/createstudent", data)
        .then((res) => {
          console.log("creation");
          getAll();
        });
    } else {
      axios.put("https://react-crud1.onrender.com/info/update", data).then((res) => {
        console.log("updation");
        getAll();
      });
    }
  };
  useEffect(() => {
    getAll();
  }, []);

  const getAll = () => {
    axios.get("https://react-crud1.onrender.com/info/get").then((res) => {
      datafunc(res.data);
    });
  };
  const update = (data) => {
    editdatafunc(data);
  };

  const del = (data) => {
    var option = window.confirm(`Are You Sure Want to Delete ${data.Name}`);

    if (option) {
      axios
        .delete(`https://react-crud1.onrender.com/info/delete/${data._id}`)
        .then((res) => {
          getAll();
        });
    }
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-3">
          <InfoForm mydata={create} setForm={editData} />
        </div>
        <div className="col-9">
          <InfoTable getData={data} setData={update} del={del} />
        </div>
      </div>
    </div>
  );
};
export default App;
