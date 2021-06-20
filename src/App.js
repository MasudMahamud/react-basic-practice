import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const heros = ['NTR','sunny','vijay','Bond'];
  const courses =[
    {name: 'web design', price:'$200' },
    {name: 'web development', price:'$300' },
    {name: 'graphic design', price:'$400'},
    {name: 'digital marketing', price:'$400'},
  ]
    // const courseName = courses.map(course => courses.name);
    // console.log(courseName);
    //const herosName = heros.map(hero => hero);
    // console.log(herosName[0]);


  return (
    <div className="App">
      <header className="App-header">
        <h1>React-Basic-Practice</h1>
        <Counter> </Counter>
        <Users> </Users>
        
        <ul>
          {
          heros.map(hero => <li>{hero}</li>)
          }

          {
          courses.map(course => <li>{course.name}</li>)
          }

          {
          courses.map(course => < Course course={course}></Course> )
          }

        </ul>

        {/* <Course course={courses[0]}></Course>
        <Course course={courses[1]}></Course>
        <Course course={courses[3]}></Course>
        <Course course={courses[2]}></Course> */}
        
        <Person name="Mr Ivan" job="Programmer of The Year 2021"></Person>
        <Person name="Mr Masud" job="Programmer of The Year 2020"></Person>
        <Person name="Mr David" job="Programmer of The Year 2019"></Person>       
      </header>
    </div>
  );
}

function Users() {
  const [user,setUsers] = useState([]);
  useEffect(() => {
    fetch(`http://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data) )
  },[])

return(
  <div>
    <h4>Dynamic user : {user.length}</h4>
    <ul>
    {
    user.map(user => <li>
    <h3>Name: {user.name} - {user.id}(Id)</h3>
    <p>Email: {user.email}</p>Phone: {user.phone}</li>)
    }
    </ul>
  </div>
)
}

function Counter() {
const [count, setCount] = useState(20);
const handleCaseIncrease = () => setCount(count+1 );
  return(
    <div>
      <h2>Count:- {count}</h2>
      <button onClick={handleCaseIncrease}>case Increase</button>
      <button onClick={() => setCount(count-1)}>case Increase</button>
    </div>
  )
}

function Course(props) {
  const courseStyle ={
    border: '1px solid gray',
    borderRadius:'10px',
    padding:'8px',
    backgroundColor:'lightblue',
    color:'red',
    marginBottom:'20px',
    width:'250px'
  }
  
  return (
    <div style={courseStyle}>
      <h4> {props.course.name} </h4>
      <h5> {props.course.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}



function Person(props) {
  const personStyle={
    border:'1px solid orange',
    margin:'10px',
    padding:'15px',
    borderRadius:'15px',
    backgroundColor:'red',
    color:'white',

    
  }
  return (
    <div style={personStyle}>
      <h2>{props.name}</h2>
      <p>{props.job}</p>
    </div>
  )
}

export default App;
