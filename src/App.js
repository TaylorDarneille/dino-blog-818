import React, {Component} from 'react'
import './App.css';
import Post from './Post.js'

class App extends Component {
  render(){
    const post = {
      title: "Dinosaurs are awesome",
      author: "Stealty Stegosaurus",
      body: "check out this body property!",
      comments: [
        "First!", 
        "Great post", 
        "Hire this author now!"
      ]
    }
  
    return (
      <Post 
        title={post.title}
        author={post.author}
        body={post.body}
        comments={post.comments}
      />
    )
  }
}

export default App;
