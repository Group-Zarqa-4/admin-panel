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
import * as React from "react";
import { useEffect } from "react";
import { Box } from "@mui/material";

// Images

export default function data() {
  const [posts, setPost] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/posts")
      .then((res) => {
        // console.log(res.data);
        setPost(res.data);
        console.log(res.data.posts);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(posts);
  function handleDelete(id) {
    if (confirm("Are you sure you want to delete")) {
      axios
        .delete(`http://localhost:8000/api/deletePost/${id}`)
        .then((res) => {
          setTimeout(() => {
            window.location.reload(false);
          }, 100);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return {
    columns: [
      { Header: "Name", accessor: "ID", width: "45%", align: "left" },
      { Header: "Post", accessor: "storyid", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: posts?.map((x,array) => {
      return {
        ID: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {x.post.user.name}
          </MDTypography>
        ),
        userid: <MDBox ml={-1}>{x.post.user.avatar}</MDBox>,
        storyid: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {x.post.user.email}
          </MDTypography>
        ),
        action: (
          <>
            <div className="d-flex flex-row-reverse mt-3">
              <p className="">
                <button
                  onClick={(e) => handleDelete(x.post.id)}
                  type="button"
                  className="btn btn-danger text-white text-decoration-nsone m-1"
                >
                  Delete
                </button>
                <Link
                  type="button"
                  className="btn btn-warning text-white text-decoration-nsone m-1"
                  data-bs-toggle="modal"
                  data-bs-target={`#exampleModal${x.id}`}
                >
                  View Post
                </Link>
              </p>

              <div
                className="modal fade"
                id={`exampleModal${x.id}`}
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <Box
                  component="form"
                  noValidate
                  onSubmit={(e) => handleSubmit(e, x.id)}
                  sx={{ mt: 3 }}
                >
                  <div className="modal-dialog">
                    <div className="modal-content p-5">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                           description
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="mb-3">{x.post.content}</div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary publishTourBtn"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </Box>
              </div>
            </div>
          </>
        ),
      };
    }),
  };
}
