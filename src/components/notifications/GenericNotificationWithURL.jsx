import PropTypes from 'prop-types';
import React from 'react';

export default function GenericNotificationWithURL({text, url, linkText}) {
  return (
    <span>
      {text}{' '}
      <a href={url} rel="noopener noreferrer" target="_blank">
        {linkText}
      </a>
    </span>
  );
}

GenericNotificationWithURL.propTypes = {
  linkText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
