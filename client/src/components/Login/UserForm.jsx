export default function UserForm({
  username,
  password,
  formType,
  email,
  role,
  handleChange,
  handleSubmit,
}) {
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={handleChange}
          name="username"
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handleChange}
          name="password"
        />
      </label>
      {formType === "signup" && (
        <>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={handleChange}
              name="email"
            />
          </label>
          <label>
            Select a role:
            <select value={role} onChange={handleChange} name="role">
              <option value="">Select...</option>
              <option value="user">User</option>
              <option value="employee">Employee</option>
              <option value="manager">Manager</option>
            </select>
          </label>
        </>
      )}
      { formType === "login" ? <input type="submit" value="Login" /> : <input type="submit" value="Register" />}
    </form>
  );
} 
