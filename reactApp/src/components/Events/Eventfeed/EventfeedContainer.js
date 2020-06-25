import React from "react";
import "./EventfeedContainer.css";
import { Link } from "react-router-dom";
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
  EmailIcon,
} from "react-share";

const EventfeedContainer = () => {
  return (
    <main role="main" className="col-md-10 ml-sm-auto col-lg-9 px-4">

      <div className="projectpage-container feed-cover no-padding">
        <img
          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_172d73377ce%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_172d73377ce%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          alt="Generic placeholder"
        />
        <h1>The ICT Hub</h1>
        <p>
          Create Project To engage your audience. Create Project To engage your
          audience
        </p>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-10 col-lg-9 no-padding">
          <div className="row">

            <div className="col-md-6 col-lg-6 no-padding">
              <img className="event-banner" src="https://www.w3schools.com/howto/img_nature.jpg" alt="expandedImg" />
              <div className="gallery-container">
                <div><img src="https://www.w3schools.com/howto/img_snow.jpg" alt="Snow" /></div>
                <div><img src="https://www.w3schools.com/howto/img_snow.jpg" alt="Snow" /></div>
                <div><img src="https://www.w3schools.com/howto/img_mountains.jpg" alt="Snow" /></div>
                <div><img src="https://www.w3schools.com/howto/img_lights.jpg" alt="Snow" /></div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6">

              <h1>Event title</h1>
              <div className="social-icons">
                <FacebookShareButton
                  url={"theicthub.com"}
                  title={"title"}
                  className="Demo__some-network__share-button"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <br />
                <TwitterShareButton
                  url={"theicthub.com"}
                  title={"title"}
                  className="Demo__some-network__share-button pt-2"
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <br />
                <LineShareButton
                  url={"theicthub.com"}
                  title={"title"}
                  className="Demo__some-network__share-button pt-2"
                >
                  <LinkedinIcon size={32} round />
                </LineShareButton>
                <br />
                <EmailShareButton
                  url={"theicthub.com"}
                  title={"title"}
                  className="Demo__some-network__share-button pt-2"
                >
                  <EmailIcon size={32} round />
                </EmailShareButton>
              </div>
              <h6>
                <i className="fa fa-square-o" aria-hidden="true"></i>
                <span className="ml-2">
                  Joined <b>64</b>
                </span>
                <i className="fa fa-square-o pl-3" aria-hidden="true"></i>
                <span className="ml-2">
                  Date <b>19/06/2020</b>
                </span>
              </h6>

              <p>
                Create your event with simple steps. Create your event with simple
                steps. Create your event with simple steps. Create your event with
                simple steps. Create your event with simple steps. Create your
                event with simple steps. Create your event with simple steps.
                Create your event with simple steps. Create your event with simple
                steps. Create your event with simple steps. Create your event with
                simple steps. Create your event with simple steps.
                  </p>
              <button className="ui blue button mt-4">Edit</button>
              <button className="ui primary basic button ml-4">Share</button>

            </div>

          </div>
          <hr />
          <div className="row">

            <div className="col-md-4 col-lg-4 no-padding">
              <div className="card other-events">
                <img className="card-img-top" src="https://semantic-ui.com/images/avatar2/large/molly.png" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-4 no-padding">
              <div className="card other-events">
                <img className="card-img-top" src="https://semantic-ui.com/images/avatar2/large/matthew.png" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-4 no-padding">
              <div className="card other-events">
                <img className="card-img-top" src="https://semantic-ui.com/images/avatar2/large/elyse.png" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-2 col-lg-3" style={{background: '#f2f2f2'}}>
            Banner

        </div>
      </div >
    </main >
  );
};

export default EventfeedContainer;
