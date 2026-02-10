import React, { useRef } from "react"
import { Editor as TinyMCE } from "@tinymce/tinymce-react"

export default function Editor({ onChange, value = "" }) {
    const editorRef = useRef(null)

    const handleImageUpload = (blobInfo, progress) =>
        new Promise((resolve, reject) => {
            const formData = new FormData()
            formData.append("files", blobInfo.blob(), blobInfo.filename())

            axios
                .post(route("admin.editor.image.upload"), formData, {
                    onUploadProgress: (e) => {
                        progress(Math.round((e.loaded / e.total) * 100))
                    }
                })
                .then((res) => {
                    const url = typeof res.data === "object" ? res.data.url : res.data
                    resolve(url)
                })
                .catch((err) => {
                    reject({ message: "Upload failed", remove: true })
                })
        })

    return (
        <div className="tinymce-wrapper">
            <TinyMCE
                tinymceScriptSrc="/js/tinymce/tinymce.min.js"
                onInit={(evt, editor) => (editorRef.current = editor)}
                value={value}
                init={{
                    height: 500,
                    base_url: "/js/tinymce",
                    suffix: ".min",
                    license_key: 'gpl',
                    menubar: true,
                    plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                        "directionality"
                    ],
                    toolbar:
                        "undo redo | blocks | " +
                        "bold italic forecolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "image media table | code fullscreen preview",

                    images_upload_handler: handleImageUpload,
                    branding: false,
                    promotion: false,
                    skin: "oxide",
                    content_css: "default",
                    content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                }}
                onEditorChange={(content) => onChange(content)}
            />
        </div>
    )
}
