import { useEffect, useState } from "react";
import TipTap from "../components/TipTap/TipTap";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

export interface ICategory {
  label: string;
  value: string;
}

const BASE_URL = "/api/posts";

const Write = () => {
  const navigate = useNavigate();
  const state = useLocation().state;
  const [title, setTitle] = useState<string>(state?.title ?? "");
  const [description, setDescription] = useState<string>(
    state?.description ?? "Write your article here!",
  );
  const [selectedCategory, setSelectedCategory] = useState<string>(
    state?.category ?? "",
  );
  const [imageFile, setImageFile] = useState<any>(null);
  const [postId, setPostId] = useState<number | null>(state?.post_id ?? null);
  const [loadingTipTap, setLoadingTitTap] = useState<boolean>(true);

  useEffect(() => {
    setLoadingTitTap(true);
    setTitle(state?.title ?? "");
    setDescription(state?.description ?? "Write your article here!");
    setImageFile(state?.post_image ?? null);
    setSelectedCategory(state?.category ?? "");

    setTimeout(() => {
      setLoadingTitTap(false);
    }, 100);
  }, [state]);

  const categories: ICategory[] = [
    { label: "Art", value: "art" },
    { label: "Science", value: "science" },
    { label: "Technology", value: "technology" },
    { label: "Cinema", value: "cinema" },
    { label: "Design", value: "design" },
    { label: "Food", value: "food" },
  ];

  const setBlogDescription = (text: string) => {
    setDescription(text);
  };

  const selectImage = async (e: any) => {
    try {
      const formData = new FormData();
      formData.append("file", e);
      const response = await axios.post("/api/upload", formData);
      setImageFile(response.data);
    } catch (error) {
      console.warn(error);
    }
  };

  const onSaveAsDraft = () => {};

  const onPublish = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const body = {
        title,
        description,
        category: selectedCategory,
        image: imageFile ?? "",
      };
      postId
        ? axios.put(`${BASE_URL}/${postId}`, body)
        : axios.post(`${BASE_URL}`, {
            ...body,
            created_at: moment(Date.now()).format("YYYY-MM-DD"),
          });
      navigate("/");
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div className="write">
      <div className="content">
        <input
          className="input-title"
          type="text"
          name="title"
          id="title"
          placeholder="Article title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {!loadingTipTap ? (
          <div className="editor-container">
            <TipTap
              initialDescription={description}
              onChangeDescription={setBlogDescription}
            />
          </div>
        ) : null}

        <div style={{ display: "flex", gap: 10 }}>
          <button
            className="secondary-button"
            style={{ padding: 8 }}
            onClick={() => {}}
          >
            Save as draft
          </button>
          <button
            className="primary-button"
            style={{ padding: 8 }}
            onClick={(e) => onPublish(e)}
          >
            {postId ? "Update" : "Publish"} post
          </button>
        </div>
      </div>
      <div className="menu-items">
        <div className="item">
          <h1>Image</h1>
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
            onChange={(e) => selectImage(e.target.files[0])}
          />
          <label className="label-file" htmlFor="file-image">
            Upload image
          </label>
          {imageFile && <img src={`../../upload/${imageFile}`} width={225} />}

          {imageFile && (
            <div>
              <button
                className="secondary-button"
                onClick={() => setImageFile(null)}
              >
                Remove image
              </button>
            </div>
          )}
        </div>
        <div className="item">
          <h1>Category</h1>
          {categories.map((category) => (
            <div key={category.value} className="category">
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
