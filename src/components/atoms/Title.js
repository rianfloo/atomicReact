import React from 'react';

const Title = (props) => {
  const { content, className } = props;

  return (
    <h1 className={className}>{content}</h1>
 );
};

Title.defaultProps = {
  className: '',
  Content: '',
}

export default Title;