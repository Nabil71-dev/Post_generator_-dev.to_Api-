import React from "react";
import "./components.css";
const Post = (props) => {
  if (props.data.length === 0) {
    return <h1>No post published yet</h1>;
  } else {
    return (
      <div className="post_container">
        {props.data.map((d) => (
          <div className="posts" key={d.id}>
            <h1>{d.title}</h1>
            <p className="posts_date">{d.readable_publish_date}</p>
            <p className="posts_description">{d.description}</p>
          </div>
        ))}
      </div>
    );
  }
};
const PostData = React.memo(Post);
export default PostData;
