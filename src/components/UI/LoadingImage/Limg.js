import React from "react";
import Img from "react-image";
import Loader from "./Loader";

const Limg = props => (
  <Img
    {...props}
    loader={<Loader height={props.height} width={props.width} />}
  />
);

export default Limg;
