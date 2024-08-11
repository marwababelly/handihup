// import React, { useState, useRef } from "react";
// import { Form, Button } from "react-bootstrap";
// import style from "./Report.module.css";
// import axios from "axios";

// const Report = () => {
//   const [report, setReport] = useState();
//   const reportRef = useRef(null);

//   const dataSubmit = {}

//   const handleSubmitReport = (e) => {
//     e.preventDefault();
//     axios.post('')
//     alert("Form submitted successfully!");
//     reportRef.current.value = "";
//   };

//   const handleReport = (e) => {
//     setReport(e.target.value);
//   };

//   return (
//     <div className={style.reportSession}>
//       <h5 className="fw-bold mb-2 text-center text-uppercase text-secondary mt-3">
//         If anything happens that is illegal or not beneficial to the site's
//         desires, please report it{" "}
//       </h5>
//       <Form onSubmit={handleSubmitReport} className={style.reportForm}>
//         <Form.Group className="mb-3" controlId="addReport">
//           <Form.Control
//             type="text"
//             className={style.customInput}
//             value={report}
//             onChange={handleReport}
//             ref={reportRef}
//             required
//           />
//         </Form.Group>
//         <Button className={style.button} type="submit">
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default Report;
