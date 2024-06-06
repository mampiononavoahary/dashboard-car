import Singlec from '../../components/single/Singlec'
import { singleCar } from '../../data'
import './Car.scss'

const Car = () => {
  //fetch data and send to single component
  return (
    <div className='car'>
      <Singlec {...singleCar}/>
    </div>
  )
}

export default Car