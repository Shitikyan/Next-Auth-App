"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import styles from "./page.module.css"; 

export default function Home() {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
      demo: e.currentTarget.demo.value,
      rememberMe: e.currentTarget.rememberMe.checked,
    };

    try {
      const res = axios.post("/api/auth/login", payload);
      console.log(res);

      router.push("/dashboard");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.container}>
    <form onSubmit={handleSubmit} className={styles.form}>
    <label htmlFor="login" className={styles.label}>
            Login
          </label>
      <div className={styles.inputContainer}>

        <input type="text" name="email" id="email" className={styles.input} required placeholder="email" />

        <input type="password" name="password" id="password" className={styles.input} required placeholder="password" />

    
          <input type="text" name="demo" id="demo" className={styles.input} placeholder="DEMO" />
      </div>
        <div className={styles.checkboxRow}>
          <div className={styles.checkbox}>
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </div>

        <div className={styles.footer}>
          <span className={styles.forgotPassword}>
            © 2023 Reqo, Inc.
          </span>
          <button type="button" className={styles.forgotPassword}>
            Forgot password?
          </button>
        </div>
    </form>
  </div>
  );
}
