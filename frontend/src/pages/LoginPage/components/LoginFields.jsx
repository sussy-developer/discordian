export default function LoginFields() {
  return (
    <>
      <div className="input-group">
        <label>Email or Phone Number <span>*</span></label>
        <input type="text" required />
      </div>
      
      <div className="input-group">
        <label>Password <span>*</span></label>
        <input type="password" required />
      </div>
    </>
  );
}
