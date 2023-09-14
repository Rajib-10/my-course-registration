import { useState } from "react"
import Swal from "sweetalert2"
import Cards from "./Components/Cards/Cards"
import Carts from "./Components/Carts/Carts"

function App() {
const [selectedCourse,setSelectedCourse] = useState([])

const handleSelectButton=(course)=>{
  const newSelectedCourse = [...selectedCourse,course]
  const isExist = selectedCourse.find(item=>item.course_name===course.course_name)
  if(isExist){
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${course.course_name} Already Exist`
    })
  }
  setSelectedCourse(newSelectedCourse)
}
  return (
    <>
      <div>
        <h1 className="text-3xl text-center m-5 p-5 font-bold">Course Registration</h1>
        <div className="flex justify-between">
        <Cards handleSelectButton={handleSelectButton} />
        <Carts selectedCourse={selectedCourse} />
        </div>
      </div>

      
       
    </>
  )
}

export default App
