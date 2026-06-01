import BlogInteractions from "@/components/BlogInteractions";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Blog | Md Jahid Hasan"
};

export default function BlogPage() {
  return (
    <section className="page section-pad blog-page">
      <div className="container">
        <Reveal className="blog-hero">
          <span className="eyebrow">Writing</span>
          <h1>Blog</h1>
          <p>
            Clear notes on AI, development, software quality, and the learning
            process behind building better digital products.
          </p>
        </Reveal>
        <BlogInteractions />
      </div>
    </section>
  );
}
