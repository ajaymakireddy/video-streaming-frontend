import { useState } from "react";
import styles from "./Auth.module.css";
import { Link } from "react-router-dom";

export default function RegisterPage() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });

    const handleChange = e =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        });
        alert("Registered successfully");
    };

    return (
        <div className={styles.container}>
            <form className={styles.card} onSubmit={handleSubmit}>
                <h2 className={styles.title}>Register</h2>
                <input className={styles.input} name="name" placeholder="Enter your Name" onChange={handleChange} />
                <input className={styles.input} name="email" placeholder="Enter your Email" onChange={handleChange} />
                <input className={styles.input} name="password" type="Enter your password" placeholder="Password" onChange={handleChange} />
                <button className={styles.button}>Register</button>

                <p className={styles.link}>
                    You have an account?{" "}
                    <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    );
}
