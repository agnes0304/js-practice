import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link, Form, redirect } from "react-router-dom";

function NewPost(props) {

  return (
    <Modal>
      <Form method='post' className={classes.form}>
        <p>
          <label htmlFor="name">Leave your name</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            name="author"
          />
        </p>
        <p>
          <label htmlFor="body">Leave your memo</label>
          <textarea
            required
            id="body"
            rows={3}
            placeholder="Memo"
            name="body"
          />
        </p>
        <p className={classes.actions}>
          <button>Write</button>
          <Link to='/' type="button" className={classes.link}>
            Cancel
          </Link>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}) {
  const formData = await request.formData();
  formData.get('body')
  formData.get('author')
  const postData = Object.fromEntries(formData); // 키값 오브젝트를 만들어줘
  await fetch('http://localhost:8080/post', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return redirect('/');
}