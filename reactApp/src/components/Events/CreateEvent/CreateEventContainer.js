import React from "react";
import "./CreateEventContainer.css";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import idgenerator from "../../../api/idgenerator";
import { uploadEventPhoto } from "../../../actions/eventAction";
import { decrypt } from "../../Security";

export class CreateEventContainer extends React.Component {
  state = {
    file: "",
    fileName: "Choose File",
    uploadedFile: {},
    message: "",
    percentage: 0,
  };

  renderTextInput = (formProps) => {
    return (
      <div className="form-group">
        <input
          {...formProps.input}
          className={formProps.className}
          type={formProps.type}
          placeholder={formProps.placeholder}
          autoComplete="off"
        />
      </div>
    );
  };

  onChange = (e) => {
    this.setState({ file: e.target.files[0] });
    this.setState({ fileName: e.target.files[0].name });

    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("remark", new Date().getTime().toString(36));

    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Token ${decrypt(this.props.token)}`,
      },
    };
    // console.log(formData);
    idgenerator
      .post("user/upload", formData, config)
      .then((response) => {
        this.props.uploadEventPhoto(response.data.file_info.file);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    return (
      <main role="main" className="col-md-10 ml-sm-auto col-lg-9 px-4">
        <div className="container projectpage-container">
          <h1>Create a new Project</h1>
        </div>
        <form
          onSubmit={this.props.handleSubmit(this.props.onSubmit)}
          className="ui form error"
        >
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
                  <Field
                    name="title"
                    type="text"
                    placeholder="Enter title"
                    className="form-control border border-dark"
                    component={this.renderTextInput}
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
                        <input
                          onChange={this.onChange}
                          className="border-0"
                          type="file"
                          accept=".jpg, .jpeg, .png"
                        />
                      </div>
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <input
                          onChange={this.onChange}
                          className="border-0"
                          type="file"
                          accept=".jpg, .jpeg, .png"
                        />
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
                      <Field
                        name="date"
                        type="date"
                        placeholder=""
                        className="form-control border border-dark"
                        component={this.renderTextInput}
                      />
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <Field
                        name="place"
                        type="text"
                        placeholder="Place"
                        className="form-control border border-dark"
                        component={this.renderTextInput}
                      />
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <Field
                        name="venue"
                        type="text"
                        placeholder="Venue"
                        className="form-control border border-dark"
                        component={this.renderTextInput}
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
            <button
              className="btn btn-primary btn-md"
              style={{ borderRadius: "0", width: "13%", fontWeight: "bold" }}
            >
              Save
            </button>
          </p>
        </form>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps, { uploadEventPhoto })(
  reduxForm({
    form: "CreateEvent",
  })(CreateEventContainer)
);
