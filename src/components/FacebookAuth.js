import React, { useEffect } from 'react';

function FacebookLoginComponent() {

  useEffect(() => {
    // Load the Facebook SDK script
    loadFacebookSDK();
  }, []);

  const loadFacebookSDK = () => {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '225260913933852',
        cookie     : true,
        xfbml      : true,
        version    : 'v15.0'
      });

      // Check user login status
      FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
      });
    };

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  };

  const statusChangeCallback = (response) => {
    if (response.status === 'connected') {
      console.log('Logged in', response);
    } else {
      console.log('Please log in to Facebook');
    }
  };

  const shareContent = () => {
    FB.ui({
      method: 'share',
      href: 'https://2-3-sha-ger.com/sharedcontent',
    }, function(response){});
  };

  return (
    <div>
      <button onClick={shareContent}>Share on Facebook</button>
    </div>
  );
}

export default FacebookLoginComponent;
