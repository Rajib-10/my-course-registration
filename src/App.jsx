import { useState } from "react"
import Swal from "sweetalert2"
import Cards from "./Components/Cards/Cards"
import Carts from "./Components/Carts/Carts"

function App() {
const [selectedCourse,setSelectedCourse] = useState([])
const [countCredit,setCountCredit] = useState(0)
const [remaining,setRemaining] = useState(0)
const [countPrice,setCountPrice] = useState(0)


const handleSelectButton=(course)=>{
  
  let totalCredit=course.credit
  let totalPrice = course.price
 
  const isExist = selectedCourse.find(item=>item.course_name===course.course_name)
  if(isExist){
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${course.course_name} Already Exist`
    })
  }else{
      selectedCourse.forEach(item=>{
        totalCredit+=item.credit
        totalPrice+=item.price
      })
      let remainingCredit = 20 - totalCredit
      if(totalCredit>20 || remainingCredit <0){
        return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Check Credit please!!',
        })
      }else{
        setCountCredit(totalCredit)
        setRemaining(remainingCredit)
        setCountPrice(totalPrice)
      
      const newSelectedCourse = [...selectedCourse,course]
      setSelectedCourse(newSelectedCourse)
  }
      }
      
  
}
  return (
    <>
      <div>
        <h1 className="text-3xl text-center m-5 p-5 font-bold">Course Registration</h1>
        <div className="flex justify-between">
        <Cards handleSelectButton={handleSelectButton} />
        <Carts selectedCourse={selectedCourse} countPrice={countPrice} countCredit={countCredit} remaining={remaining}  />
        </div>
      </div>

      
       
    </>
  )
}

export default App
