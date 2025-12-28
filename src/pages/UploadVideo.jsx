import { useState } from "react";
import styles from "./UploadVideo.module.css";

export default function UploadVideo() {
    const [title, setTitle] = useState("");
    const [video, setVideo] = useState(null);
    const [progress, setProgress] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!video) {
            alert("Please select a video");
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("video", video);

        const token = localStorage.getItem("token");

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:5000/api/videos/upload");

        xhr.setRequestHeader("Authorization", `Bearer ${token}`);

        xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
                const percent = Math.round((event.loaded * 100) / event.total);
                setProgress(percent);
            }
        };

        xhr.onload = () => {
            if (xhr.status === 201) {
                alert("Video uploaded successfully");
                setTitle("");
                setVideo(null);
                setProgress(0);
            } else {
                alert("Upload failed");
            }
        };

        xhr.send(formData);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Upload Video</h2>

            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Video Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <input
                    className={styles.fileInput}
                    type="file"
                    accept="video/*"
                    onChange={(e) => setVideo(e.target.files[0])}
                    required
                />

                {progress > 0 && (
                    <div className={styles.progressWrapper}>
                        <div
                            className={styles.progressBar}
                            style={{ width: `${progress}%` }}
                        >
                            {progress}%
                        </div>
                    </div>
                )}

                <button className={styles.button}>Upload</button>
            </form>
        </div>
    );
}
