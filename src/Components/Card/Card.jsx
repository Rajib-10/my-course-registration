/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-spaces-and-tabs */


const Card = ({course,handleSelectButton}) => {
    const {img,course_name,credit,price ,detail} = course;
    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md bg-base-100">
	    <img src={img} alt="" className="object-cover object-center w-full rounded-t-md px-4 " />
        <div className="flex flex-col justify-between px-6 space-y-4 py-4 ">
            <div className="space-y-2">
                <h2 className="text-[18px] font-semibold ">{course_name}</h2>
                <p className="">{detail}</p>
                <div className="flex justify-between">
                    <p>Price : {price}</p>
                    <p>Credit : {credit}hr</p>
                </div>
            </div>
            <button onClick={()=>handleSelectButton(course)}  className="btn btn-primary  w-full p-3 font-bold  rounded-md ">Select</button>
        </div>
    </div>
        </div>
    );
};

export default Card;