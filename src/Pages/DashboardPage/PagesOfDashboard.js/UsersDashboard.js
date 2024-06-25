import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { tableCustomStyles } from "./tableCustomStyles";
import DataTableContext from "../../../Context/context";
import { Nav } from "react-bootstrap";

const UserDashboard = () => {
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

  const userData = [
    {
      id: 1,
      userType: "S",
      userName: "lab",
      categoriesId: 12,
      validated: "true",
      projectName: "lab",
    },
    {
      id: 1,
      userType: "S",
      userName: "lab",
      categoriesId: 12,
      validated: "false",
      projectName: "lab",
    },
    {
      id: 1,
      userType: "S",
      userName: "lab",
      categoriesId: 12,
      validated: "false",
      projectName: "lab",
    },
    {
      id: 1,
      userType: "S",
      userName: "lab",
      categoriesId: 12,
      validated: "false",
      projectName: "lab",
    },
    {
      id: 1,
      userType: "S",
      userName: "lab",
      categoriesId: 12,
      validated: "false",
      projectName: "lab",
    },
    {
      id: 1,
      userType: "S",
      userName: "lab",
      categoriesId: 12,
      validated: "false",
      projectName: "lab",
    },
  ];

  useEffect(() => {
    if (!data.length) {
      setInitialData(userData);
    }
  }, [data, setInitialData]);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "User Name",
      selector: (row) => row.userName,
    },
    {
      name: "User Type",
      selector: (row) => row.userType,
    },
    {
      name: "Project Name",
      selector: (row) => row.userType,
    },
    {
      name: "categories Id",
      selector: (row) => row.categoriesId,
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
        data={userData}
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

export default UserDashboard;
