import { useState } from "react";
import TipTap from "../components/TipTap/TipTap";

export interface ICategory {
  label: string;
  value: string;
}

const Write = () => {
  const [value, setValue] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const categories: ICategory[] = [
    { label: "Art", value: "art" },
    { label: "Science", value: "science" },
    { label: "Technology", value: "technology" },
    { label: "Cinema", value: "cinema" },
    { label: "Design", value: "design" },
    { label: "Food", value: "food" },
  ];

  return (
    <div className="write">
      <div className="content">
        <input
          className="input-title"
          type="text"
          name="title"
          id="titel"
          placeholder="Article title"
        />
        <div className="editor-container">
          <TipTap />
        </div>
      </div>
      <div className="menu-items">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            name=""
            id="file-image"
          />
          <label htmlFor="file-image">Upload image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update image</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>

          {categories.map((category) => (
            <div
              key={category.value}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <input
                style={{ marginTop: 0 }}
                type="radio"
                value={category.value}
                name={category.value}
                id={category.value}
                checked={selectedCategory === category.value}
                onChange={(e) => setSelectedCategory(e.target.value)}
              />
              <label htmlFor={category.value}>{category.label}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Write;
