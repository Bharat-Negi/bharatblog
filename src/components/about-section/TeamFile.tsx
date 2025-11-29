import Link from "next/link";
import React from "react";

export default function TeamFile(props:any) {
  return (
    <div className="col-lg-6">
      <div className="team-member d-flex align-items-start">
        <div className="pic">
          <img src={props.imgPath} className="img-fluid" alt="" />
        </div>
        <div className="member-info">
          <h4>{props.name.replace(/\b\w/g, (l:string) => l.toUpperCase())}</h4>
          <span>{props.des.replace(/\b\w/g, (l:string) => l.toUpperCase())}</span>
          <p>{props.note}</p>
          <div className="social">            
            {props.twitter &&
            <Link href={props.twitter}>
              <i className={`bi bi-twitter-x`}></i>
            </Link>
            }
            {props.facebook &&
            <Link href={props.facebook}>
              <i className={`bi bi-facebook`}></i>
            </Link>
            }
            {props.instagram &&
            <Link href={props.instagram}>
              <i className={`bi bi-instagram`}></i>
            </Link>
            }
            {props.linkedin &&
            <Link href={props.linkedin}>
              <i className={`bi bi-linkedin`}></i>
            </Link>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
