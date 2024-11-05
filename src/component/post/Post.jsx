import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({ post }) => {
  console.log(post)
  const { body, title, id } = post;
  
  const navigate= useNavigate()

  const handleShowDetails = () => {
    navigate(`/posts/${id}`);
  }

  return (
    <div className="post">
      <h3>{title}</h3>
      <Link to={`/posts/${id}`}>Post Details</Link>
      <button onClick={handleShowDetails}>show details</button>
      {/* <p>{body}</p> */}
    </div>
  );
};

export default Post;