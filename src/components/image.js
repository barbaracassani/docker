import React, { Component } from 'react';

const Image = ({content, alt}) => {
  return (<div>
    <img className="img-fluid" src={content} alt={alt}></img>
  </div>);
};
export default Image;