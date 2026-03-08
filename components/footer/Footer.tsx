import Container from "@/app/container";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-10 text-sm text-neutral-400">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Semih Şahinoğlu. Tüm hakları saklıdır.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/sem1hs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/semih-sahinoglu-2b7834289/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
