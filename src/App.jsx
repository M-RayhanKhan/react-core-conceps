/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Actor from './Actor'
import './App.css'
import Books from './Books'
import Todo from './Todo'

function App() {
  const actors = ['Nasir', 'Forhad', 'Tapazzul', 'Boom']
  const books = [
    {id:1, name:'Physic', price: 100},
    {id:2, name:'Math', price: 200},
    {id:3, name:'Biology', price: 300},
    {id:4, name:'Chemistry', price: 120},
  ]
  return (
    <>
      <h1>Vite + React</h1>
      <Actor name="Khan"></Actor>
      {
        actors.map(actor => <Actor  name={actor}></Actor>)
      }

      <Books booksStore={books}></Books>

      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore Core concepts" isDone={true}></Todo>
      <Todo task="Try to agin" isDone={false}></Todo> */}
      {/* <Device name="laptop" price="12"></Device>
      <Device name="iphone" price="1lak"></Device>
      <Device name="samsung" price="16"></Device>
      <Person></Person>
      <Development></Development>
      <Student grade={12} score="58"></Student>
      <Student grade={7} score={80}></Student>
      <Student></Student> */}
    </>
  )
}

function Device(props) {
  // console.log(props);
  return <h4>Device name: {props.name} price: {props.price} </h4>
}
const {grade, score} = {grade: 12, score: 58}
function Student({grade=1, score=0}) {
  const developStyle = {
    margin: "10px",
    padding: '10px',
    border: '1px solid purple',
    borderRadius: '15px'
  }
  return <div style={developStyle}>
    <h3>This is a student</h3>
    <p>Class: {grade}</p>
    <p>score: {score}</p>
  </div>
}

function Person() {
  return <h3>I am person</h3>
}

function Development() {
  const developStyle = {
    margin: "10px",
    padding: '10px',
    border: '1px solid purple',
    borderRadius: '15px'
  }
  return <div style={developStyle}>
    <h3>Development </h3>
    <p>coding</p>
  </div>
}

export default App
