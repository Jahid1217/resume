"use client";

import { useEffect, useState } from "react";

const roles = ["Student", "Junior SQA Engineer", "Web Developer", "AI Enthusiast"];

export default function AnimatedRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const doneTyping = !deleting && text === current;
    const doneDeleting = deleting && text === "";
    const delay = doneTyping ? 1100 : 55;

    const timer = setTimeout(() => {
      if (doneTyping) {
        setDeleting(true);
        return;
      }
      if (doneDeleting) {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
        return;
      }
      setText(current.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);

    return () => clearTimeout(timer);
  }, [deleting, roleIndex, text]);

  return <span className="typing-text">{text || roles[0]}</span>;
}
