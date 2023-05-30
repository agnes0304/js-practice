function Header(props) {
  return (
    <>
      <header>
        <h1>My Memo</h1>
        <button onClick={props.onCreatePost}>Create</button>
      </header>
    </>
  );
}

export default Header;
