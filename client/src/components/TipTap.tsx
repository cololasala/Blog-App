import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import "./TipTap.styles.scss";

const TipTap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        dropcursor: false, // Desactiva el cursor de arrastre
        gapcursor: false, // Desactiva el cursor de espacios vacíos
      }),
      Underline,
      Image,
    ],
    content: "<p>hello world</p>",
    autofocus: "end",
  });

  if (!editor) return <p>Loading...</p>;

  return (
    <div className="editor">
      <div className="menu">
        <button onClick={() => editor.chain().focus().toggleBold().run()}>
          Bold
        </button>

        <button onClick={() => editor.chain().focus().toggleItalic().run()}>
          Italic
        </button>

        <button onClick={() => editor.chain().focus().toggleUnderline().run()}>
          Underline
        </button>

        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          H1
        </button>

        <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
          List
        </button>

        <button
          onClick={() => {
            const url = window.prompt("URL de la imagen");

            if (url) {
              editor.chain().focus().setImage({ src: url }).run();
            }
          }}
        >
          Image
        </button>
      </div>

      <EditorContent editor={editor} className="tiptap" />
    </div>
  );
};

export default TipTap;
