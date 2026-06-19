import React, { useState } from 'react';
import Joyride, { STATUS } from 'react-joyride';

export default function Walkthrough() {
  const [run, setRun] = useState(true);

  const steps = [
    {
      target: '.nav-links',
      content: 'Welcome to the platform! Navigate through the different modules here.',
      disableBeacon: true,
    },
    {
      target: '.search-bar',
      content: 'Search for deals, projects, or documents instantly.',
    },
    {
      target: '.header-actions a[href="/login"]',
      content: 'Access your Investor or Entrepreneur dashboard here.',
    }
  ];

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];
    
    if (finishedStatuses.includes(status)) {
      setRun(false);
    }
  };

  return (
    <Joyride
      callback={handleJoyrideCallback}
      continuous
      hideCloseButton
      run={run}
      scrollToFirstStep
      showProgress
      showSkipButton
      steps={steps}
      styles={{
        options: {
          zIndex: 10000,
          primaryColor: '#0d6efd',
          backgroundColor: '#ffffff',
          textColor: '#333',
        }
      }}
    />
  );
}
