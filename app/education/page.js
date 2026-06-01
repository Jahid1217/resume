import Image from "next/image";
import Reveal from "@/components/Reveal";
import SkillBars from "@/components/SkillBars";
import { education, skills } from "@/lib/data";

export const metadata = {
  title: "Education | Md Jahid Hasan"
};

export default function EducationPage() {
  return (
    <section className="page section-pad">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">Academic foundation</span>
          <h1>Education</h1>
        </Reveal>
        <div className="timeline">
          {education.map((item, index) => (
            <Reveal className={`timeline-item ${index % 2 ? "right" : "left"}`} key={item.school}>
              <div className="timeline-card">
                <Image src={item.logo} alt={`${item.school} logo`} width={72} height={72} />
                <div>
                  <h2>{item.school}</h2>
                  {item.details.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                  <span>{item.duration}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="section-heading tight">
          <span className="eyebrow">Capabilities</span>
          <h2>My Skills</h2>
        </Reveal>
        <SkillBars groups={skills} />
      </div>
    </section>
  );
}
