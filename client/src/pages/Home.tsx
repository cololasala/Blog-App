import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = "/api/posts";

const Home = () => {
  const [posts, setPosts] = useState<any>([]);
  const location = useLocation();
  const category = location.pathname.split("/")[1];
  const navigation = useNavigate();

  useEffect(() => {
    getPosts();
  }, [category]);

  const getPosts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}?cat=${category}`);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!posts) {
    return null;
  }

  return (
    <div className="home">
      <div className="posts">
        {posts?.map((post: any) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.image} alt="post-image" />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`} className="link">
                <h1>{post.title}</h1>
              </Link>

              <p>{post.description}</p>
              <button
                className="button-read-more"
                onClick={() => navigation(`/post/${post.id}`)}
              >
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
