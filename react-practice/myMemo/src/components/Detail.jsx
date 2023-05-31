import classes from "./Detail.module.css";

function Detail(props) {
  return (
    <div className={classes.card}>
      <section className={classes.header}>
        <h2 className={classes.author}>{props.data.name}</h2>
        <div>
          <button className={classes.button}>
            <img src="src/assets/edit.png" alt="edit icon" />
          </button>
          <button className={classes.button}>
            <img src="src/assets/remove.png" alt="remove icon" />
          </button>
          <button className={classes.button} onClick={props.onClose}>
            <img src="src/assets/cancel.png" alt="cancel icon" />
          </button>
        </div>
      </section>
      <p className={classes.text}>{props.data.body}</p>
    </div>
  );
}

export default Detail;
