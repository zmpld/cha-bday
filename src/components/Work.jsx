import ProjectCard from "./ProjectCard";
import { useCallback, useMemo, useState } from "react";
import ImageLightbox from "./ui/ImageLightbox";

const works = [
  {
    imgSrc: "/assets/c16.JPEG",
  },
  {
    imgSrc: "/assets/c17.JPG",
  },
  {
    imgSrc: "/assets/c6.jpg",
  },
  {
    imgSrc: "/assets/c19.JPEG",
  },
  {
    imgSrc: "/assets/c20.JPG",
  },
  {
    imgSrc: "/assets/c21.JPG",
  },
  {
    imgSrc: "/assets/c22.JPG",
  },
  {
    imgSrc: "/assets/c23.JPG",
  },
  {
    imgSrc: "/assets/c1.jpg",
  },
  {
    imgSrc: "/assets/c12.jpg",
  },
  {
    imgSrc: "/assets/c3.JPEG",
  },
  {
    imgSrc: "/assets/c4.jpg",
  },
  {
    imgSrc: "/assets/c5.jpg",
  },

  {
    imgSrc: "/assets/c7.jpg",
  },
  {
    imgSrc: "/assets/c8.jpg",
  },
  {
    imgSrc: "/assets/c9.jpg",
  },
  {
    imgSrc: "/assets/c10.jpg",
  },
  {
    imgSrc: "/assets/c11.jpg",
  },
  {
    imgSrc: "/assets/c2.jpg",
  },
  {
    imgSrc: "/assets/c13.jpg",
  },
  {
    imgSrc: "/assets/c12.jpg",
  },
  {
    imgSrc: "/assets/c14.jpg",
  },
];

const Work = () => {
  const [activeSrc, setActiveSrc] = useState(null);

  const activeAlt = useMemo(() => {
    if (!activeSrc) return "";
    const file = activeSrc.split("/").pop() ?? "photo";
    return `Photo ${file}`;
  }, [activeSrc]);

  const openPreview = useCallback((src) => setActiveSrc(src), []);
  const closePreview = useCallback(() => setActiveSrc(null), []);

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Stories We Share</h2>

        <div className="grid gap-x-2 gap-y-3 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              alt={`Story photo ${key + 1}`}
              classes="reveal-up"
              onImageClick={openPreview}
            />
          ))}
        </div>
      </div>

      <ImageLightbox
        isOpen={Boolean(activeSrc)}
        src={activeSrc ?? undefined}
        alt={activeAlt}
        onClose={closePreview}
      />
    </section>
  );
};

export default Work;
