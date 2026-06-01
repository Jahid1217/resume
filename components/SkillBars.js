"use client";

import Reveal from "@/components/Reveal";

export default function SkillBars({ groups }) {
  return (
    <div className="skill-grid">
      {groups.map((group) => (
        <Reveal className="skill-card" key={group.title}>
          <h3>{group.title}</h3>
          <div className="skill-list-bars">
            {group.items.map((item) => (
              <div className="skill-row" key={item.name}>
                <div>
                  <span>{item.name}</span>
                  <span>{item.level}%</span>
                </div>
                <div className="skill-track">
                  <span style={{ "--level": `${item.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
