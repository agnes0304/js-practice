import { Link } from "react-router-dom";
import classes from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.title}>My Memo</h1>
        <Link to="/create-post" className={classes.button}>
          <img src="src/assets/newpost.png" />  
          Create
        </Link>
      </header>
      <hr />
    </>
  );
}

export default Header;
