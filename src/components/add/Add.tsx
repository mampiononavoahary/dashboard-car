import React from "react";
import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Add = (props: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const payload: { [key: string]: string | number | boolean | null } = {};
    props.columns.forEach((column) => {
      if (column.field !== "id" && column.field !== "img") {
        payload[column.field] = data.get(column.field) as string | number | boolean;
      }
    });

    fetch(`http://localhost:8086/${props.slug}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item" key={column.field}>
                <label>{column.headerName}</label>
                <input
                  name={column.field}
                  type={
                    column.type === "number"
                      ? "number"
                      : column.type === "boolean"
                      ? "checkbox"
                      : "text"
                  }
                  placeholder={column.headerName}
                />
              </div>
            ))}
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};
