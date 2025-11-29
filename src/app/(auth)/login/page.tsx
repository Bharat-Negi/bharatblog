"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function login() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLogin = async (e: any) => {
    e.preventDefault(); // IMPORTANT: Stop page refresh
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);

      // got to page as per admin or user
      const dataFile = await axios.post("/api/users/me");
      if (dataFile.data.data.isAdmin === true) {
        router.push("/dash-page");
      } else {
        router.push("/dash-page/userPage");
      }
      toast.success("Success!");
    } catch (error) {
      toast.error("Login failed, Please check", {
        duration: 3000, // time in ms (3 seconds)
      });
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="container">
      <div className="login form">
        <header>{loading ? "Processing" : "Login"}</header>
        <form onSubmit={onLogin}>
          <input
            id="email"
            value={user.email}
            autoComplete="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            type="text"
            placeholder="Enter your email"
          />
          <input
            id="password"
            value={user.password}
            autoComplete="current-password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="password"
            placeholder="Create a password"
          />
          <button className="btn buttonClass" type="submit">
            {buttonDisabled ? "Fill Input" : "Login"}
          </button>
        </form>
        <div className="signup">          
          <span className="signup">
            Don't have an account?&nbsp;
            <Link href="/signup">Signup</Link>
          </span><br/>
          <span className="signup">
            Go Home&nbsp;
            <Link href="/">Home</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
