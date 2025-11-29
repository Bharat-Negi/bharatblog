"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function signup() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async (e:any) => {
    e.preventDefault(); // IMPORTANT: Stop page refresh
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
      toast.success("Success!");
    } catch (error:any) {
      console.log("Signup failed");
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="container">
      <div className="registration form">
        <header>{loading ? "Processing" : "Signup"}</header>
        <form onSubmit={onSignup}>
          <input
            id="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            type="text"
            placeholder="User Name"
            autoComplete="username"
          />
          <input
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            type="text"
            placeholder="Enter your email"
            autoComplete="email"
          />
          <input
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="password"
            placeholder="Create a password"
            autoComplete="current-password"
          />
          <button            
            className="btn buttonClass"
            disabled={buttonDisabled ? true : false}
          >
            {buttonDisabled ? "Fill Input" : "Submit"}
          </button>
        </form>

        <div className="signup">
          <span className="signup">
            Already have an account?&nbsp;
            <Link href="/login">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
