import ExperienceTabs from "@/components/ExperienceTabs";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Experience | Md Jahid Hasan"
};

export default function ExperiencePage() {
  return (
    <section className="page section-pad">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">Professional path</span>
          <h1>Experience</h1>
          <p>
            Quality engineering, automation, documentation, and collaboration
            across modern software teams.
          </p>
        </Reveal>
        <ExperienceTabs />
      </div>
    </section>
  );
}
