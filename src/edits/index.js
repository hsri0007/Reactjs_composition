import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { tinymce } from "@tinymce/tinymce-react/lib/cjs/main/ts/Events";

class App extends React.Component {
  handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
  };

  uploadImageCallBack = (file) => {
    let uploadedImages = [];

    const imageObject = {
      file: file,
      localSrc: URL.createObjectURL(file),
    };

    uploadedImages.push(imageObject);

    return new Promise((resolve, reject) => {
      const data = new FormData();
      data.append("image", file);
      console.log(data);
      resolve({ data: { link: imageObject.localSrc } });
    });
  };

  render() {
    return (
      <Editor
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          height: 500,
          menubar: false,
          selector: "textarea#local-upload",
          plugins: "image code",
          toolbar: "undo redo | image code",

          /* without images_upload_url set, Upload tab won't show up*/
          //   images_upload_url: "postAcceptor.php",

          /* we override default upload handler to simulate successful upload*/
          images_upload_handler: this.uploadImageCallBack,
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
        onEditorChange={this.handleEditorChange}
      />
    );
  }
}

export default App;
