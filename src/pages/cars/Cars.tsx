import { useState } from "react"
import { Add } from "../../components/add/Add"
import { DataTable } from "../../components/dataTable/DataTable"
import "./cars.scss"
import { GridColDef } from "@mui/x-data-grid"
import { useQuery } from "@tanstack/react-query"
import { carRows } from "../../data"

const columns: GridColDef[] = [
  {
    field: 'id',
    type:"number",
    headerName: 'ID',
    width: 90,
  },
  {
    field: 'brand',
    type:"string",
    headerName: 'Brand',
    width: 100,
  },
  {
    field: 'color',
    type:"string",
    headerName: 'Color',
    width: 100,
  },
  {
    field: 'description',
    headerName: 'Description',
    type:"string",
    width: 200,
  },
  {
    field: 'model',
    headerName: 'Model',
    width: 100,
    type:"string",
  },
  {
    field: 'motor_type',
    headerName: 'Motor type',
    width: 100,
    type:"string",
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 100,
    type:"string",
  },
  {
    field: 'place_number',
    headerName: 'Place Number',
    width: 100,
    type:"string",
  },
  {
    field: 'power',
    headerName: 'Power',
    width: 100,
    type:"number",
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 100,
    type:"number",
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 100,
    type:"string",
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 100,
    type:"string",
  },
];


export const Cars = () => {

  const { isLoading , data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('http://localhost:8086/cars').then((res) =>
        res.json(),
      ).then(
        (res) => res
      )
  })
  console.log(data);
  
  const [open, setOpen] = useState(false)
  return (
    <div className="cars">
      <div className="info">
        <h1>Cars</h1>
        <button onClick={()=> setOpen(true)}>Add New Cars</button>
      </div>
    {isLoading ? "Loading..." : <DataTable slug="cars" columns={columns} rows={data?.items ?? []}/>}
    {open && <Add slug="cars" columns={columns} setOpen={setOpen}/>}
    </div>
  )
}
