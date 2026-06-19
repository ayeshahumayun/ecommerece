import React, { useState } from 'react';
import { Video, Mic, MicOff, VideoOff, PhoneOff, MonitorUp, Settings, Maximize } from 'lucide-react';
import './VideoCall.css';

export default function VideoCall() {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [callStatus, setCallStatus] = useState('connected'); // 'waiting', 'connected', 'ended'

  const endCall = () => {
    setCallStatus('ended');
  };

  return (
    <div className="video-call-page">
      <div className="container">
        {callStatus === 'ended' ? (
          <div className="call-ended-state text-center card glass-panel">
            <h2>Call Ended</h2>
            <p>The meeting has been concluded.</p>
            <button className="btn-primary mt-4" onClick={() => setCallStatus('connected')}>Rejoin Meeting</button>
          </div>
        ) : (
          <div className="video-interface">
            <div className="main-video-container">
              {/* Main Participant Video (Mock) */}
              <div className="video-feed main-feed">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Investor" className="feed-image" />
                <div className="participant-info">
                  <span className="badge">Alexander Pierce (Investor)</span>
                </div>
              </div>
              
              {/* Self Video (Mock) */}
              <div className="video-feed self-feed">
                {isVideoOff ? (
                  <div className="video-off-placeholder"><VideoOff size={40} color="#666"/></div>
                ) : (
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="You" className="feed-image" />
                )}
                <div className="participant-info">
                  <span className="badge">You</span>
                </div>
              </div>
            </div>

            <div className="video-controls">
              <div className="control-group">
                <button className="control-btn" title="Settings"><Settings size={22} /></button>
                <button className="control-btn" title="Fullscreen"><Maximize size={22} /></button>
              </div>
              
              <div className="control-group center-controls">
                <button 
                  className={`control-btn ${isMuted ? 'danger' : ''}`}
                  onClick={() => setIsMuted(!isMuted)}
                >
                  {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
                </button>
                <button 
                  className={`control-btn ${isVideoOff ? 'danger' : ''}`}
                  onClick={() => setIsVideoOff(!isVideoOff)}
                >
                  {isVideoOff ? <VideoOff size={24} /> : <Video size={24} />}
                </button>
                <button 
                  className={`control-btn ${isScreenSharing ? 'active' : ''}`}
                  onClick={() => setIsScreenSharing(!isScreenSharing)}
                >
                  <MonitorUp size={24} />
                </button>
                <button className="control-btn end-call" onClick={endCall}>
                  <PhoneOff size={24} />
                </button>
              </div>
              
              <div className="control-group">
                {/* Space for future controls or chat toggle */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
