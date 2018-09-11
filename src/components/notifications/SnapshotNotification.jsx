import {library} from '@fortawesome/fontawesome-svg-core';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import partial from 'lodash-es/partial';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {t} from 'i18next';

library.add(faCheckCircle);

export default function SnapshotNotification({
  metadata,
  onUpdateMetadata,
}) {
  const uri = document.createElement('a');
  uri.setAttribute('href', '/');
  uri.search = `snapshot=${metadata.get('snapshotKey')}`;

  let checkmark;
  if (metadata.get('isCopied')) {
    checkmark = [
      ' ',
      <FontAwesomeIcon icon="check-circle" key="icon" />,
    ];
  }

  return (
    <span>
      {t('notifications.snapshot-created')}{' '}
      <CopyToClipboard
        text={uri}
        onCopy={
          partial(onUpdateMetadata, {isCopied: true})
        }
      >
        <span className="u__link">
          {t('notifications.click-to-copy')}
        </span>
      </CopyToClipboard>
      {checkmark}
    </span>
  );
}

SnapshotNotification.propTypes = {
  metadata: ImmutablePropTypes.contains({
    snapshotKey: PropTypes.string.isRequired,
    isCopied: PropTypes.bool,
  }).isRequired,
  onUpdateMetadata: PropTypes.func.isRequired,
};
