import classes from "./Detail.module.css";

function Detail(props) {
  return (
    <div>
      <section className={classes.header}>
        <h2 className={classes.author}>{props.name}</h2>
        <div className={classes.button}>
          <button>
            <img src="src/assets/edit.png" alt="edit icon" />
          </button>
          <button>
            <img src="src/assets/remove.png" alt="remove icon" />
          </button>
        </div>
      </section>
      <p className={classes.text}>{props.body}</p>
    </div>
  );
}

export default Detail;
