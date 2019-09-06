import React, { Component } from 'react';

const Link = ({content}) => {
  return (<div><a href={content}>{content}</a></div>);
};
export default Link;