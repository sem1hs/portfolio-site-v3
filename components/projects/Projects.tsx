import Container from "@/app/container";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "SemihScore Futbol Haber Sitesi",
    description:
      "Bitirme projesi olarak geliştirdiğim projede Spring Cloud ile mikroservis mimarisi kullanarak backend tarafını tasarladım. Eureka, Config Server gibi özellikleri ekledim ve 10 tane mikroservis oluşturdum. Feign Client kullanarak gereken yerlerde iletişimi sağladım. API Gateway kullandım ve istekleri tek noktadan diğer servislere ulaştırdım. Servisleri Eureka’ya kaydederek load balancing yapılmasını sağladım. Veri tabanı olarak PostgreSQL kullandım. Frontend tarafını Next.js, Typescript ve React kullanarak tasarladım. Admin paneli, fikstür, puan durumu, futbol haberleri gibi sayfalar oluşturdum. Liglere göre filtreleme işlemleri yaptım. Tüm servisleri ayrı ayrı GitHub repositorysinde tutuyorum.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "Spring Security",
      "Eureka",
      "React",
      "Typescript",
      "PostgreSQL",
      "Docker",
    ],
    image: "",
  },
  {
    title: "Biri Pazaryeri Uygulaması",
    description:
      "Biri Teknoloji altında pazaryeri uygulaması projesinde backend tarafında geliştirmeler yaptım. Elasticsearch, Debezium, Kafka gibi teknolojileri kullanarak performanslı arama yapılabilmesini sağladım. Spring Boot ile REST API’ler oluşturdum. Firebase ile mobil cihazlara Push Notification gönderme ve Firebase Authentication Mail doğrulama işlemleri yaptım. Kullanıcıların bilgilerine göre onlara hizmet öneren Sana Özel Algoritma'sını geliştirdim. Elasticsearch filtreleri ile birleştirerek konuma ve puana göre filtreleme işlemini gerçekleştirdim. Google Maps kullanarak kullanıcıların konumlarını alıp onlara etraflarındaki hizmetleri gösteren sistemi geliştirdim.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Securtiy",
      "Elasticsearch",
      "Kafka",
      "Redis",
    ],
    image: "",
  },
  {
    title: "Ata Medya Landing Page",
    description:
      "Stajım sırasında Ata Medya için geliştirdiğim bu projede, Next.js kullanarak modern ve responsive tasarım oluşturdum. SEO optimizasyonlarına özen göstererek web sitesinin daha görünür olmasını sağladım. Gerçek dünya standartlarına uygun bir yapı tasarlayarak performans ve kullanıcı deneyimi açısından verimli bir sonuç elde ettim.",
    technologies: ["Next.js", "Node.js", "Javascript"],
    image: "/ata-medya-landing-page.png",
  },
  {
    title: "Filo Kiralama Yönetim",
    description:
      "Filo Kiralama Yönetim projesinde 5-6 kişilik bir ekip ile geliştirdiğimiz bir web uygulamasıdır. Projede Spring Boot kullanarak araç kiralama, rezervasyon ve araç yönetimi servislerini tasarladım. Veri tabanı için PostgreSQL veritabanı kullandık ve sistemin tüm işlemlerini RESTful API’ler aracılığıyla sağladık. Uygulama, araç durum takibi, rezervasyon yönetimi ve araç kiralama gibi işlevleri etkin şekilde desteklemektedir.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "Mikroservis Mimarisi",
      "PostgreSQL",
    ],
    image: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <Container>
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Projelerim
          </h2>

          <p className="mt-4 text-neutral-400">
            Şimdiye kadar yer aldığım bazı projeler.
          </p>
        </div>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
        "
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
