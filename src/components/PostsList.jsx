import { useEffect, useState } from "react";
import PostCard from "./PostCard";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setImages(data);
        });

      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setPosts(data);
        });
    };

    getPosts();
  }, []);
  return (
    <>
      <div className="w3-row-padding">
        <div className="w3-col m12">
          <div className="w3-card w3-round w3-white">
            <div className="w3-container w3-padding">
              <h6 className="w3-opacity">Social Media template by w3.css</h6>
              <input
                className="w3-border w3-padding"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              ></input>
              <button type="button" className="w3-button w3-theme">
                <i className="fa fa-pencil" /> &nbsp; Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
      {posts
        .filter(
          (post) => post.title.includes(search) || post.body.includes(search),
        )
        .map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
            image={images[post.id].url}
          />
        ))}
    </>
  );
};

export default PostsList;
