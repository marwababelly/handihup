import React, { useContext, useEffect } from "react";
import DataTable from "react-data-table-component";
import { tableCustomStyles } from "./tableCustomStyles";
import DataTableContext from "../../../Context/context";
import { Nav } from "react-bootstrap";

const ReviewsDashboard = () => {
  const {
    data,
    setData,
    handleDelete,
    setRowToDelete,
    isDeleteConfirmOpen,
    setIsDeleteConfirmOpen,
    rowToDelete,
    handleConfirmDelete,
    handleCancelDelete,
    DeleteConfirmationModal,
    setInitialData,
  } = useContext(DataTableContext);

  const reviewData = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
  ];

  console.log(reviewData);

  // useEffect(() => {
  //   if (!data.length) {
  //     setInitialData(reviewData);
  //     setRowToDelete(null);
  //   }
  // }, [data, setInitialData]);

  useEffect(() => {
    if (!data.length) {
      setInitialData(reviewData);
      setIsDeleteConfirmOpen(false);  //Reset confirmation state after deletion
      setRowToDelete(null); // Reset row to delete after deletion/cancellation
    }
  }, [
    data,
    rowToDelete,
    setInitialData,
    setIsDeleteConfirmOpen,
    setRowToDelete,
  ]);

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
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
        data={reviewData}
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

export default ReviewsDashboard;
