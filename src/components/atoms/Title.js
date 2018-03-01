import React from 'react';

const Title = (props) => {
  const { content, className } = props;

  return (
    <h1 className={className}>{content}</h1>
 );
};

Title.defaultProps = {
  className: '',
  content: '',
}

export default Title;