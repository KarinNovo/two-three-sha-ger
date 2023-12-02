import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const InstagramCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      // Handle the Instagram authorization code
      // Send code to the backend to exchange for an access token
    } else {
      // Handle errors or redirect to another page
      navigate('/path'); // Corrected use of navigate
    }
  }, [navigate]);

  return (
    <div>
      <h2>Instagram Callback</h2>
      {/* Render appropriate UI elements */}
    </div>
  );
};

export default InstagramCallback;
