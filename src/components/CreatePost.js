// import { useState } from 'react';
import {firestore} from '../firebase';
import {useFormInput} from '../hooks';
import styled, {css} from 'styled-components';

// import classes from './Button.module.css'

const StyledButton = styled.button`
  height: 33px;
  background: ${(props) => (props.primary ? '#4caf50' : 'blue')};
  border: 0;
  color: #fff;
  padding: 8px;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;
  ${(props) =>
    props.primary &&
    css`
      border: 4px solid ${props.bgColor};
    `};
`;


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

        <StyledButton primary>Create Post</StyledButton>
        {/* <StyledButton primary bgColor="black">Create Post</StyledButton> */}
      </form>
    </div>
  );
}

export default CreatePost;
