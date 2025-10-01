// ComingSoonMessage.jsx
import React, { useState, useEffect } from "react";
import "./ComingSoonMessage.css"; // optional CSS for styling

const ComingSoonMessage = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const appearTimer = setTimeout(() => setShow(true), 1000); // 2 sec delay
    const hideTimer = setTimeout(() => setShow(false), 5000); // show for 3 sec (2+3)
    return () => {
      clearTimeout(appearTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="coming-soon-message">
      This website is currently under work
    </div>
  );
};

export default ComingSoonMessage;
