import PropTypes from "prop-types";

// primary button
const ButtonPrimary = ({
  href,
  target = "_self",
  label,
  icon,
  classes,
  download,
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        download={download}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={"btn btn-primary " + (classes ?? "")}
      >
        {label}

        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-primary " + (classes ?? "")}>
        {label}

        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

ButtonPrimary.PropTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
  download: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

//outline
const ButtonOutline = ({ href, target = "_self", label, icon, classes }) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={"btn btn-outline " + (classes ?? "")}
      >
        {label}

        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-outline " + (classes ?? "")}>
        {label}

        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

ButtonOutline.PropTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

export { ButtonPrimary, ButtonOutline };
