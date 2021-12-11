import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';


export default function App() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
   
          
        init={{
            selector: 'textarea#image-tools',
            height: 500,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste imagetools wordcount',
              'image code'
            ],
            toolbar: 'undo redo | image code|insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    
            /* without images_upload_url set, Upload tab won't show up*/
            images_upload_url: 'postAcceptor.php',
          
            /* we override default upload handler to simulate successful upload*/
            images_upload_handler: function (blobInfo, success, failure) {
              setTimeout(function () {
                /* no matter what you upload, we will turn it into TinyMCE logo :)*/
                success('http://moxiecode.cachefly.net/tinymce/v9/images/logo.png');
              }, 2000);
            },
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  );
}
