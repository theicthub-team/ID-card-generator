import React from "react";
import "./MainContainer.css";
import { Link } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="container projectpage-container">
      <div>
        <h1>Create a new Project</h1>
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
                      type="text"
                    />
                  </div>
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <input
                      className="form-control border border-dark"
                      type="text"
                    />
                  </div>
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <input
                      className="form-control border border-dark"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <p className="text-center">
          <Link
            to="/create"
            className="btn btn-primary btn-md"
            href="#"
            role="button"
            style={{ borderRadius: "0", width: "13%", fontWeight: "bold" }}
          >
            Save
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MainContainer;
