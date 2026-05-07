"use client";

import React from "react";
import PropTypes from "prop-types";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export const BackgroundLines = ({ children, className, svgOptions }) => {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-zinc-950 text-zinc-50",
        className,
      )}
    >
      <SVG svgOptions={svgOptions} />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

BackgroundLines.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  svgOptions: PropTypes.shape({
    duration: PropTypes.number,
  }),
};

const pathVariants = {
  initial: { strokeDashoffset: 800, strokeDasharray: "50 800" },
  animate: {
    strokeDashoffset: 0,
    strokeDasharray: "20 800",
    opacity: [0, 1, 1, 0],
  },
};

const SVG = ({ svgOptions }) => {
  const paths = [
    "M720 450C720 450 742.459 440.315 755.249 425.626C768.039 410.937 778.88 418.741 789.478 401.499C800.076 384.258 817.06 389.269 826.741 380.436C836.423 371.603 851.957 364.826 863.182 356.242C874.408 347.657 877.993 342.678 898.867 333.214C919.741 323.75 923.618 319.88 934.875 310.177C946.133 300.474 960.784 300.837 970.584 287.701C980.384 274.564 993.538 273.334 1004.85 263.087C1016.15 252.84 1026.42 250.801 1038.22 242.1C1050.02 233.399 1065.19 230.418 1074.63 215.721",
    "M720 450C720 450 741.044 435.759 753.062 410.636C765.079 385.514 770.541 386.148 782.73 370.489C794.918 354.83 799.378 353.188 811.338 332.597C823.298 312.005 825.578 306.419 843.707 295.493C861.837 284.568 856.194 273.248 877.376 256.48C898.558 239.713 887.536 227.843 909.648 214.958C931.759 202.073 925.133 188.092 941.063 177.621",
    "M720 450C720 450 712.336 437.768 690.248 407.156C668.161 376.544 672.543 394.253 665.951 365.784C659.358 337.316 647.903 347.461 636.929 323.197C625.956 298.933 626.831 303.639 609.939 281.01C593.048 258.381 598.7 255.282 582.342 242.504C565.985 229.726 566.053 217.66 559.169 197.116",
    "M720 450C720 450 738.983 448.651 790.209 446.852C841.436 445.052 816.31 441.421 861.866 437.296C907.422 433.172 886.273 437.037 930.656 436.651C975.04 436.264 951.399 432.343 1001.57 425.74C1051.73 419.138 1020.72 425.208 1072.85 424.127C1124.97 423.047 1114.39 420.097 1140.02 414.426",
    "M720 450C720 450 696.366 458.841 682.407 472.967C668.448 487.093 673.23 487.471 647.919 492.882C622.608 498.293 636.85 499.899 609.016 512.944C581.182 525.989 596.778 528.494 571.937 533.778C547.095 539.062 551.762 548.656 536.862 556.816",
    "M720 450C720 450 695.644 482.465 682.699 506.197C669.755 529.929 671.059 521.996 643.673 556.974C616.286 591.951 625.698 590.8 606.938 615.255C588.178 639.71 592.715 642.351 569.76 665.92C546.805 689.49 557.014 687.498 538.136 722.318",
    "M720 450C720 450 765.293 459.346 789.305 476.402C813.318 493.459 825.526 487.104 865.093 495.586C904.659 504.068 908.361 510.231 943.918 523.51C979.475 536.789 963.13 535.277 1009.79 547.428C1056.45 559.579 1062.34 555.797 1089.82 568.96",
    "M720 450C720 450 727.941 430.821 734.406 379.251C740.87 327.681 742.857 359.402 757.864 309.798C772.871 260.194 761.947 271.093 772.992 244.308C784.036 217.524 777.105 200.533 786.808 175.699C796.511 150.864 797.141 144.333 808.694 107.307",
  ];

  const colors = [
    "#22d3ee",
    "#38bdf8",
    "#818cf8",
    "#0ea5e9",
    "#06b6d4",
    "#60a5fa",
    "#6366f1",
    "#14b8a6",
  ];

  return (
    <motion.svg
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
    >
      {paths.map((path, idx) => (
        <motion.path
          key={`path-first-${idx}`}
          d={path}
          stroke={colors[idx]}
          strokeWidth="2.8"
          strokeLinecap="round"
          variants={pathVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: svgOptions?.duration || 7,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            delay: idx * 0.2,
            repeatDelay: 0.8 + (idx % 2),
          }}
        />
      ))}
      {paths.map((path, idx) => (
        <motion.path
          key={`path-second-${idx}`}
          d={path}
          stroke={colors[idx]}
          strokeWidth="2.8"
          strokeLinecap="round"
          variants={pathVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: svgOptions?.duration || 7,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            delay: 1 + idx * 0.18,
            repeatDelay: 1 + (idx % 2),
          }}
        />
      ))}
    </motion.svg>
  );
};

SVG.propTypes = {
  svgOptions: PropTypes.shape({
    duration: PropTypes.number,
  }),
};
