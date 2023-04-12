import { Text } from "@/components/ui/text";
import { Testimonial } from "./testimonial";

const testimonialsContent = [
  {
    srcImage: "https://tailwindui.com/img/logos/reform-logo-white.svg",
    description:
      "Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.",
    name: "Joseph Rodriguez",
    job: "CEO of Reform",
  },
  {
    srcImage: "https://tailwindui.com/img/logos/reform-logo-white.svg",
    description:
      "Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.",
    name: "Joseph Rodriguez alves",
    job: "CEO of Reform",
  },
];

export const Testimonials = () => {
  return (
    <section className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {testimonialsContent.map((testimonial) => (
            <Testimonial key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
