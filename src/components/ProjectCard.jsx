import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, alt, classes, onImageClick }) => {
  return (
    <div
      className={
        "relative rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " +
        classes
      }
    >
      <button
        type="button"
        className="block w-full text-left"
        onClick={() => onImageClick?.(imgSrc)}
        aria-label="Open image preview"
      >
        <figure className="img-box aspect-square rounded-lg overflow-hidden">
          <img
            src={imgSrc}
            alt={alt}
            loading="lazy"
            className="img-cover cursor-zoom-in"
          />
        </figure>
      </button>
      <div className="flex items-center justify-between gap-4"></div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string,
  classes: PropTypes.string,
  onImageClick: PropTypes.func,
};

export default ProjectCard;
