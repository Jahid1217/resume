"use client";

import Image from "next/image";
import { useState } from "react";
import SkillBars from "@/components/SkillBars";
import { skills } from "@/lib/data";

export default function ExperienceTabs() {
  const [tab, setTab] = useState("work");

  return (
    <section className="tabs-shell">
      <div className="segmented">
        <button className={tab === "work" ? "active" : ""} onClick={() => setTab("work")}>
          Work Experience
        </button>
        <button className={tab === "skills" ? "active" : ""} onClick={() => setTab("skills")}>
          Technical Skills
        </button>
      </div>

      {tab === "work" ? (
        <article className="experience-card large-card">
          <div className="experience-head">
            <div>
              <span className="eyebrow">August 2025 - Present</span>
              <h2>Junior SQA Engineer</h2>
              <p className="muted">Karooth IT (BD) Ltd</p>
              <p>
                Ensuring software quality through comprehensive testing
                methodologies and automation frameworks.
              </p>
            </div>
            <Image src="/assets/Karooth.jpg" alt="Karooth IT logo" width={116} height={116} />
          </div>
          <div className="two-column">
            <div>
              <h3>Key Responsibilities</h3>
              <ul className="check-list">
                <li>Develop and execute test cases for web and mobile applications</li>
                <li>Perform manual and automated testing using Selenium and Cypress</li>
                <li>Collaborate with development teams to identify and resolve bugs</li>
                <li>Create and maintain test documentation and reports</li>
                <li>Implement CI/CD pipelines for automated testing</li>
              </ul>
            </div>
            <div>
              <h3>Tools</h3>
              <div className="tag-cloud">
                {["Selenium", "Burp Suite", "Taiga", "Postman", "Git"].map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </article>
      ) : (
        <SkillBars groups={skills} />
      )}
    </section>
  );
}
