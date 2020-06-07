import React, { Component } from "react";
import axios from "axios";
import Message from "./Message";
import Progress from "./Progress";
import { connect } from "react-redux";
import { changeCoverPhoto } from "../../actions";

class FileUpload extends Component {
  state = {
    file: "",
    fileName: "Choose File",
    uploadedFile: {},
    message: "",
    percentage: 0,
  };

  onChange = (e) => {
    this.setState({ file: e.target.files[0] });
    this.setState({ fileName: e.target.files[0].name });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("file", this.state.file);

    try {
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          this.setState({
            percentage: parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            ),
          });
        },
      });

      const { fileName, filePath } = res.data;

      this.props.changeCoverPhoto(fileName, filePath);
    } catch (error) {
      if (error.response.status === 500) {
        this.setState({ message: "There was a problem with the server" });
      } else {
        this.setState({ message: error.response.data.msg });
      }
    }
  };
  render() {
    return (
      <div className="container mt-4">
        <h4 className="display-4 text-center mb-4">
          <i className="fab fa-react"></i>React File Upload
        </h4>
        {this.state.message ? <Message msg={this.state.message} /> : null}
        <form onSubmit={this.onSubmit}>
          <div className="custom-file mb-4">
            <input
              onChange={this.onChange}
              type="file"
              className="custom-file-input"
              id="customFile"
              accept="image/x-png,image/jpeg,image/jpg"
            />
            <label className="custom-file-label" htmlFor="customFile">
              {this.state.fileName}
            </label>
          </div>

          {this.state.percentage ? (
            <Progress percentage={this.state.percentage} />
          ) : null}

          <input
            type="submit"
            value="Upload"
            className="btn btn-primary btn-block mt-4"
          />
        </form>
        {this.state.uploadedFile ? (
          <div className="row mt-5">
            <div className="col-md-6 m-auto">
              <h3 className="text-center">
                {this.state.uploadedFile.fileName}
              </h3>
              <img
                style={{ width: "100%" }}
                src={this.state.uploadedFile.filePath}
                alt=""
              />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default connect(null, { changeCoverPhoto })(FileUpload);
