import React from "react";
import "./CreateEventContainer.css";
import { Link } from "react-router-dom";

const CreateEventContainer = () => {
  return (
    <main role="main" className="col-md-10 ml-sm-auto col-lg-9 px-4">
      <div className="container projectpage-container">
        <h1>Create a new Project</h1>
      </div>
      <div className="row col-sm-12 pt-4">
        <div className="col-sm-4">
          <div className="media">
            <img
              alt=""
              src="https://img.icons8.com/color/50/000000/workflow.png"
            />
            <div className="media-body pl-3">
              <h5 className="mt-0">Title</h5>
              <p>Create project here to engage your audiences.</p>
              <input
                className="form-control border border-dark"
                type="text"
                placeholder="Enter title"
              />
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="media">
            <img
              alt=""
              src="https://img.icons8.com/color/50/000000/workflow.png"
            />
            <div className="media-body pl-3">
              <h5 className="mt-0">Event Images</h5>
              <p>Create project here to engage your audiences.</p>
              <div className="file-field">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <input type="file" />
                  </div>
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <input type="file" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="media">
            <img
              alt=""
              src="https://img.icons8.com/color/50/000000/workflow.png"
            />
            <div className="media-body pl-3">
              <h5 className="mt-0">Details</h5>
              <p>Create project here to engage your audiences.</p>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <input
                    className="form-control border border-dark"
                    type="date"
                  />
                </div>
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <input
                    className="form-control border border-dark"
                    type="text"
                    placeholder="Place"
                  />
                </div>
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <input
                    className="form-control border border-dark"
                    type="text"
                    placeholder="Venue"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <p className="text-center">
        <Link
          to="/event/feed"
          className="btn btn-primary btn-md"
          href="#"
          role="button"
          style={{ borderRadius: "0", width: "13%", fontWeight: "bold" }}
        >
          Save
        </Link>
      </p>
    </main>
  );
};

export default CreateEventContainer;
