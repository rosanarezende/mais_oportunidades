import { Editor } from "react-draft-wysiwyg";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function EditorInput({ editorState, setEditorState, text }) {
  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };
  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={onEditorStateChange}
      wrapperStyle={{
        background: "white",
        borderRadius: "6px",
        marginBottom: "20px",
      }}
      toolbarStyle={{ borderTopLeftRadius: "6px", borderTopRightRadius: "6px" }}
      editorStyle={{ padding: "5px 10px" }}
      placeholder={text || ""}
    />
  );
}

export const formatEditorOutput = (data) => {
  return draftToHtml(convertToRaw(data.getCurrentContent()));
};
/* <textarea 
  disabled
  value={}
/>; */
