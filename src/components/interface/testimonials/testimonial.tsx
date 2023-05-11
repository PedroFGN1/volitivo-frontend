import { Text } from "@/components/ui/text";
import path from 'path';

type TestimonialProps = {
  srcImage: string;
  description: string;
  name: string;
  job: string;
};

export const Testimonial = ({
  srcImage,
  description,
  name,
  job,
}: TestimonialProps) => {
  return (
    <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
      <img className="h-12 self-start" src={srcImage} alt="" />
      <figure className="mt-10 flex flex-auto flex-col justify-between">
        <blockquote className="text-lg leading-8 text-white">
          <Text className="text-white">{description}</Text>
        </blockquote>
        <figcaption className="mt-10 flex items-center gap-x-6">
          <img
            className="h-14 w-14 rounded-full bg-gray-800"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="text-base">
            <div className="font-semibold text-white">{name}</div>
            <div className="mt-1 text-gray-400">{job}</div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};
