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

// @mui material components

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";
import { Link } from "@mui/material";
import axios from "axios";
// Images

export default function data() {
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
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "ID", accessor: "ID", width: "30%", align: "left" },
      { Header: "UserName", accessor: "UserName", align: "left" },
      { Header: "Date", accessor: "Date", align: "center" },
      { Header: "Description", accessor: "Description", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        ID: <Project image="" name="Asana" />,
        UserName: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $2,500
          </MDTypography>
        ),
        Date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            working
          </MDTypography>
        ),
        Description: <Progress color="info" value={60} />,
        action: (
          <>
            <p class="">
              <button
                type="button"
                onClick={(e) => handleDelete(id)}
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
          </>
        ),
      },
    ],
  };
}
