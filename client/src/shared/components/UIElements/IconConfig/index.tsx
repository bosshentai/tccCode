import React from "react";

import styles from "./styles.module.scss";

type IconProps = {
  image: string;
  alt?: string;
  className?: string;
  styles?: {
    width?: string;
    height?: string;
  };
};

export const IconConfig = (props: IconProps) => {
  return (
    <div
      className={`${styles.iconContainer} ${props.className}`}
      style={props.styles}
    >
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.styles?.width, height: props.styles?.height }}
      />
    </div>
  );
};
