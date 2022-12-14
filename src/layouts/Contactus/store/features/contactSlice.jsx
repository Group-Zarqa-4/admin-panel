/* eslint-disable */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const baseUrl = "http://localhost";
const fetchStores = createAsyncThunk("stores/fetchStores", async (userId, thunkAPI) => {
  const response = await axios.get(baseUrl);
  return response.data;
});

const initialState = {
  name: "",
  email: "",
  content: "",
};
const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    createMessage: (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
      state.content = payload.content;

      axios.post("/api/contact", state).then((response) => {
        Swal.fire(response.data.message);
      });
    },
    readMessage: (state, { payload }) => {},
    deleteMessage: ({ payload }) => {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            axios
              .delete(`http://localhost:8000/api/deleteStory/${payload.id}`)
              .then((res) => {
                console.log(res);
                swalWithBootstrapButtons.fire("Deleted!", res.data.message, "success");
              })
              .catch((err) => {
                console.log(err);
              });
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire("Cancelled", "Your imaginary file is safe :)", "error");
          }
        });
    },
  },
  extraReducers: {
    // [fetchStores.pending]
  },
});

export const { createMessage, readMessage, deleteMessage } = contactSlice.actions;

export default contactSlice.reducer;
