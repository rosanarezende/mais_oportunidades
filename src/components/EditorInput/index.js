import { Editor } from "react-draft-wysiwyg";
import {
  EditorState,
  ContentState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function EditorInput({
  editorState,
  setEditorState,
  text,
  readOnly,
}) {
  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };
  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={onEditorStateChange}
      wrapperStyle={{
        borderRadius: "6px",
        marginBottom: "24px",
      }}
      toolbarStyle={{
        borderTopLeftRadius: "6px",
        borderTopRightRadius: "6px",
        boxSizing: "border-box",
      }}
      editorStyle={{
        padding: "5px 10px",
        border: "1px solid #F1F1F1",
        borderRadius: "6px",
      }}
      placeholder={text || ""}
      readOnly={readOnly}
    />
  );
}

export const formatEditorOutput = (data) => {
  return draftToHtml(convertToRaw(data.getCurrentContent()));
};

export const formatEditorInput = (data) => {
  const blocksFromHTML = convertFromHTML(data);
  const state = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap
  );
  return EditorState.createWithContent(state);
};
