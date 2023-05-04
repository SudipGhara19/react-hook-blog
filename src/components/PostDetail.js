import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";


function PostDetail(){
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    firestore.collection('posts').doc(postId).get().then((snapshot) => {
      setPost(snapshot.data());
    })
  }, []);


    return( 
    <div className="post-detail">
      <h1>{post.title}</h1>
      <h2>{post.subTitle}</h2>
      <h3>{post.content}</h3>
      <p>{post.time}</p>
    </div>
    );
  }
  
  export default PostDetail;
  