
# Course Registration

Course Registration is a simple react project where we are exploring react core concept like functional component,props,jsx,useState,useEffect,event handling.




#### Add at least 3 Project features:

* **Course choice and represent:**  
     Users can see the available courses presented in the cards. Each course card has a "Select" button allowing users to add the course to their cart.Users can add one course at a time in their cart.if users try to add same course more than one then it will show a sweet alert to prevent.


* **Tracking total credit and remaining hour:**  
    In this project dynamically calculates and displays the total credit and remaining credit hours when user add courses in thier cart. If a user attempts to exceed the credit hour limit (20 hr), then the user get alerts  preventing them from adding more courses.

* **Informative Course:**    
    In this project including course name, image, credit hours, price, and a brief description, is displayed on each  card. Users can make decisions about which courses to select based on this information.The selected courses name,price,total credit and remaining credit hours are shown in the cart  providing a clear overview of the chosen courses.


#### Discuss how you managed the state in your assignment project?

* **Data Loading:**  
    For data loading , i have created faka data which saved as data.json.
    
    import { useEffect } from "react";  
    import { useState } from "react";

    const [courses,setCourses] = useState([]) 

     useEffect(()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])

    First of all imports useEffect and useState from React. Then i initializes a state variable courses using useState to an empty array. The useEffect hook is used to fetch data from a JSON file named data.json. After fetching data,setCourses() function is called to store data into courses state.In useEffect i have used empty dependency array to ensure it runs only once.

* **Counting Course Name, Remaining hour, Total Credit and Price:**  
    In the card component I have set the button and pass a parameter whenever the button is clicked because I need to display the particular value in the cart component using this parameter. So I receive this parameter from the app component through the event handler because it is not possible to pass  the value directly as a parameter from the card component to the cart component.
    In the app component  

    import { useState } from "react"  

    const [selectedCourse,setSelectedCourse] = useState([])

    const [countCredit,setCountCredit] = useState(0)

    const [remaining,setRemaining] = useState(20)

    const [countPrice,setCountPrice] = useState(0)  

   imports useState from React.Then i initializes a state variable selectedCourse  using useState to an empty array. also initializes state variables countCredit,remaining,countPrice using useState to 0.After completing the necessary work in the event handler, I have called setSelectedCourse(), setCountCredit(), setRemaining() and setCountPrice() to contain the data in their respective state variables.Then I passed these state variables selectedCourse countCredit,remaining,countPrice to the cart component.Meanwhile, if the course name becomes more than one in the cart component, I have set a toast, and if the total credit hour is more than 20 and if the remaining credit hour is below 0, I have also set a toast.





