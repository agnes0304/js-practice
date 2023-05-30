import classes from "./Header.module.css";

function Header(props) {
  return (
      <header className={classes.header}>
        <h1 className={classes.title}>My Memo</h1>
        <button className={classes.button} onClick={props.onCreatePost}>
          <img src="src/assets/newpost.png" />Create
        </button>
      </header>
  );
}

export default Header;
