
import "./container.css"
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Container = () => {
    const navigate = useNavigate();

    const handleClick =()=>{
     navigate("/todo")
    }


  return (
    <div className='container'>

       <div className="box">

        <div className="first">
            <img src="https://i.pinimg.com/564x/74/ab/39/74ab39c81b9608f07ec3bf785ba928cc.jpg" alt="girl"/>
        </div>
        <div className="second">

            <h2>Smart Task Management</h2>
            <p>Try this smart tool for better management of your tasks</p>

            <div className="card">
                <h3>Your Progress</h3>
                <p>See your progress daily!</p>
                <button onClick={handleClick}><FaArrowAltCircleRight /></button>
                
            </div>


        </div>
       </div>
    </div>
  )
}

export default Container
