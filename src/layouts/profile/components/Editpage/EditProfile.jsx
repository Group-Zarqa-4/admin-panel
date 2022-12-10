/* eslint-disable */

import { Box } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";

function EditProfile(props) {
  const [userName, setUserName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [role, setRole] = React.useState("");
  function handleEdit(event, id) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    data.append("name", userName);
    data.append("email", userEmail);
    data.append("role", role);
    axios
      .put(`http://localhost:8000/api/edituser/${props.id}`, data)
      .then((res) => {
        setTimeout(() => {
          window.location.reload(false);
        }, 100);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
    return (
        <DashboardLayout>
        <DashboardNavbar />
    <div className="container w-50">
      <Box  component="form" noValidate onSubmit={(e) => handleEdit(e, user.id)} sx={{ mt: 3 }}>
        <div className="">
          <h1 className="" id="">
            Edit User info
          </h1>
        </div>
        <div className="">
          {/* <form onSubmit={handleSubmit}> */}
          <div className="mb-3">
            <label for="username" className="form-label">
              User Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="username"
              // value={user.name}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>

          <div className="mb-3">
            <label for="email" className="form-label">
              Email
            </label>
            <input
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
              type="email"
              name="email"
              className="form-control"
              id="email"
              // value={user.email}
            />
          </div>
          <div className="mb-3">
            <label for="role" className="form-label">
              Role
            </label>
            <input
              onChange={(e) => {
                setRole(e.target.value);
              }}
              type="text"
              name="role"
              className="form-control"
              id="role"
              // value={user.role}
            />
          </div>
          {/* </form> */}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary publishTourBtn">
            Close
          </button>
          <button type="submit" className="btn btn-primary publishTourBtn">
            Submit
          </button>
        </div>
      </Box>
            </div>
            </DashboardLayout>
  );
}

export default EditProfile;
