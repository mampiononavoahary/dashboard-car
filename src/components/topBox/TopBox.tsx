import "./topBox.scss"
import { topAppointement } from "../../data"

export const TopBox = () => {
  return (
    <div className="topBox">
        <h2>Appoitement List</h2>
        <div className="list">
            {topAppointement.map(appoitement => (
                <div className="listItem" key={appoitement.carId}>
                    <div className="user" >
                        <div className="userTexts">
                            <span className="name">{appoitement.name}</span>
                            <span className="email">{appoitement.firstname}</span>
                            <span className="email">{appoitement.email}</span>
                            <span className="email">{appoitement.contact}</span>
                            <span className="email">{appoitement.message}</span>
                        </div>
                    </div>
                    <span className="amount">{appoitement.status}</span>
                </div>
            ))}
        </div>
    </div>
  )
}
