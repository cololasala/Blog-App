import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="" />
        <div className="user">
          <img src="" />
          <div className="info">
            <span>Jhon</span>
            <p>Posted 2 days ago</p>
          </div>

          <div className="edit-remove">
            <Link to={`/write?edit=2`}>
              <img src={Edit} />
            </Link>
            <img src={Delete} />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio labore
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          fugit debitis rerum eius alias ab ea blanditiis modi iure
          exercitationem, necessitatibus, repellat at. Doloremque delectus, rem
          sint eaque exercitationem eligendi enim magnam deserunt suscipit
          distinctio minus deleniti dolorum iste, nihil ipsa, hic beatae!
          Sapiente vero aliquid dignissimos, totam eos nemo enim dolorum ab
          quaerat earum rerum, nihil ipsa autem illo. Aspernatur totam magni
          reiciendis harum ducimus maxime cupiditate dolorem. Dolor dolorem at
          eius quaerat ab! Impedit, debitis veritatis omnis sint assumenda
          pariatur officia deserunt aperiam natus quasi. Repellendus sequi
          rerum, ut, deleniti cupiditate minus eos excepturi nisi, voluptate
          mollitia commodi?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          fugit debitis rerum eius alias ab ea blanditiis modi iure
          exercitationem, necessitatibus, repellat at. Doloremque delectus, rem
          sint eaque exercitationem eligendi enim magnam deserunt suscipit
          distinctio minus deleniti dolorum iste, nihil ipsa, hic beatae!
          Sapiente vero aliquid dignissimos, totam eos nemo enim dolorum ab
          quaerat earum rerum, nihil ipsa autem illo. Aspernatur totam magni
          reiciendis harum ducimus maxime cupiditate dolorem. Dolor dolorem at
          eius quaerat ab! Impedit, debitis veritatis omnis sint assumenda
          pariatur officia deserunt aperiam natus quasi. Repellendus sequi
          rerum, ut, deleniti cupiditate minus eos excepturi nisi, voluptate
          mollitia commodi?
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
