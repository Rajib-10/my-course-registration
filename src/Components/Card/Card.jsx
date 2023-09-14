/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-spaces-and-tabs */
import { FiDollarSign } from "react-icons/fi";
import { BsBook } from "react-icons/bs";

const Card = ({ course, handleSelectButton }) => {
  const { img, course_name, credit, price, detail } = course;
  return (
    <div>
      <div className="max-w-xs rounded-md shadow-md bg-base-100">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-t-md px-4 "
        />
        <div className="flex flex-col justify-between px-6 space-y-4 py-4 ">
          <div className="space-y-2">
            <h2 className="text-[18px] font-semibold ">{course_name}</h2>
            <p className="">{detail}</p>
            <div className="flex justify-around items-center">
            <FiDollarSign size={25} />
              <h1> Price : {price}</h1>
              <BsBook size={25} />
              <h1> Credit : {credit}hr</h1>
            </div>
          </div>
          <button
            onClick={() => handleSelectButton(course)}
            className="btn btn-primary  w-full p-3 font-bold  rounded-md "
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
