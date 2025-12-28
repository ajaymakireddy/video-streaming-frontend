import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { getUserRole } from "../utils/auth";

export default function Dashboard() {
    const navigate = useNavigate();
    const role = getUserRole() || "viewer";

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h2>Dashboard</h2>
                <button onClick={handleLogout} className={styles.logoutBtn}>
                    Logout
                </button>
            </header>

            <section className={styles.content}>
                {(role === "editor" || role === "admin") && (
                    <div className={styles.card}>
                        <h3>Upload Videos</h3>
                        <p>Upload and process videos.</p>
                        <button
                            className={styles.actionBtn}
                            onClick={() => navigate("/upload")}
                        >
                            Upload
                        </button>
                    </div>
                )}

                {role === "viewer" && (
                    <div className={styles.card}>
                        <h3>Upload Videos</h3>
                        <p>You have read-only access.</p>
                    </div>
                )}

                <div className={styles.card}>
                    <h3>My Videos</h3>
                    <p>View uploaded videos and processing status.</p>
                    <button
                        className={styles.actionBtn}
                        onClick={() => navigate("/videos")}
                    >
                        View
                    </button>
                </div>
            </section>
        </div>
    );
}
