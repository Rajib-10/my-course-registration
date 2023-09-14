/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";


const Cards = ({handleSelectButton}) => {
    const [courses,setCourses] = useState([])

    useEffect(()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div className="w-[70%] ml-10">
            <h1>this is cards section :{courses.length}</h1>
            <div className="grid grid-cols-3 gap-5">
            {
                courses.map(course=> <Card key={course.id} course={course} handleSelectButton={handleSelectButton} />)
            }
            </div>
        </div>
    );
};

export default Cards;