import { GridColDef } from "@mui/x-data-grid";
import { DataTable } from "../../components/dataTable/DataTable"
import "./Users.scss"
import { useState } from "react";
import { Add } from "../../components/add/Add";
import { useQuery } from "@tanstack/react-query";

export const Users = () => {
  const columns: GridColDef[] = [
    {
      field: 'id',
      type:"number",
      headerName: 'id',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      type:"string",
      headerName: 'email',
      width: 150,
      editable: true,
    },
    {
      field: 'name',
      headerName: 'name',
      type:"string",
      width: 150,
      editable: true,
    },
    {
      field: 'password',
      headerName: 'password',
      type:"string",
      width: 150,
      editable: true,
    },
  ];

  const [open, setOpen] = useState(false)

  const { isLoading , data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('http://localhost:8086/users').then((res) =>
        res.json(),
      ).then(
        (res) => res
      )
  })
  
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=> setOpen(true)}>Add New Users</button>
      </div>
      {isLoading ? "Loading..." : <DataTable slug="users" columns={columns} rows={data}/>}
    {open && <Add slug="auth" columns={columns} setOpen={setOpen}/>}
    </div>
  )
}
