// import React, { createContext, useState } from "react";
// import style from "../Pages/DashboardPage/PagesOfDashboard.js/TablesDashboardStyle.module.css";

// const DataTableContext = createContext({
//   data: [],
//   setData: () => {},
//   isDeleteConfirmOpen: false,
//   setIsDeleteConfirmOpen: () => {},
//   rowToDelete: null,
//   setRowToDelete: () => {},
//   setInitialData: () => {},
//   handleDelete: () => {},
//   handleConfirmDelete: () => {},
//   handleCancelDelete: () => {},
//   DeleteConfirmationModal: () => {},
// });

// export const DataTableProvider = ({ children }) => {
//   const [data, setData] = useState([]);
//   const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
//   const [rowToDelete, setRowToDelete] = useState(null);

//   const setInitialData = (newData) => {
//     setData(newData);
//   };

//   const handleDelete = (row) => {
//     setRowToDelete(row);
//     setIsDeleteConfirmOpen(true);
//   };

//   const handleConfirmDelete = () => {
//     const updatedData = data.filter((item) => item.id !== rowToDelete.id);
//     setData(updatedData);
//     setIsDeleteConfirmOpen(false);
//     setRowToDelete(null);
//   };

//   const handleCancelDelete = () => {
//     setIsDeleteConfirmOpen(false);
//   };

//   const DeleteConfirmationModal = ({ onConfirm, onCancel }) => (
//     <div className={style.modal}>
//       <p>Are you sure you want to delete this row?</p>
//       <div className={style.button}>
//         <button onClick={onConfirm}>Confirm</button>
//         <button onClick={onCancel}>Cancel</button>
//       </div>
//     </div>
//   );

//   const contextValue = {
//     data,
//     setData,
//     isDeleteConfirmOpen,
//     setIsDeleteConfirmOpen,
//     rowToDelete,
//     setRowToDelete,
//     setInitialData,
//     handleDelete,
//     handleConfirmDelete,
//     handleCancelDelete,
//     DeleteConfirmationModal,
//   };

//   return (
//     <DataTableContext.Provider value={contextValue}>
//       {children}
//     </DataTableContext.Provider>
//   );
// };

// export default DataTableContext;

import React, { createContext, useState } from "react";
import style from "../Pages/DashboardPage/PagesOfDashboard.js/TablesDashboardStyle.module.css";

const DataTableContext = createContext({
  data: [],
  setData: () => {},
  isDeleteConfirmOpen: false,
  setIsDeleteConfirmOpen: () => {},
  rowToDelete: null,
  setRowToDelete: () => {},
  setInitialData: () => {},
  handleDelete: () => {},
  handleConfirmDelete: () => {},
  handleCancelDelete: () => {},
  DeleteConfirmationModal: () => {},
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
    setData,
    isDeleteConfirmOpen,
    setIsDeleteConfirmOpen,
    rowToDelete,
    setRowToDelete,
    setInitialData,
    handleDelete,
    handleConfirmDelete,
    handleCancelDelete,
    DeleteConfirmationModal,
  };

  return (
    <DataTableContext.Provider value={contextValue}>
      {children}
    </DataTableContext.Provider>
  );
};

export default DataTableContext;
