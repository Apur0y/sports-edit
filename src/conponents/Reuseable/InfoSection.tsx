import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

interface InfoSectionProps {
  imageUrl: string;
  title: string;
  title2: string | React.ReactNode;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
  className?: string;
  height: number;
  width: number;
}

export default function InfoSection({
  imageUrl,
  className = "",
  title,
  title2,
  description,
  buttonText,
  onButtonClick,
  height,
  width,
}: InfoSectionProps) {
  return (
    <div
      className={`flex flex-col text-black items-center gap-10 md:gap-14 lg:gap-20 md:px-6 py-12  ${className}`}
    >
      {/* Left - Image */}
      <div className="w-full md:w-2/3 mx-auto flex justify-start ">
        
    <div className="relative">
        <Image
          src={imageUrl}
          alt={title}
          className="w-[200px] md:w-[250px] xl:w-[400px] h-auto rounded-lg  "
          height={height}
          width={width}
        />
        <h1  className="text-6xl font-medium overflow-hidden md:text-8xl xl:text-9xl -z-10 text-primary absolute inset-y-0 top-10 xl:top-30 left-45 xl:left-90 -rotate-10">
      Sports <br /> Highlight
    </h1>
    </div>
      </div>

      {/* Right - Content */}
      <div className="w-full md:w-1/3 space-y-8 md:space-y-12">
        <div className="space-y-4 ">
          <h2 className="text-2xl md:text-5xl font-bold leading-tight">
            {title} <span className="text-primary">{title2}</span>
          </h2>

          <p className="text-subtitle md:text-lg text-base ">{description}</p>
        </div>

        {title === "Looking for" ? (
          <Link href="/create-account">
            <button
              onClick={onButtonClick}
              className="px-6 py-3 text-white font-semibold rounded bg-secondary flex hover:bg-black cursor-pointer transition-all duration-300 group"
            >
              {buttonText}
              <BsArrowRight className="my-auto ml-2 transition-transform text-xl mt-1 duration-300 group-hover:translate-x-2" />
            </button>
          </Link>
        ) : (
          <Link href="/jobSeeker/start-now">
            <button
              onClick={onButtonClick}
              className="px-6 py-3 text-white font-semibold rounded bg-secondary flex hover:bg-black cursor-pointer transition-all duration-300 group"
            >
              {buttonText}
              <BsArrowRight className="my-auto ml-2 transition-transform text-xl mt-1 duration-300 group-hover:translate-x-2" />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}