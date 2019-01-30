import ContentLoader from "react-content-loader";
import React from "react";

const Loader = props => (
  <ContentLoader
    height={400}
    width={400}
    speed={3}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="-1.33" rx="5" ry="5" width="400" height="400" />
  </ContentLoader>
);

export default Loader;
