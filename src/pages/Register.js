export function Register() {
  return (
    <form>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="youremail@gmail.com"
      />
      <label htmlFor="email">Email</label>

      <input type="password" name="password" id="password" />
      <label htmlFor="password">Password</label>

      <button>Register</button>
    </form>
  );
}
