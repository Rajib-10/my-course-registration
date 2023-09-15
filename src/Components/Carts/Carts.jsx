/* eslint-disable react/prop-types */


const Carts = ({selectedCourse,countCredit,remaining,countPrice}) => {
    return (
        <div className="w-[20%] mr-14">
        <div className="card card-compact  bg-base-100 shadow-xl">
            <div className="card-body">
                <h1 className="text-lg text-[#2F80ED] font-bold">Credit Hour Remaining {remaining} hr</h1>
                <hr />
                <h2 className="text-[#1C1B1B] text-xl font-bold">Course Name</h2>
                <hr />
                {
                    selectedCourse.map((courseName,idx)=> <h1 className="text-[16px] font-normal text-[#1C1B1B99]" key={idx}>{idx+1} {courseName.course_name}</h1>) 
                }
                <hr />
                <h1 className="text-[#1C1B1BCC] text-[16px] font-medium">Total Credit Hour : {countCredit}</h1>
                <hr />
                <h1 className="text-[#1C1B1BCC] text-[16px] font-semibold">Total Price : {countPrice} USD</h1>
            </div>
        </div>
        </div>
    );
};

export default Carts;