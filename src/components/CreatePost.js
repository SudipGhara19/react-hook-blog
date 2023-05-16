// import { useState } from 'react';
import {firestore} from '../firebase';
import {useFormInput} from '../hooks';

import classes from './Button.module.css'

function CreatePost() {
  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log('title', title);
    console.log('subTitle', subTitle);
    console.log('content', content);

    firestore.collection('posts').add({
      title: title.value,
      content: content.value,
      subTitle: subTitle.value,
      createdAt: new Date(),
    })
  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input value={title.value} onChange={title.onchange}/>
        </div>

        <div className="form-field">
          <label>Sub Title</label>
          <input value={subTitle.value} onChange={subTitle.onchange} />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea value={content.value} onChange={content.onchange} ></textarea>
        </div>

        <button className="classes.createPostButton">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
