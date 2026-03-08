import Container from "@/app/container";
import ExperienceItem from "./ExperienceItem";

const experiences = [
  {
    year: "2025 Aralık — Günümüz",
    role: "Backend Developer (Intern)",
    company: "Biri Company",
    description: [
      "Kafka ile event-driven mimari uyguladım",
      "Güncel, modern ve performanslı backend servisleri tasarladım",
      "Elasticsearch entegrasyonunu sağladım",
      "Firebase ile Push Notification ve Mail doğrulama işlemlerini gerçekleştirdim",
      "Google Maps entegrasyonu ile kullanıcıların konumlarını alıp onlara yakınlarındaki hizmetleri sundum",
      "Kullanıcıların bilgilerine göre onlara özel algoritma oluşturup, onlara hizmetler sundum",
      "6 Kişilik ekipte Scrum metodu ile birlikte çalışarak deneyimler edindim",
    ],
  },
  {
    year: "2025 Ağustos — 2025 Ekim",
    role: "Full Stack Developer",
    company: "Eywa Bilgi Teknolojileri",
    description: [
      "Backend geliştirme süreçlerinden sonra projenin frontend tarafında da görev aldım",
      "React ve TypeScript kullanarak admin panel geliştirdim",
      "Spring Boot ile geliştirilen REST API’leri frontend tarafına entegre ettim",
      "Backend ve frontend teknolojileriyle çalışarak Full Stack geliştirme deneyimi kazandım",
    ],
  },
  {
    year: "2025 Temmuz — 2025 Ağustos",
    role: "Backend Developer (Intern)",
    company: "Eywa Bilgi Teknolojileri",
    description: [
      "Java ve Spring Boot kullanarak mikroservis tabanlı backend servisleri geliştirdim",
      "Filo Kiralama Yönetim sistemi projesinde backend geliştirme süreçlerinde aktif rol aldım",
      "3 kişilik geliştirme ekibiyle Agile metodolojisi kullanarak takım içinde çalıştım",
      "Docker kullanarak servislerin container ortamında çalıştırılması ve yönetilmesinde deneyim kazandım",
    ],
  },
  {
    year: "2024 Ağustos - 2024 Eylül",
    role: "Full Stack Developer (Intern)",
    company: "Ketcap Creative",
    description: [
      "Next.js kullanarak web uygulamaları geliştirdim",
      "Node.js ile REST API'ler geliştirdim",
      "Frontend ekibi ile birlikte çalıştım",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 bg-neutral-950 border-y border-neutral-800"
    >
      <Container>
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Deneyimlerim
          </h2>

          <p className="mt-4 text-neutral-400">
            Profesyonel deneyimlerim ve stajlarım.
          </p>
        </div>

        <div className="relative border-l border-white/10 pl-6 flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              year={exp.year}
              role={exp.role}
              company={exp.company}
              description={exp.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
