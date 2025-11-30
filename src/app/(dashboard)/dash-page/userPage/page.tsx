"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import LeftMenu from "@/components/dashboard/left-menu/LeftMenu";
import { Col, Container, Row } from "react-bootstrap";
import CardPage from "@/components/dashboard/card/CardPage";

export default function dashPage() {
  const [data, setData] = useState("nothing");
  const [userData, setUserData] = useState<any>();

  useEffect(() => {
    const alreadyRan = localStorage.getItem("login_toast_shown");
    if (!alreadyRan) {
      toast.success("You are login");
      // mark as shown
      localStorage.setItem("login_toast_shown", "true");
    }
    async function loadUser() {
      const dataFile = await axios.post("/api/users/me");
      console.log("hello:- ", dataFile.data.data.isAdmin);
      setUserData(dataFile.data.data);
    }
    loadUser();
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

  // user per first word Capitalize
  const capitalize = (str?: string) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md={4}>
            <CardPage
              name={capitalize(userData?.username)}
              email={userData?.email}
            /> sdsdsdsdsd
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
    </>
  );
}
