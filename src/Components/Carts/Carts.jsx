/* eslint-disable react/prop-types */


const Carts = ({selectedCourse}) => {
    
    return (
        <div className="w-[25%] mx-4">
        <div className="card card-compact  bg-base-100 shadow-xl">
            <div className="card-body">
                <h1 className="text-lg font-semibold text-purple-700">Credit Hour Remaining hr</h1>
                <hr />
                <h2 className="card-title">Course Name</h2>
                {
                    selectedCourse.map((courseName,idx)=> <h1 className="text-sm font-medium" key={idx}>{idx+1} {courseName.course_name}</h1>) 
                }
                <hr />
                <h1>Total Credit Hour : 13</h1>
                <hr />
                <h1>Total Price : 48000 USD</h1>
            </div>
        </div>
        </div>
    );
};

export default Carts;