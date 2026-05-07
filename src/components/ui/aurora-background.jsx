"use client";

import React from "react";
import PropTypes from "prop-types";
import { cn } from "../../lib/utils";

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    <main>
      <div
        className={cn(
          "transition-bg relative flex min-h-screen flex-col items-center justify-center bg-zinc-900 text-zinc-50",
          className,
        )}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            "--aurora":
              "repeating-linear-gradient(100deg,#06b6d4_10%,#38bdf8_15%,#60a5fa_20%,#818cf8_25%,#22d3ee_30%)",
            "--dark-gradient":
              "repeating-linear-gradient(100deg,#09090b_0%,#09090b_7%,transparent_10%,transparent_12%,#09090b_16%)",
            "--white-gradient":
              "repeating-linear-gradient(100deg,#f0f9ff_0%,#f0f9ff_7%,transparent_10%,transparent_12%,#f0f9ff_16%)",
            "--blue-300": "#7dd3fc",
            "--blue-400": "#22d3ee",
            "--blue-500": "#06b6d4",
            "--indigo-300": "#60a5fa",
            "--violet-200": "#818cf8",
            "--black": "#09090b",
            "--white": "#fff",
            "--transparent": "transparent",
          }}
        >
          <div
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--dark-gradient),var(--aurora)] [background-size:220%,_160%] [background-position:50%_50%,50%_50%] opacity-20 blur-[16px] filter will-change-transform [animation-duration:90s] [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)] after:[background-size:180%,_90%] after:[background-attachment:fixed] after:mix-blend-screen after:opacity-35 after:content-[""]`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
            )}
          ></div>
        </div>
        <div className="relative z-10 w-full">{children}</div>
      </div>
    </main>
  );
};

AuroraBackground.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  showRadialGradient: PropTypes.bool,
};
