"use client";

import Button from "@/components/Button";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div className="padding-container max-container flex flex-col md:flex-row gap-4 items-center py-8 md:pt-20">
      <div className="md:w-[50%] flex md:block flex-col items-center md:items-start justify-center text-center md:text-left">
        <div className="flex items-end justify-end">
        </div>
        <h5 className="text-3xl md:text-7xl dark:text-white text-purple-500 font-pacifico">
          A little about myself
        </h5>
        <h1 className="text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r dark:from-orange-300 dark:via-purple-200 dark:to-blue-400 from-orange-900 via-purple-900 to-blue-900 font-semibold animate-gradient">
          Software Developer
        </h1>
        <div className="min-h-20 py-2">
          <TypeAnimation
            sequence={[
              "Madara is a software developer driven by process,passionate about learning,and an open minded thinker. Eager to tackle cutting-edge problem and build inovative solutions,continously exploring new technologies to create impactful and efficient software.",
              2000,
            ]}
            wrapper="p"
            speed={80}
            style={{ display: "inline-block" }}
            className=""
          />
        </div>
        <Link href="mailto:disicheri@gmail.com" target="_blank">
          <Button
            type="button"
            variant="gradient"
            className="my-4 hover:animate-pulse hover:scale-105 transition-all duration-500"
          >
           TAP IN ✔✔
          </Button>
        </Link>
      </div>
      <div className="w-full md:w-[50%] bg-contain bg-no-repeat bg-center h-[200px] md:h-[450px] bg-banner rounded"
       style={{
        backgroundImage: `url(/images/madara.png)`,
      }}
      >
      </div>
    </div>
  );
};

export default HeroSection;
