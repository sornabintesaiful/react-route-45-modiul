import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1)
  }

  const { title, id, body } = post;
  return (
    <div>
      <h4> This post is about ---{ id}---</h4>
      <h4>{title}</h4>
      <p>{body}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;