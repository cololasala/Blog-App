import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import Avatar from "../assets/avatar.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";

const BASE_URL = "/api/posts";

const Single = () => {
  const { currentUser } = useContext(AuthContext);
  const [post, setPost] = useState<any>(null);
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const navigate = useNavigate();

  useEffect(() => {
    getPost();
  }, [postId]);

  const getPost = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${postId}`);
      setPost(response.data);
    } catch (error) {
      console.warn(error);
    }
  };

  const postActions = () => {
    return currentUser?.username === post?.username;
  };

  if (!post) {
    return null;
  }

  const onDeletePost = async () => {
    try {
      await axios.delete(`${BASE_URL}/${postId}`);
      navigate("/");
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div className="single">
      <div className="content">
        <img
          src={`../../upload/${post.post_image}`}
          style={{ objectFit: "contain" }}
          alt="post-image"
        />
        <div className="user">
          <img src={Avatar} alt="avatar" />
          <div className="info">
            <span>{post?.username}</span>
            <p>Posted {moment(post.created_at).fromNow()}</p>
          </div>

          {postActions() && (
            <div className="edit-remove">
              <Link to={`/write?edit=${post.post_id}`} state={post}>
                <img src={Edit} />
              </Link>
              <img src={Delete} onClick={onDeletePost} />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: post.description }} />
      </div>
      <Menu />
    </div>
  );
};

export default Single;
