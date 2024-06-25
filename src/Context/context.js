import React, { createContext, useState } from "react";
import style from "../Pages/DashboardPage/PagesOfDashboard.js/TablesDashboardStyle.module.css";

const DataTableContext = createContext({
  data: [],
  handleDelete: () => {},
  isDeleteConfirmOpen: false,
  setIsDeleteConfirmOpen: () => {},
  rowToDelete: null,
  setRowToDelete: () => {},
  handleConfirmDelete: () => {},
  handleCancelDelete: () => {},
  DeleteConfirmationModal: () => {},
  setInitialData: () => {},
});

export const DataTableProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null);

  const setInitialData = (newData) => {
    setData(newData);
  };

  const handleDelete = (row) => {
    setRowToDelete(row);
    setIsDeleteConfirmOpen(true);
  };

  // const handleConfirmDelete = async () => {
  //   const updatedData = data.filter((item) => item.id !== rowToDelete.id);
  //   setData(updatedData);

  //   try {
  //     const response = await fetch(`/api/data/${rowToDelete.id}`, {
  //       method: "DELETE",
  //     });

  //     if (response.ok) {
  //       const fetchedData = await response.json();
  //       setData(fetchedData);
  //     } else {
  //       console.error("Error deleting data:", response.statusText);
  //     }
  //   } catch (error) {
  //     console.error("Error deleting data:", error);
  //   } finally {
  //     setIsDeleteConfirmOpen(false);
  //     setRowToDelete(null);
  //   }
  // };

  const handleConfirmDelete = () => {
    const updatedData = data.filter((item) => item.id !== rowToDelete.id);
    setData(updatedData);
    setIsDeleteConfirmOpen(false);
    setRowToDelete(null);
  };

  const handleCancelDelete = () => {
    setIsDeleteConfirmOpen(false);
  };

  const DeleteConfirmationModal = ({ onConfirm, onCancel }) => (
    <div className={style.modal}>
      <p>Are you sure you want to delete this row?</p>
      <div className={style.button}>
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );

  const contextValue = {
    data,
    handleDelete,
    isDeleteConfirmOpen,
    setIsDeleteConfirmOpen,
    rowToDelete,
    setRowToDelete,
    handleConfirmDelete,
    handleCancelDelete,
    DeleteConfirmationModal,
    setInitialData,
  };

  return (
    <DataTableContext.Provider value={contextValue}>
      {children}
    </DataTableContext.Provider>
  );
};

export default DataTableContext;
