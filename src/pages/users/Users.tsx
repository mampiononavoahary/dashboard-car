import { DataTable } from "../../components/dataTable/DataTable"
import "./Users.scss"

export const Users = () => {
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button>Add New Users</button>
      </div>
      <DataTable/>
    </div>
  )
}
