import React  from 'react'
import ReactDOM   from 'react-dom'

console.log("react",React);
console.log("render",ReactDOM);

class HelloWorld extends React.Component {
    render() {
        return <h1>Hello from {this.props.phrase}!</h1>;
    }
}

//export default HelloWorld;

ReactDOM.render(
    <HelloWorld phrase="ES6"/>,
    document.getElementById('msg')
);