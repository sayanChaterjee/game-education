import Lottie from "lottie-react";
import Animation from "../assets/Animation.json";
import TypewriterComponent from "typewriter-effect";

const Hero = () => {
  return (
    <div className="flex flex-row items-center justify-evenly px-5">
      <div className="flex flex-col items-start gap-4 w-1/2">
        <h1 className="text-3xl font-bold text-green-700 ">
          <TypewriterComponent
            options={{
              strings: ["Learn by playing"],
              autoStart: true,
              loop: true,
            }}
          />{" "}
        </h1>
        <p className="font-semibold line-clamp-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
          quod corrupti sed ullam animi quae mollitia, similique illum, qui
          tempore ab asperiores ducimus eaque doloribus provident in perferendis
          ex ratione praesentium dolores! Hic ipsam, rem dolore tenetur veniam
          nulla quod. Doloribus, facilis quae numquam distinctio ipsa quibusdam
          veniam voluptatem culpa.
        </p>
      </div>
      <Lottie animationData={Animation} />
    </div>
  );
};

export default Hero;
