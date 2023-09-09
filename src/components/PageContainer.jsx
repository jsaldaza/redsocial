import PostsList from "./PostsList";

const PageContainer = () => {
  return (
    <div
      className="w3-container w3-content"
      style={{ maxWidth: 1400, marginTop: 80 }}
    >
      <div className="w3-row">
        <div className="w3-col m3">
          <div className="w3-card w3-round w3-white">
            <div className="w3-container">
              <h4 className="w3-center">My Profile</h4>
              <p className="w3-center">
                <img
                  src="https://www.w3schools.com/w3images/avatar3.png"
                  className="w3-circle"
                  style={{ height: 106, width: 106 }}
                  alt="Avatar"
                />
              </p>
              <hr />
              <p>
                <i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme" />
                Designer, UI
              </p>
              <p>
                <i className="fa fa-home fa-fw w3-margin-right w3-text-theme" />
                London, UK
              </p>
              <p>
                <i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme" />
                April 1, 1988
              </p>
            </div>
          </div>
          <br />
          <div className="w3-card w3-round">
            <div className="w3-white">
              <button
                onClick="myFunction('Demo1')"
                className="w3-button w3-block w3-theme-l1 w3-left-align"
              >
                <i className="fa fa-circle-o-notch fa-fw w3-margin-right" /> My
                Groups
              </button>
              <div id="Demo1" className="w3-hide w3-container">
                <p>Some text..</p>
              </div>
              <button
                onClick="myFunction('Demo2')"
                className="w3-button w3-block w3-theme-l1 w3-left-align"
              >
                <i className="fa fa-calendar-check-o fa-fw w3-margin-right" />{" "}
                My Events
              </button>
              <div id="Demo2" className="w3-hide w3-container">
                <p>Some other text..</p>
              </div>
              <button
                onClick="myFunction('Demo3')"
                className="w3-button w3-block w3-theme-l1 w3-left-align"
              >
                <i className="fa fa-users fa-fw w3-margin-right" /> My Photos
              </button>
              <div id="Demo3" className="w3-hide w3-container">
                <div className="w3-row-padding">
                  <br />
                  <div className="w3-half">
                    <img
                      src="https://www.w3schools.com/w3images/lights.jpg"
                      style={{ width: "100%" }}
                      className="w3-margin-bottom"
                    />
                  </div>
                  <div className="w3-half">
                    <img
                      src="https://www.w3schools.com/w3images/nature.jpg"
                      style={{ width: "100%" }}
                      className="w3-margin-bottom"
                    />
                  </div>
                  <div className="w3-half">
                    <img
                      src="https://www.w3schools.com/w3images/mountains.jpg"
                      style={{ width: "100%" }}
                      className="w3-margin-bottom"
                    />
                  </div>
                  <div className="w3-half">
                    <img
                      src="https://www.w3schools.com/w3images/forest.jpg"
                      style={{ width: "100%" }}
                      className="w3-margin-bottom"
                    />
                  </div>
                  <div className="w3-half">
                    <img
                      src="https://www.w3schools.com/w3images/nature.jpg"
                      style={{ width: "100%" }}
                      className="w3-margin-bottom"
                    />
                  </div>
                  <div className="w3-half">
                    <img
                      src="https://www.w3schools.com/w3images/snow.jpg"
                      style={{ width: "100%" }}
                      className="w3-margin-bottom"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="w3-card w3-round w3-white w3-hide-small">
            <div className="w3-container">
              <p>Interests</p>
              <p>
                <span className="w3-tag w3-small w3-theme-d5">News</span>
                <span className="w3-tag w3-small w3-theme-d4">W3Schools</span>
                <span className="w3-tag w3-small w3-theme-d3">Labels</span>
                <span className="w3-tag w3-small w3-theme-d2">Games</span>
                <span className="w3-tag w3-small w3-theme-d1">Friends</span>
                <span className="w3-tag w3-small w3-theme">Games</span>
                <span className="w3-tag w3-small w3-theme-l1">Friends</span>
                <span className="w3-tag w3-small w3-theme-l2">Food</span>
                <span className="w3-tag w3-small w3-theme-l3">Design</span>
                <span className="w3-tag w3-small w3-theme-l4">Art</span>
                <span className="w3-tag w3-small w3-theme-l5">Photos</span>
              </p>
            </div>
          </div>
          <br />
          <div className="w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small">
            <span
              onClick="this.parentElement.style.display='none'"
              className="w3-button w3-theme-l3 w3-display-topright"
            >
              <i className="fa fa-remove" />
            </span>
            <p>
              <strong>Hey!</strong>
            </p>
            <p>People are looking at your profile. Find out who.</p>
          </div>
        </div>
        <div className="w3-col m7">
          <PostsList />
        </div>
        <div className="w3-col m2">
          <div className="w3-card w3-round w3-white w3-center">
            <div className="w3-container">
              <p>Upcoming Events:</p>
              <img
                src="https://www.w3schools.com/w3images/forest.jpg"
                alt="Forest"
                style={{ width: "100%" }}
              />
              <p>
                <strong>Holiday</strong>
              </p>
              <p>Friday 15:00</p>
              <p>
                <button className="w3-button w3-block w3-theme-l4">Info</button>
              </p>
            </div>
          </div>
          <br />
          <div className="w3-card w3-round w3-white w3-center">
            <div className="w3-container">
              <p>Friend Request</p>
              <img
                src="https://www.w3schools.com/w3images/avatar6.png"
                alt="Avatar"
                style={{ width: "50%" }}
              />
              <br />
              <span>Jane Doe</span>
              <div className="w3-row w3-opacity">
                <div className="w3-half">
                  <button
                    className="w3-button w3-block w3-green w3-section"
                    title="Accept"
                  >
                    <i className="fa fa-check" />
                  </button>
                </div>
                <div className="w3-half">
                  <button
                    className="w3-button w3-block w3-red w3-section"
                    title="Decline"
                  >
                    <i className="fa fa-remove" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="w3-card w3-round w3-white w3-padding-16 w3-center">
            <p>ADS</p>
          </div>
          <br />
          <div className="w3-card w3-round w3-white w3-padding-32 w3-center">
            <p>
              <i className="fa fa-bug w3-xxlarge" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContainer;
