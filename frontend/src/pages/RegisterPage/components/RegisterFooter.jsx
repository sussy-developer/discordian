import { Link } from 'react-router-dom';

export default function RegisterFooter() {
  return (
    <>
      <div style={{marginTop: '4px'}}>
        <Link to="/login" className="login-link">Already have an account?</Link>
      </div>
      <div className="terms-text">
        By registering, you agree to Discord's <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </div>
    </>
  );
}
