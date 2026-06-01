import ProjectGallery from "@/components/ProjectGallery";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Projects | Md Jahid Hasan"
};

export default function ProjectsPage() {
  return (
    <section className="page section-pad projects-page">
      <div className="container">
        <Reveal className="project-hero">
          <div>
            <span className="eyebrow">Selected work</span>
            <h1>Projects</h1>
            <p>
              Practical desktop and web applications built around real workflows,
              database-backed features, and usable interfaces.
            </p>
          </div>
          <div className="project-metrics" aria-label="Project summary">
            <div>
              <strong>6</strong>
              <span>Featured builds</span>
            </div>
            <div>
              <strong>4</strong>
              <span>C# systems</span>
            </div>
            <div>
              <strong>2</strong>
              <span>Web projects</span>
            </div>
          </div>
        </Reveal>
        <ProjectGallery />
      </div>
    </section>
  );
}
