import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import styles from "./VideoList.module.css";
import { useNavigate } from "react-router-dom";
import { getUserRole } from "../utils/auth";

const socket = io("http://localhost:5000");


export default function VideoList() {
    const [videos, setVideos] = useState([]);
    const role = getUserRole();
    const navigate = useNavigate()


    // Fetch videos initially
    useEffect(() => {
        const fetchVideos = async () => {
            const token = localStorage.getItem("token");

            const res = await fetch("http://localhost:5000/api/videos", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await res.json();
            setVideos(data);
        };

        fetchVideos();
    }, []);

    // Listen for real-time progress updates
    useEffect(() => {
        socket.on("video-progress", (update) => {
            setVideos((prev) =>
                prev.map((video) =>
                    video.id === update.videoId
                        ? {
                            ...video,
                            progress: update.progress,
                            status: update.status,
                        }
                        : video
                )
            );
        });

        return () => {
            socket.off("video-progress");
        };
    }, []);

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>My Videos</h2>

            {videos.length === 0 && <p>No videos uploaded yet.</p>}

            {videos.map((video) => (
                <div key={video.id} className={styles.card}>
                    <div className={styles.info}>
                        <h4>{video.title}</h4>
                        <span className={`${styles.status} ${styles[video.status]}`}>
                            {video.status}
                        </span>
                    </div>

                    <div className={styles.progressWrapper}>
                        <div
                            className={styles.progressBar}
                            style={{ width: `${video.progress}%` }}
                        >
                            {video.progress}%
                        </div>
                    </div>

                    {/* 🎬 Play button */}
                    <div className={styles.actions}>
                        <button
                            className={styles.playBtn}
                            disabled={video.status !== "safe"}
                            onClick={() => navigate(`/videos/${video.id}`)}
                        >
                            ▶ Play
                        </button>


                        {video.status === "processing" && (
                            <span className={styles.note}>Processing…</span>
                        )}

                        {video.status === "flagged" && (
                            <span className={styles.flagNote}>Flagged</span>
                        )}
                    </div>
                </div>
            ))}


        </div>
    );
}
