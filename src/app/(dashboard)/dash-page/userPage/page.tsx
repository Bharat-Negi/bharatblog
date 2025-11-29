"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import LeftMenu from "@/components/dashboard/left-menu/LeftMenu";
import { Col, Container, Row } from "react-bootstrap";

export default function dashPage() {
  const [data, setData] = useState("nothing");
  const [sidebarClosed, setSidebarClosed] = useState(false);

  const toggleSidebar = () => {
    setSidebarClosed(!sidebarClosed);
  };

  useEffect(() => {
    const alreadyRan = localStorage.getItem("login_toast_shown");
    if (!alreadyRan) {
      toast.success("You are login");
      // mark as shown
      localStorage.setItem("login_toast_shown", "true");
    }
  }, []); // runs only once when dashboard page loads

  const getUserDetails = async () => {
    try {
      const res = await axios.post("/api/users/me");
      console.log(res.data);
      setData(res.data.data._id);
    } catch (error) {
      console.log("Logout Failed");
    }
  };

  return (
    <>
      <LeftMenu sidebarClosed={sidebarClosed} toggleSidebar={toggleSidebar} />
      <section className="home-section">
        <div className="home-content">
          <i className="bx bx-menu" onClick={toggleSidebar}></i>
        </div>
        <Container fluid>
          <Row>
            <Col>
              <h1 className="h4">User Dashboard</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>
                {data === "nothing" ? (
                  "Nothing"
                ) : (
                  <Link href={`/dash-page/${data}`}>{data}</Link>
                )}
              </h2>
              <h3>{}</h3>
              <button onClick={getUserDetails}>User Details</button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
