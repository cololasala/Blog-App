import { useState } from "react";
import TipTap from "../components/TipTap";

const Write = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div className="write">
      <div className="content">
        <TipTap />
      </div>
      <div className="menu">
        <div className="item">1</div>
        <div className="item">2</div>
      </div>
    </div>
  );
};

export default Write;
