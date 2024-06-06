import Singleu from "../../components/single/Singleu"
import { singleUser } from "../../data"
import "./user.scss"


const User = () => {

  // fetch data and send to Single component
  return (
    <div className='user'>
      <Singleu {...singleUser}/>
    </div>
  )
}

export default User