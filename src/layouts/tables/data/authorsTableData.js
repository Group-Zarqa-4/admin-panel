/* eslint-disable */

/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import * as React from "react";
import { Link } from "@mui/material";
import { Box } from "@mui/material";
// import { useCallback } from "react";

// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function data() {
  // const
  function handleSubmit() {}

  function handleDelete(id) {
    axios
      .delete(`http://localhost:8000/api/deleteuser/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Username", accessor: "Username", width: "45%", align: "left" },
      { Header: "Password", accessor: "Password", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "Role", accessor: "Role", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        Username: <Author image="" name="Miriam Eric" email="miriam@creative-tim.com" />,
        Password: <Job title="Programator" description="Developer" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        Role: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MDTypography>
        ),
        action: (
          <>
            <div class="d-flex flex-row-reverse mt-3">
              <p class="">
                <button
                  onClick={(e) => handleDelete(id)}
                  type="button"
                  class="btn btn-danger text-white text-decoration-nsone m-1"
                >
                  Delete
                </button>
                <Link
                  type="button"
                  class="btn btn-info text-white text-decoration-nsone m-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Edit
                </Link>
              </p>

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <div class="modal-dialog">
                    <div class="modal-content p-5">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          Publish new Tour
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <form onSubmit={handleSubmit}>
                          <label for="select" class="form-label">
                            Select Desitination
                          </label>

                          <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">
                              Date
                            </label>
                            <input
                              type="date"
                              name="tour_date"
                              class="form-control"
                              id="exampleInputPassword1"
                            />
                          </div>

                          <div class="mb-3">
                            <label for="Price" class="form-label">
                              Price(JOD)
                            </label>
                            <input
                              onChange={(e) => {
                                setPrice(e.target.value);
                              }}
                              type="number"
                              name="tour_price"
                              class="form-control"
                              id="Price"
                            />
                          </div>
                          <div class="mb-3">
                            <label for="route" class="form-label">
                              Tour Route(Map Link)
                            </label>
                            <input
                              onChange={(e) => {
                                setRoute(e.target.value);
                              }}
                              type="text"
                              name="tour_route"
                              class="form-control"
                              id="route"
                            />
                          </div>

                          <div class="mb-3">
                            <label for="heroimg" class="form-label">
                              Contact Number
                            </label>
                            <input
                              onChange={(e) => {
                                setNumber(e.target.value);
                              }}
                              name="advisor_contact_number"
                              type="number"
                              class="form-control"
                              id="heroimg"
                            />
                          </div>

                          <div class="mb-3">
                            <label for="heroimg" class="form-label">
                              Hero image
                            </label>
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary publishTourBtn"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="submit" class="btn btn-primary publishTourBtn">
                          Publish Tour
                        </button>
                      </div>
                    </div>
                  </div>
                </Box>
              </div>
            </div>
          </>
        ),
      },
    ],
  };
}
