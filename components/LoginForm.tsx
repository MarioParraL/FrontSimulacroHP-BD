import { FunctionalComponent } from "preact";

type Props = {
  error?: string;
};

const LoginForm: FunctionalComponent<Props> = (props) => {
  return (
    <form action="/" method="GET">
      <input type="text" name="name" placeholder="name" required />
      <input type="text" name="password" placeholder="password" required />
      <button type="submit" name="mode" value="login">LogIn</button>
      <button type="submit" name="mode" value="register">Register</button>
      {props.error && <p>{props.error}</p>}
    </form>
  );
};

export default LoginForm;
