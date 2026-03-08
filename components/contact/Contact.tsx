import Container from "@/app/container";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            İletişim Bilgilerim
          </h2>

          <p className="mt-4 text-neutral-400">
            Birlikte çalışmak isterseniz veya bir proje fikriniz varsa benimle
            iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="mailto:semihshngl@gmail.com"
            className="
            flex items-center gap-3
            px-6 py-4
            rounded-xl
            border border-white/10
            bg-white/5
            backdrop-blur-md
            hover:bg-white/10
            transition
          "
          >
            <Mail size={20} />
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/semih-sahinoglu-2b7834289/"
            target="_blank"
            className="
            flex items-center gap-3
            px-6 py-4
            rounded-xl
            border border-white/10
            bg-white/5
            backdrop-blur-md
            hover:bg-white/10
            transition
          "
          >
            <Linkedin size={20} />
            LinkedIn
          </a>

          <a
            href="https://github.com/sem1hs"
            target="_blank"
            className="
            flex items-center gap-3
            px-6 py-4
            rounded-xl
            border border-white/10
            bg-white/5
            backdrop-blur-md
            hover:bg-white/10
            transition
          "
          >
            <Github size={20} />
            GitHub
          </a>
        </div>
      </Container>
    </section>
  );
}
