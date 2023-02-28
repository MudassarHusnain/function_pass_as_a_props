import React, { Component } from 'react'
const user = {
    name: "Mudassar Jutt",
    lastname: "jutt sab"
};
class User extends Component {
    constructor() {
        super();
        console.log("this is a constructor");
        this.state = { count: 0 };

    }
    componentDidUpdate(preprops, prestate, snapshot) {
        console.log(this.state.count)
    }
    componentDidMount() {
        console.log("this is the component did mount block");
    }
    componentWillUnmount() {
        console.log("this is the componentwillunmount in react js")
    }
    shouldComponentUpdate() {
        return true;
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.age}</p>
                <h1>{this.state.count}</h1>
                <h1>user details: {user.name} {user.lastname}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>update</button>
            </div>)
    }
}
export default User