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
    <div>
      <div className="feed-cover">
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
      <img
        src="https://www.w3schools.com/howto/img_nature.jpg"
        id="expandedImg"
        alt="expandedImg"
      />

      <div className="row" id="image-gallery">
        <div className="column">
          <img
            src="https://www.w3schools.com/howto/img_nature.jpg"
            alt="Nature"
            style={{ width: "100%" }}
          />
        </div>
        <div className="column">
          <img
            src="https://www.w3schools.com/howto/img_snow.jpg"
            alt="Snow"
            style={{ width: "100%" }}
          />
        </div>
        <div className="column">
          <img
            src="https://www.w3schools.com/howto/img_mountains.jpg"
            alt="Mountains"
            style={{ width: "100%" }}
          />
        </div>
        <div className="column">
          <img
            src="https://www.w3schools.com/howto/img_lights.jpg"
            alt="Lights"
            style={{ width: "100%" }}
          />
        </div>
        <div className="event-card card column" style={{ width: "40rem" }}>
          <div className="card-body event-body">
            <h1 className="card-title">Event title</h1>
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
            <p className="text">
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
        <div className="social">
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
      </div>
      <br />
      <br />
      <hr />

      <div id="feed-wrapper">
        <div id="feed-sidebar-wrapper">
          <button className="ui inverted button">
            Design now
            <i className="fa fa-chevron-right pl-2" aria-hidden="true"></i>
          </button>
          <p>
            Create Project To engage your audience. Create Project To engage
            your audience
          </p>
        </div>
      </div>

      <div className="ui link cards explore-events">
        <div className="card">
          <div className="image">
            <img src="https://semantic-ui.com/images/avatar2/large/molly.png" />
          </div>
          <div className="content">
            <div className="header">Matt Giampietro</div>
            <div className="meta">
              <a>Guests</a>
            </div>
            <div className="description">
              Matthew is an interior designer living in New York.
            </div>
          </div>
          <div className="extra content">
            <span className="right floated">Joined in 2013</span>
            <span>
              <i className="user icon"></i>
              75 Guests
            </span>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src="https://semantic-ui.com/images/avatar2/large/matthew.png" />
          </div>
          <div className="content">
            <div className="header">Molly</div>
            <div className="meta">
              <span className="date">Coworker</span>
            </div>
            <div className="description">
              Molly is a personal assistant living in Paris.
            </div>
          </div>
          <div className="extra content">
            <span className="right floated">Joined in 2011</span>
            <span>
              <i className="user icon"></i>
              35 Guests
            </span>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src="https://semantic-ui.com/images/avatar2/large/elyse.png" />
          </div>
          <div className="content">
            <div className="header">Elyse</div>
            <div className="meta">
              <a>Coworker</a>
            </div>
            <div className="description">
              Elyse is a copywriter working in New York.
            </div>
          </div>
          <div className="extra content">
            <span className="right floated">Joined in 2014</span>
            <span>
              <i className="user icon"></i>
              151 Guests
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventfeedContainer;
