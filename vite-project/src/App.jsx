import './App.css'

function App() {
  const students =['Liton','Ajoy','Bijoy','jdk']
  return (
    <>
    {
      students.map((item)=>
      <Students name={item}></Students>
      )
    }
    </>
  )
}

export default App


function Students(props){
  return(
    <>
    <div className='students'>
    <h1>{props.name}</h1>
    <p>mern stack developer</p>
    </div>
    </>
  )
}
