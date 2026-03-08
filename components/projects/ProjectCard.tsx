"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  github,
  demo,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
      rounded-xl
      border border-white/10
      bg-neutral-900/70
      backdrop-blur-md
      hover:bg-neutral-900/80
      hover:border-white/20
      transition
      overflow-hidden
      flex flex-col
    "
    >
      <div className="relative w-full h-[200px]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-6 flex flex-col gap-4">
        <h3 className="text-lg font-semibold">{title}</h3>

        <p
          className={`
          text-sm
          text-neutral-300
          leading-relaxed
          ${open ? "" : "line-clamp-2"}
        `}
        >
          {description}
        </p>

        {description.length > 120 && (
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 text-xs text-neutral-400 hover:text-white transition"
          >
            {open ? "Show less" : "Read more"}

            <ChevronDown
              size={14}
              className={`transition ${open ? "rotate-180" : ""}`}
            />
          </button>
        )}

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
              text-xs
              px-2 py-1
              rounded
              bg-white/10
              text-neutral-300
            "
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto text-sm pt-2">
          {github && (
            <a
              href={github}
              target="_blank"
              className="text-neutral-200 hover:text-white transition"
            >
              GitHub
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              className="text-neutral-200 hover:text-white transition"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
