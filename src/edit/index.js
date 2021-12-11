import React from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";

const EditorContainer = ({ state, setState, setConvertedContent }) => {
  const onEditorStateChange = (editorState) => {
    setState(editorState);
    convertContentToHTML();
  };

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(state.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  const uploadImageCallBack = (file) => {
    let uploadedImages = [];

    const imageObject = {
      file: file,
      localSrc: URL.createObjectURL(file),
    };

    console.log(imageObject);

    uploadedImages.push(imageObject);

    return new Promise((resolve, reject) => {
      const data = new FormData();
      data.append("image", file);
      resolve({ data: { link: imageObject.localSrc } });
    });
  };

  // const { editorState } = state;
  return (
    <div className="editor">
      <Editor
        editorState={state}
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          inline: {
            inDropdown: true,
          },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          image: {
            uploadCallback: uploadImageCallBack,
            alt: { present: true, mandatory: false },
            previewImage: true,
            inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
          },
        }}
      />
    </div>
  );
};

const App = () => {
  const [state, setState] = React.useState(EditorState.createEmpty());
  const [convertedContent, setConvertedContent] = React.useState("");
  return (
    <div>
      <h2>Test with React Draft Wysiwyg.</h2>
      <button onClick={() => console.log(convertedContent)}>best</button>
      <EditorContainer
        state={state}
        setState={setState}
        setConvertedContent={setConvertedContent}
      />
    </div>
  );
};

export default App;
