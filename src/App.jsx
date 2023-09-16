import { useState } from "react"
import Cards from "./Components/Cards/Cards"
import Carts from "./Components/Carts/Carts"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
const [selectedCourse,setSelectedCourse] = useState([])
const [countCredit,setCountCredit] = useState(0)
const [remaining,setRemaining] = useState(20)
const [countPrice,setCountPrice] = useState(0)


const handleSelectButton=(course)=>{
  
  let totalCredit=course.credit
  let totalPrice = course.price
 
  const isExist = selectedCourse.find(item=>item.course_name===course.course_name)
  if(isExist){
    return toast.warn(<h1><span className="font-semibold">{course.course_name}</span> Already Exist</h1>)
  }else{
      selectedCourse.forEach(item=>{
        totalCredit+=item.credit
        totalPrice+=item.price
      })
      let remainingCredit = 20 - totalCredit
      if(totalCredit>20 ){
        return toast.warn("You can not exceed more than 20 credits")

      }else if(remainingCredit <0){
        return toast.warn("Remaining Credit can not be Negative!")

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
      <div className="mb-24">
        <h1 className="text-[32px] text-[#1C1B1B] text-center m-5 p-5 font-bold">Course Registration</h1>
        <div className="flex justify-between">
        <Cards handleSelectButton={handleSelectButton} />
        <Carts selectedCourse={selectedCourse} countPrice={countPrice} countCredit={countCredit} remaining={remaining}  />
        </div>
      </div>

      
      <ToastContainer /> 
    </>
  )
}

export default App
