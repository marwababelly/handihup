import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { tableCustomStyles } from "./tableCustomStyles";
import DataTableContext from "../../../Context/context";
import { Nav } from "react-bootstrap";

const ReportsDashboard = () => {
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

  const reportData = [
    { id: 1, projectId: 22, userId: 14, availableItem: "false" },
    { id: 1, projectId: 22, userId: 14, availableItem: "false" },
    { id: 1, projectId: 22, userId: 14, availableItem: "false" },
    { id: 1, projectId: 22, userId: 14, availableItem: "false" },
    { id: 1, projectId: 22, userId: 14, availableItem: "false" },
    { id: 1, projectId: 22, userId: 14, availableItem: "true" },
    { id: 1, projectId: 22, userId: 14, availableItem: "true" },
    { id: 1, projectId: 22, userId: 14, availableItem: "false" },
  ];

  useEffect(() => {
    if (!data.length) {
      setInitialData(reportData);
    }
  }, [data, setInitialData]);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "User Id",
      selector: (row) => row.userId,
    },
    {
      name: "Project Id",
      selector: (row) => row.projectId,
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
        data={reportData}
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

export default ReportsDashboard;
