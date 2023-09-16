import { FiDollarSign } from "react-icons/fi";
import { BsBook } from "react-icons/bs";
import PropTypes from 'prop-types';
const Card = ({ course, handleSelectButton }) => {
  const { img, course_name, credit, price, detail } = course;
  return (
    <div>
      <div className="rounded-md shadow-md bg-base-100 w-[290px] ">
        <img
          src={img}
          alt=""
          className="object-cover object-center    rounded-t-md px-3 pt-4"
        />
        <div className="flex flex-col justify-between px-3 space-y-4 py-4  ">
          <div className="space-y-2">
            <h2 className="text-[18px] font-semibold text-[#1C1B1B]">{course_name}</h2>
            <p className="text-[#1C1B1B99] text-sm font-normal">{detail}</p>
            <div className="flex justify-around items-center">
            <FiDollarSign size={22} />
              <h1 className="text-[#1C1B1B99] text-[18px] font-medium"> Price : {price}</h1>
              <BsBook size={22} />
              <h1 className="text-[#1C1B1B99] text-[18px] font-medium"> Credit : {credit}hr</h1>
            </div>
          </div>
          <button
            onClick={() => handleSelectButton(course)}
            className="text-lg font-semibold text-white btn btn-primary bg-[#2F80ED] w-full  p-3   rounded-lg border-none capitalize "
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};


Card.propTypes = {
  course: PropTypes.object.isRequired,
  handleSelectButton: PropTypes.func.isRequired
};

export default Card;
