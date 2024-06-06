import './single.scss'

type Props = {
  id:number;
  email:string;
  name:string;
  password:string;
};


const Singleu = (props: Props) => {
  return (
    <div className='single'>
      <div className="view">
        <div className="info">
          <div className="topInfo">
            <button>Update</button>
          </div>
          <div className="details">
              <div className="item" key={props.id}>
              <span className="itemTitle">{props.email}</span>
              <span className='itemValue'>{props.name}</span>
              <span className=''></span>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default Singleu