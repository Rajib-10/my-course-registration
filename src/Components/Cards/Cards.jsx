import PropTypes from 'prop-types';
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
        <div className="w-[75%] ">
            <div className="grid grid-cols-3 gap-6 ml-12 mr-2">
            {
                courses.map(course=> <Card key={course.id} course={course} handleSelectButton={handleSelectButton} />)
            }
            </div>
        </div>
    );
};

Cards.propTypes = {
    handleSelectButton: PropTypes.func.isRequired
  };
export default Cards;