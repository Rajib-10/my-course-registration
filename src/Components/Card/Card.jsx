/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-spaces-and-tabs */
import { FiDollarSign } from "react-icons/fi";
import { BsBook } from "react-icons/bs";

const Card = ({ course, handleSelectButton }) => {
  const { img, course_name, credit, price, detail } = course;
  return (
    <div>
      <div className="max-w-xs rounded-md shadow-md bg-base-100 ">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full  rounded-t-md px-4 pt-4"
        />
        <div className="flex flex-col justify-between px-6 space-y-4 py-4 ">
          <div className="space-y-2">
            <h2 className="text-[18px] font-semibold text-[#1C1B1B]">{course_name}</h2>
            <p className="text-[#1C1B1B99] text-sm font-normal">{detail}</p>
            <div className="flex justify-around items-center">
            <FiDollarSign size={24} />
              <h1 className="text-[#1C1B1B99] text-lg font-medium"> Price : {price}</h1>
              <BsBook size={24} />
              <h1 className="text-[#1C1B1B99] text-lg font-medium"> Credit : {credit}hr</h1>
            </div>
          </div>
          <button
            onClick={() => handleSelectButton(course)}
            className="text-lg font-semibold text-white btn btn-primary bg-[#2F80ED]  w-full p-3   rounded-lg border-none capitalize "
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
