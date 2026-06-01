"use client";

import Image from "next/image";
import { useState } from "react";
import { posts, socialLinks } from "@/lib/data";

function BlogCard({ post, featured = false }) {
  const [liked, setLiked] = useState(false);

  return (
    <article className={`blog-card ${featured ? "featured-blog-card" : ""}`}>
      <Image src={post.image} alt={post.title} width={860} height={440} />
      <div className="blog-content">
        <span className="eyebrow">
          {post.date} / {post.readTime}
        </span>
        <h2>{post.title}</h2>
        <p>{post.excerpt}</p>
        <div className="blog-meta">
          <div className="tag-cloud">
            {post.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <button className={`like-button ${liked ? "active" : ""}`} onClick={() => setLiked(!liked)}>
            {liked ? post.likes + 1 : post.likes} likes
          </button>
        </div>
      </div>
    </article>
  );
}

export default function BlogInteractions() {
  const [subscribed, setSubscribed] = useState(false);
  const [featured, ...remainingPosts] = posts;

  return (
    <div className="blog-layout">
      <div className="blog-list">
        {featured && <BlogCard post={featured} featured />}
        <div className="blog-card-grid">
          {remainingPosts.map((post) => (
          <BlogCard key={post.title} post={post} />
          ))}
        </div>
      </div>
      <aside className="blog-sidebar">
        <section className="side-panel author-panel">
          <Image src="/assets/profole-pic.jpg" alt="Jahid Hasan" width={120} height={120} />
          <h2>Jahid Hasan</h2>
          <p>
            Full Stack Developer and AI enthusiast writing about technology,
            programming, software quality, and practical learning.
          </p>
          <div className="social-row compact">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </section>
        <section className="side-panel">
          <h2>Reading List</h2>
          {posts.map((post) => (
            <a className="mini-post" href="#" key={post.title}>
              <Image src={post.image} alt="" width={72} height={72} />
              <span>
                {post.title}
                <small>{post.readTime}</small>
              </span>
            </a>
          ))}
        </section>
        <section className="side-panel topic-panel">
          <h2>Topics</h2>
          <div className="tag-cloud">
            {["AI", "Web Development", "Data Science", "Software QA", "Learning"].map((topic) => (
              <span key={topic}>{topic}</span>
            ))}
          </div>
        </section>
        <section className="side-panel">
          <h2>Newsletter</h2>
          <form
            className="inline-form"
            onSubmit={(event) => {
              event.preventDefault();
              setSubscribed(true);
              event.currentTarget.reset();
            }}
          >
            <input type="email" placeholder="Email address" required />
            <button className="btn btn-primary" type="submit">
              Subscribe
            </button>
          </form>
          {subscribed && <p className="form-note">Subscribed successfully.</p>}
        </section>
      </aside>
    </div>
  );
}
