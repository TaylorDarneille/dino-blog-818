import React, {Component} from 'react'

class Post extends Component {
    render(){
        const comments = this.props.comments.map((c, i)=>{
            return <li key={i}>{c}</li>
        })
        return (
            <>
                <h3>{this.props.title}</h3>
                <p>{this.props.body}</p>
                <p>-{this.props.author}</p>
                <ul>{comments}</ul>
            </>
        )
    }
}

export default Post