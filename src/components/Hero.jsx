import { ButtonOutline } from "./Button";
import { BackgroundLines } from "./ui/background-lines";

const Hero = () => {
  return (
    <section id="home">
      <BackgroundLines className="min-h-screen justify-start pt-28 lg:pt-36">
        <div
          className="container lg:grid lg:grid-cols-2 items-center 
        lg:gap-10"
        >
          <div>
            <div className="flex items-center gap-3">
              <figure className="img-box w-9 h-9 rounded-lg">
                <img
                  src="/assets/cha-dp.jpg"
                  width={40}
                  height={40}
                  alt="Z profile picture"
                  className="img-cover"
                />
              </figure>
              <div
                className="flex items-center gap-1.5 text-zinc-400 
              text-sm tracking-wide"
              >
                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                  <span
                    className="absolute inset-0 rounded-full 
                  bg-green-400 animate-ping"
                  ></span>
                </span>
                Birthday Girl
              </div>
            </div>
            <h2
              className="max-w-[15ch] sm:max-w-[20ch] 
            lg:max-w-[15ch] mt-5 lg:mb-10 text-5xl leading-tight font-semibold
            lg:text-[55px] lg:leading-[1.15] text-zinc-50"
            >
              A Day Made For Someone Truly Special
            </h2>
            <div className="flex items-center gap-3 mt-3">
              <ButtonOutline
                href="#projects"
                label="Scroll down"
                icon="arrow_downward"
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <figure
              className="w-full max-w-[320px] ml-auto
             to-65% rounded-[60px] overflow-hidden"
            >
              <img
                src="/assets/cha-portrait.JPG"
                width={656}
                height={800}
                alt="Z Hero Banner"
                className="w-[20rem]"
              />
            </figure>
          </div>
        </div>
      </BackgroundLines>
    </section>
  );
};

export default Hero;
