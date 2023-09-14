/* eslint-disable react/prop-types */


const Carts = ({selectedCourse,countCredit,remaining,countPrice}) => {
    return (
        <div className="w-[25%] mx-4">
        <div className="card card-compact  bg-base-100 shadow-xl">
            <div className="card-body">
                <h1 className="text-lg font-semibold text-purple-700">Credit Hour Remaining {remaining}hr</h1>
                <hr />
                <h2 className="card-title">Course Name</h2>
                <hr />
                {
                    selectedCourse.map((courseName,idx)=> <h1 className="text-sm font-medium" key={idx}>{idx+1} {courseName.course_name}</h1>) 
                }
                <hr />
                <h1>Total Credit Hour : {countCredit}</h1>
                <hr />
                <h1>Total Price : {countPrice} USD</h1>
            </div>
        </div>
        </div>
    );
};

export default Carts;