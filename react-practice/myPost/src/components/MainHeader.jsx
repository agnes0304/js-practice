import { MdMessage, MdPostAdd } from "react-icons/md"; // 아이콘 쓰기 위함. npm install 해줘야 사용할 수 있음.
import classes from './MainHeader.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        Message Poster
      </h1>
      <p>
        <button className={classes.button}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}

export default MainHeader;