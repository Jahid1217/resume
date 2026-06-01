"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { projects } from "@/lib/data";

const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];

export default function ProjectGallery() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((project) => project.category === active)),
    [active]
  );
  const [featured, ...rest] = filtered;

  return (
    <div className="project-showcase">
      <div className="filter-row project-filter" role="tablist" aria-label="Project filters">
        {categories.map((category) => (
          <button
            key={category}
            className={active === category ? "active" : ""}
            type="button"
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {featured && (
        <article className="featured-project">
          <div className="featured-project-image">
            <Image src={featured.image} alt={featured.title} width={920} height={560} priority />
          </div>
          <div className="featured-project-content">
            <span className="eyebrow">{featured.category}</span>
            <h2>{featured.title}</h2>
            <p>{featured.description}</p>
            <div className="tag-cloud">
              {featured.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a className="btn btn-primary" href={featured.href} target="_blank" rel="noreferrer">
              View project
            </a>
          </div>
        </article>
      )}

      <div className="project-grid">
        {rest.map((project) => (
          <article className="project-card reveal is-visible" key={project.title}>
            <div className="project-image">
              <Image src={project.image} alt={project.title} width={720} height={440} />
            </div>
            <div className="project-body">
              <span className="eyebrow">{project.category}</span>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="tag-cloud">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
                View project
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
