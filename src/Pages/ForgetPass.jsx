import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { auth } from '../provider/Authprovider';
import { sendPasswordResetEmail } from 'firebase/auth';
import { Helmet } from 'react-helmet-async';

const ForgetPass = () => {
  const location = useLocation();
  const passedEmail = location.state?.email || "";

  const [email, setEmail] = useState(passedEmail);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = () => {
    setMessage("");
    setError("");

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage("Password reset email sent. Redirecting to Gmail...");
        setTimeout(() => {
          window.open("https://mail.google.com", "_blank");
        }, 1500);
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="w-full max-w-sm mx-auto mt-16 p-6 bg-white shadow-md rounded-md">
      <Helmet>
        <title>ForgetPassword | Local Events</title>
      </Helmet>
      <h2 className="text-xl font-bold mb-4">Reset Your Password</h2>
      <label className="label">Email</label>
      <input
        type="email"
        className="input w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
      />
      <button onClick={handleResetPassword} className="btn btn-primary mt-4 w-full">
        Reset Password
      </button>
      {message && <p className="text-green-500 mt-3">{message}</p>}
      {error && <p className="text-red-500 mt-3">{error}</p>}
    </div>
  );
};

export default ForgetPass;
