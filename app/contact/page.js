import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { socialLinks } from "@/lib/data";

export const metadata = {
  title: "Contact | Md Jahid Hasan"
};

export default function ContactPage() {
  return (
    <section className="page section-pad">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">Get in touch</span>
          <h1>Contact</h1>
        </Reveal>
        <div className="contact-grid">
          <Reveal className="contact-panel">
            <h2>Let us talk about software, QA, or a new project.</h2>
            <div className="contact-lines">
              <a href="mailto:jahid.hasan1217@gmail.com">jahid.hasan1217@gmail.com</a>
              <a href="tel:+8801708769578">01708769578</a>
              <span>Dhaka, Bangladesh</span>
            </div>
            <div className="social-row">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
            <a className="btn btn-ghost" href="/assets/Md%20Jahid%20Hasan.pdf">
              Download CV
            </a>
          </Reveal>
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
        <div className="info-strip">
          <div>
            <strong>Response Time</strong>
            <span>Within 24 hours</span>
          </div>
          <div>
            <strong>Location</strong>
            <span>Dhaka, Bangladesh</span>
          </div>
          <div>
            <strong>Availability</strong>
            <span>Mon - Fri, 9AM - 6PM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
