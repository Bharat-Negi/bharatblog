"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

// Define the user interface
interface User {
  email: string;
  password: string;
}

// Define the response data interface for the me endpoint
interface UserData {
  data: {
    isAdmin: boolean;
    // Add other user properties as needed
  };
}

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // IMPORTANT: Stop page refresh
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);

      // Go to page as per admin or user
      const dataFile = await axios.post<UserData>("/api/users/me");
      if (dataFile.data.data.isAdmin === true) {
        router.push("/dash-page");
      } else {
        router.push("/dash-page/userPage");
      }
      toast.success("Success!");
    } catch (error: any) {
      console.error("Login error:", error);
      toast.error("Login failed, Please check", {
        duration: 3000, // time in ms (3 seconds)
      });
    } finally {
      setLoading(false);
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
          <button 
            className="btn buttonClass" 
            type="submit"
            disabled={buttonDisabled || loading}
          >
            {buttonDisabled ? "Fill Input" : loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="signup">          
          <span className="signup">
            Don&apos;t have an account?&nbsp;
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