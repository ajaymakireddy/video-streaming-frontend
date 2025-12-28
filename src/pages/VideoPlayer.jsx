import { useParams, useNavigate } from "react-router-dom";
import styles from "./VideoPlayer.module.css";

export default function VideoPlayer() {
    const { id } = useParams();
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    return (
        <div className={styles.container}>
            <button className={styles.backBtn} onClick={() => navigate("/videos")}>
                ← Back to Videos
            </button>

            <h2 className={styles.heading}>Video Player</h2>

            <div className={styles.playerWrapper}>
                <video
                    className={styles.video}
                    controls
                    preload="metadata"
                >
                    <source
                        src={`http://localhost:5000/api/videos/stream/${id}`}
                        type="video/mp4"
                    />
                    Your browser does not support video playback.
                </video>
            </div>

            <p className={styles.note}>
                Streaming via HTTP Range Requests
            </p>
        </div>
    );
}
