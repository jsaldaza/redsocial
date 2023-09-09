const PostCard = ({ title, body, image }) => {
  return (
    <div className="w3-container w3-card w3-white w3-round w3-margin">
      <br />
      <img
        src="https://www.w3schools.com/w3images/avatar6.png"
        alt="Avatar"
        className="w3-left w3-circle w3-margin-right"
        style={{ width: 60 }}
      />
      <span className="w3-right w3-opacity">32 min</span>
      <h4>Angie Jane</h4>
      <br />
      <hr className="w3-clear" />
      <p>{title}</p>
      <img src={image} style={{ width: "100%" }} className="w3-margin-bottom" />
      <p>{body}</p>
      <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom">
        <i className="fa fa-thumbs-up" /> &nbsp;Like
      </button>
      <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom">
        <i className="fa fa-comment" /> &nbsp;Comment
      </button>
    </div>
  );
};

export default PostCard;
