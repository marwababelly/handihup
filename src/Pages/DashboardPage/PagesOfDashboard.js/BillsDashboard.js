import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { tableCustomStyles } from "./tableCustomStyles";
import DataTableContext from "../../../Context/context";
import { Nav } from "react-bootstrap";

const BillsDashboard = () => {
  const {
    data,
    handleDelete,
    isDeleteConfirmOpen,
    setIsDeleteConfirmOpen,
    rowToDelete,
    handleConfirmDelete,
    handleCancelDelete,
    DeleteConfirmationModal,
    setInitialData,
  } = useContext(DataTableContext);

  const billsData = [
    { id: 1, ownerId: 3 },
    { id: 2, ownerId: 5 },
  ];

  useEffect(() => {
    if (!data.length) {
      setInitialData(billsData);
    }
  }, [data, setInitialData]);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Owner Id",
      selector: (row) => row.ownerId,
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <button onClick={() => handleDelete(row)}>Delete</button>
          <button>
            {" "}
            <Nav.Link href="/formEdit">Edit</Nav.Link>
          </button>
          {isDeleteConfirmOpen && rowToDelete?.id === row.id && (
            <DeleteConfirmationModal
              onConfirm={handleConfirmDelete}
              onCancel={handleCancelDelete}
            />
          )}
        </>
      ),
    },
  ];

  return (
    <>
      <DataTable
        customStyles={tableCustomStyles}
        columns={columns}
        data={billsData}
        fixedHeader
      />
      {isDeleteConfirmOpen && (
        <DeleteConfirmationModal
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </>
  );
};

export default BillsDashboard;
