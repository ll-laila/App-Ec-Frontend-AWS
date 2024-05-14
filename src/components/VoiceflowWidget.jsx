import React, { useEffect } from 'react';

const VoiceflowWidget = () => {
  useEffect(() => {
    const loadVoiceflowWidget = () => {
      const script = document.createElement('script');
      script.onload = () => {
        window.voiceflow.chat.load({
          verify: { projectID: '6643361d0727ee135bc09fb4' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production'
        });
      };
      script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
      script.type = 'text/javascript';
      document.getElementsByTagName('head')[0].appendChild(script);
    };

    loadVoiceflowWidget();

  
  }, []);

  return (
    <div>
      {/* */}
    </div>
  );
};

export default VoiceflowWidget;
