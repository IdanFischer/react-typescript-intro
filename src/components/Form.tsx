export default function Form() {
  return (
    <>
      <form className="form-flex" action="submit">

        <label className="quick-margin" htmlFor="first name">First Name</label>
        <input type="text" id="first name" />

        <label className="quick-margin" htmlFor="last name">Last Name</label>
        <input type="text" id="last name" />

        <label className="quick-margin" htmlFor="email">Email</label>
        <input type="email" id="email" />

        <label className="quick-margin" htmlFor="password">Password</label>
        <input type="password" id="password" />

      </form>
    </>
  );
}