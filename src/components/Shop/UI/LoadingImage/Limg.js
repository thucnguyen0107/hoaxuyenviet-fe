import React from 'react';
import Img from 'react-image';
import Loader from './Loader';


const Limg = props => (
  <Img {...props} loader={<Loader />} />
)

export default Limg;