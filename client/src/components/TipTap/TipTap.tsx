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
    content: "<p>Write your article here!</p>",
    autofocus: "end",
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      console.log(html);
      // console.log(editor.getText())
    },
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
      </div>

      <EditorContent editor={editor} className="tiptap" />
    </div>
  );
};

export default TipTap;
