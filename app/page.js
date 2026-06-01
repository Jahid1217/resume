import Image from "next/image";
import Link from "next/link";
import AnimatedRole from "@/components/AnimatedRole";
import CounterStat from "@/components/CounterStat";
import Reveal from "@/components/Reveal";
import { expertise, stats, socialLinks } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="hero section-pad">
        <div className="container hero-grid">
          <Reveal className="hero-copy">
            <p className="eyebrow">
              Hi, I am <AnimatedRole />
            </p>
            <h1>Md Jahid Hasan</h1>
            <p className="hero-text">
              Dedicated and results-driven Software Engineer with proven success
              in collaborative environments and the ability to solve complex
              challenges. Passionate about continuous learning, innovation, and
              professional growth.
            </p>
            <div className="button-row">
              <a className="btn btn-primary" href="/assets/Md%20Jahid%20Hasan.pdf">
                View Resume
              </a>
              <Link className="btn btn-ghost" href="/contact">
                Contact Me
              </Link>
            </div>
            <div className="social-row" aria-label="Social links">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal className="portrait-wrap">
            <div className="portrait-card">
              <Image
                src="/assets/profole-pic.jpg"
                alt="Md Jahid Hasan"
                width={430}
                height={460}
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="stats-band">
        <div className="container stats-grid">
          {stats.map((stat) => (
            <CounterStat key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow">Core strengths</span>
            <h2>My Expertise</h2>
          </Reveal>
          <div className="feature-grid">
            {expertise.map((item) => (
              <Reveal className="feature-card" key={item.title}>
                <span className="feature-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <ul>
                  {item.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
