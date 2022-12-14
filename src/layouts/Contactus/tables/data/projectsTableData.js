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
import { useDispatch, useSelector } from "react-redux";
import { readMessage, deleteMessage } from "../../store/features/contactSlice";

// Images

export default function data() {
  const [Story, setStory] = React.useState([]);
  const messages = useSelector(state => state.contact)
  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/contact/all")
      .then((res) => {
        console.log(res.data);
        setStory(res.data.messages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return {
    columns: [
      { Header: "NAME", accessor: "ID", width: "45%", align: "left" },
      { Header: "CREATED AT", accessor: "userid", align: "center" },
      { Header: "EMAIL", accessor: "storyid", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: Story?.map((story) => {
      return {
        ID: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {story.name}
          </MDTypography>
        ),
        userid: <MDBox ml={-1}>{story.created_at}</MDBox>,
        storyid: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {story.email}
          </MDTypography>
        ),
        action: (
          <>
            <div className="d-flex flex-row-reverse mt-3">
              <p className="">
                <button
                  onClick={(e) => dispatch(deleteMessage(story.id))}
                  type="button"
                  className="btn btn-danger text-white text-decoration-nsone m-1"
                >
                  Delete
                </button>
                <Link
                  type="button"
                  className="btn btn-warning text-white text-decoration-nsone m-1"
                  data-bs-toggle="modal"
                  data-bs-target={`#exampleModal${story.id}`}
                >
                  View
                </Link>
              </p>

              <div
                className="modal fade"
                id={`exampleModal${story.id}`}
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <Box
                  component="form"
                  noValidate
                  onSubmit={(e) => handleSubmit(e, story.id)}
                  sx={{ mt: 3 }}
                >
                  <div className="modal-dialog">
                    <div className="modal-content p-5">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Inquiry Content
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="mb-3">{story.content}</div>
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
