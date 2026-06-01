import Link from "next/link";
import { navItems } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link className="brand" href="/">
          <span className="brand-mark">JH</span>
          <span>Jahid Hasan</span>
        </Link>
        <nav className="footer-links" aria-label="Footer navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <p>Copyright 2026 Jahid Hasan. All rights reserved.</p>
      </div>
    </footer>
  );
}
