export default function UserForm({
  onSubmit,
  username,
  password,
  setPassword,
  formType,
  email,
  setEmail,
  selectedRole,
  handleChange
}) {
  return (
    <form className="login-form" onSubmit={onSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {formType === "signup" && (
        <>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Select a role:
            <select value={selectedRole} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="user">User</option>
              <option value="employee">Employee</option>
              <option value="manager">Manager</option>
            </select>
          </label>
        </>
      )}
      { formType === "login" ? <input type="submit" value="Log In" /> : <input type="submit" value="Register" />}
    </form>
  );
} 
