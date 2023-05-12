import { Text } from "@/components/ui/text";
import { Testimonial } from "./testimonial";


const testimonialsContent = [
  {
    srcImage: "public/logo.png",
    description:
      "Na Volitivo nós temos acesso completo e gratuito, me ajudou bastante ter todas as questões separadas por tópicos e bancas.",
    name: "Julia kaylani",
    job: "Estudante",
  },
  {
    srcImage: "",
    description:
      "Devo muito da minha aprovação a Volitivo, estudei muito por outros métodos, mas só depois de encontrar o banco de questões da Volitivo que pude progredir de fato.",
    name: "Mariana Pâmela",
    job: "Concursada",
  },
];

export const Testimonials = () => {
  return (
    <section className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonialsContent.map((testimonial) => (
            <Testimonial key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
