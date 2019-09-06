import React, { Component } from 'react';
import Title from './title';
import Link from './link';
import Image from './image';

const Block = ({ title, link, imageUrl }) => {
  return (<div className="row">
    <div className="col-sm-4 text align-self-center">
      <Title content={title} />
      <Link content={link}/>
    </div>
    <div className="col-sm-8">
      <div className="image-container">
      <Image content={imageUrl} alt={link}/>
      </div>
    </div>
  </div>);
};
export default Block;