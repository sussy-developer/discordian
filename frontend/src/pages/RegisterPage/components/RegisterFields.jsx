export default function RegisterFields() {
  return (
    <>
      <div className="input-group">
        <label>Email <span>*</span></label>
        <input type="email" required />
      </div>
      
      <div className="input-group">
        <label>Display Name</label>
        <input type="text" />
      </div>

      <div className="input-group">
        <label>Username <span>*</span></label>
        <input type="text" required />
      </div>
      
      <div className="input-group">
        <label>Password <span>*</span></label>
        <input type="password" required />
      </div>

      <div className="input-group">
        <label>Date of Birth <span>*</span></label>
        <div className="dob-group">
          <select required><option value="">Month</option><option>January</option><option>February</option></select>
          <select required><option value="">Day</option><option>1</option><option>2</option></select>
          <select required><option value="">Year</option><option>2000</option><option>2001</option></select>
        </div>
      </div>
    </>
  );
}
