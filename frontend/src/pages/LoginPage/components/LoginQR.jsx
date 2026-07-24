export default function LoginQR() {
  return (
    <div className="login-qr">
      <div className="qr-placeholder">
        <svg viewBox="0 0 100 100" style={{width: '100%', height: '100%', fill: '#000'}}>
          <path d="M10,10 h30 v30 h-30 z M15,15 h20 v20 h-20 z" />
          <path d="M60,10 h30 v30 h-30 z M65,15 h20 v20 h-20 z" />
          <path d="M10,60 h30 v30 h-30 z M15,65 h20 v20 h-20 z" />
          <rect x="50" y="50" width="10" height="10" />
          <rect x="65" y="60" width="10" height="10" />
          <rect x="80" y="50" width="10" height="10" />
          <rect x="50" y="75" width="10" height="10" />
          <rect x="75" y="75" width="15" height="15" />
          <rect x="30" y="45" width="10" height="10" />
          <rect x="45" y="30" width="10" height="10" />
        </svg>
      </div>
      <h3>Log in with QR Code</h3>
      <p>Scan this with the <strong>Discord mobile app</strong> to log in instantly.</p>
    </div>
  );
}
