import React, { useState } from 'react';
import Button from './reusable/Button';

function ShareButton({ showPopup, closePopup }) {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    const copyText = document.getElementById('linkInput');
    copyText.select();
    document.execCommand('copy');
    setCopySuccess(true);
  };

  return (
    <div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Share this link</h2>
            <input
              id="linkInput"
              type="text"
              value="An embedded link...dddddddddddddddddddhdddddddddddddddddddddddddddddddddddddddddhdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
              // readOnly
            />
            <div className='button-group'>
            <Button onClick={copyToClipboard}>
              {copySuccess ? 'Copied!' : 'Copy Link'}
            </Button>
            <Button onClick={closePopup}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShareButton;

