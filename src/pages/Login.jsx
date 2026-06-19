import React, { useState } from 'react';
import { Lock, User, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import './Login.css';

export default function Login() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [role, setRole] = useState('investor');

  // Password strength logic
  const calculateStrength = (pass) => {
    let strength = 0;
    if (pass.length > 7) strength += 25;
    if (pass.match(/[A-Z]/)) strength += 25;
    if (pass.match(/[0-9]/)) strength += 25;
    if (pass.match(/[^A-Za-z0-9]/)) strength += 25;
    return strength;
  };

  const strength = calculateStrength(password);
  
  const handleLogin = (e) => {
    e.preventDefault();
    setStep(2); // Move to 2FA
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) value = value.slice(-1);
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto-advance logic could go here
  };

  const handleVerify = (e) => {
    e.preventDefault();
    setStep(3); // Move to success
  };

  return (
    <div className="login-page">
      <div className="login-container card glass-panel">
        
        {step === 1 && (
          <div className="login-step animation-fade">
            <div className="text-center mb-4">
              <div className="icon-circle mx-auto mb-3"><Lock size={28} /></div>
              <h2>Welcome Back</h2>
              <p className="text-muted">Sign in to your account securely.</p>
            </div>

            <div className="role-selector mb-4">
              <button 
                className={`role-btn ${role === 'investor' ? 'active' : ''}`}
                onClick={() => setRole('investor')}
              >
                Investor
              </button>
              <button 
                className={`role-btn ${role === 'entrepreneur' ? 'active' : ''}`}
                onClick={() => setRole('entrepreneur')}
              >
                Entrepreneur
              </button>
            </div>

            <form onSubmit={handleLogin}>
              <div className="form-group mb-3">
                <label>Email Address</label>
                <div className="input-group d-flex align-center">
                  <User className="input-icon" size={18} />
                  <input 
                    type="email" 
                    className="form-input w-100 pl-4" 
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group mb-4">
                <div className="d-flex justify-between">
                  <label>Password</label>
                  <a href="#" className="text-sm link-primary">Forgot?</a>
                </div>
                <div className="input-group d-flex align-center">
                  <Lock className="input-icon" size={18} />
                  <input 
                    type="password" 
                    className="form-input w-100 pl-4" 
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                {password.length > 0 && (
                  <div className="password-strength mt-2">
                    <div className="strength-bar-container">
                      <div 
                        className={`strength-bar ${strength <= 25 ? 'bg-danger' : strength <= 50 ? 'bg-warning' : strength <= 75 ? 'bg-info' : 'bg-success'}`}
                        style={{ width: `${strength}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-muted mt-1 d-block">
                      {strength <= 25 ? 'Weak' : strength <= 50 ? 'Fair' : strength <= 75 ? 'Good' : 'Strong'}
                    </span>
                  </div>
                )}
              </div>

              <button type="submit" className="btn-primary w-100 btn-lg d-flex justify-center align-center gap-2">
                Continue <ArrowRight size={18} />
              </button>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="login-step animation-fade text-center">
            <div className="icon-circle mx-auto mb-3 bg-primary-light"><Shield size={28} className="text-primary" /></div>
            <h2>Two-Factor Auth</h2>
            <p className="text-muted mb-4">Enter the 6-digit code sent to your device.</p>

            <form onSubmit={handleVerify}>
              <div className="otp-container mb-4">
                {otp.map((digit, index) => (
                  <input 
                    key={index}
                    type="text"
                    maxLength="1"
                    className="otp-input"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                  />
                ))}
              </div>

              <button type="submit" className="btn-primary w-100 btn-lg">
                Verify & Login
              </button>
              
              <p className="mt-4 text-sm text-muted">
                Didn't receive the code? <button type="button" className="btn-link p-0 link-primary">Resend</button>
              </p>
            </form>
          </div>
        )}

        {step === 3 && (
          <div className="login-step animation-fade text-center py-4">
            <CheckCircle size={64} className="text-success mx-auto mb-3" />
            <h2>Login Successful!</h2>
            <p className="text-muted mb-4">Welcome to your {role} dashboard.</p>
            <button className="btn-primary w-100 btn-lg" onClick={() => window.location.href='/'}>
              Go to Dashboard
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
