import React from "react";
import TeamFile from "./TeamFile";
import { useContext } from "react";
import notesContext from "@/context/notes/notesContext";

export default function Team() {
  const { team } = useContext(notesContext);
  return (
    <section className="team section">
      <div className="container section-title">
        <div className="section-title-container d-flex align-items-center justify-content-between">
          <h2>Team</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row gy-4">
          {team?.map((member:any) => (
            <TeamFile 
                key={member.id} 
                name={member.name}
                imgPath={member.imgUrl}
                note={member.shortNote}
                des={member.designation}
                twitter={member.twitter ?? null}
                facebook={member.facebook ?? null}
                instagram={member.instagram ?? null}
                linkedin={member.linkedin ?? null}
            />
          ))}
          
        </div>
      </div>
    </section>
  );
}
