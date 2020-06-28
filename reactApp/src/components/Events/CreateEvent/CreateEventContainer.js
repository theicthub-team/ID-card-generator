import React from "react";
import "./CreateEventContainer.css";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

export class CreateEventContainer extends React.Component {
  renderTextInput = (formProps) => {
    if (formProps.type === "file") {
      return (
        <div className="form-group">
          <input
            className={formProps.className}
            type={formProps.type}
            accept=".jpg, .jpeg, .png"
            placeholder={formProps.placeholder}
            autoComplete="off"
          />
        </div>
      );
    }
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
                        <Field
                          name="image1"
                          type="file"
                          placeholder=""
                          className="border-0"
                          component={this.renderTextInput}
                          value={null}
                        />
                      </div>
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <Field
                          name="image2"
                          type="file"
                          placeholder=""
                          className="border-0"
                          component={this.renderTextInput}
                          value={null}
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

export default connect()(
  reduxForm({
    form: "CreateEvent",
  })(CreateEventContainer)
);
