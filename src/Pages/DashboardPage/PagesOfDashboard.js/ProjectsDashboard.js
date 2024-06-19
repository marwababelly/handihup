import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { tableCustomStyles } from "./tableCustomStyles";
import DataTableContext from "../../../Context/context";
import { Nav } from "react-bootstrap";

const ProjectsDashboard = () => {
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

  const projectData = [
    { id: 1, ownerId: "A", name: "name1", categoriesId: 13, validated: "true" },
    { id: 1, ownerId: "A", name: "name1", categoriesId: 13, validated: "true" },
    { id: 1, ownerId: "A", name: "name1", categoriesId: 13, validated: "true" },
  ];

  useEffect(() => {
    if (!data.length) {
      setInitialData(projectData);
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
      name: "categories Id",
      selector: (row) => row.categoriesId,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },

    {
      name: "Validated",
      selector: (row) => row.validated,
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
        data={projectData}
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

export default ProjectsDashboard;
