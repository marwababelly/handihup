import React, { useRef, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import style from "./AddProjectPage.module.css";
import AddProjectImage from "../../../assets/AddProjectImage.jpg";
import { Link } from "react-router-dom";

const AddProjectPage = () => {
  const [form , setForm] = useState({
    username : "" ,
    email : "" ,
    password : "" ,
    projectName : "" ,
    category : "" , 
    description : "" ,
    image : "" ,
    instagram : "" , 
    facebook : "" ,
  }) ;

  const [error , serError] = useState("");

  const focus = useRef(null) ;
  
  const changeHandler = (e) => {
    e.preventDefault() ;
    setForm({ ...form  , [e.target.name] : e.target.value }) ;
  }

  
  const categories = ["Pottery", "SkinCare", "FontArt", "Accessories"];

  return (
    <div>
      <div className={style.Container} expand="md">
        <div className={style.formRow}>
          <div md={8} lg={6} xs={12} className={style.formCol}>
            <div className={style.card}>
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase text-secondary">
                    Add Your Project
                  </h2>
                  <div>
                    <Form onSubmit={changeHandler} className={style.form}>
                      <Form.Group className="mb-3" controlId="username">
                        <Form.Label className={style.label}>
                          UserName
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="username"
                          className={style.customInput}
                          ref={focus}
                          value={form.username}
                          onChange={changeHandler}
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className={style.label}>
                          Email address
                        </Form.Label>
                        <Form.Control
                          className={style.customInput}
                          type="email"
                          name="email"
                          ref={focus}
                          value={form.email}
                          onChange={changeHandler}
                          required
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label className={style.label}>
                          Password
                        </Form.Label>
                        <Form.Control
                          className={style.customInput}
                          type="password"
                          name="password"
                          ref={focus}
                          value={form.password}
                          onChange={changeHandler}
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="projectName">
                        <Form.Label className={style.label}>
                          Project Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="projectName"
                          className={style.customInput}
                          ref={focus}
                          value={form.projectName}
                          onChange={changeHandler}
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="category">
                        <Form.Label className={style.label}>Category</Form.Label>
                        <Form.Control as="select" 
                        name="category"
                        className={style.customInput}
                         value={form.category} 
                         onChange={changeHandler} 
                         required>
                          <option value="" >Select Your Project's Category</option>
                          {categories.map((cate, index) => (
                            <option key={index} value={cate}>
                              {cate}
                            </option>
                          ))}
                          <option value="other">Other</option>
                        </Form.Control>
                        {form.category === "other" && (
                          <Form.Group className="mb-3">
                            <Form.Label className={style.label}>New Category</Form.Label>
                            <Form.Control
                              type="text"
                              name="category"
                              className={style.customInput}
                              placeholder="Enter new category"
                              required
                            />
                          </Form.Group>
                        )}
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="descriptionTextarea"
                      >
                        <Form.Label className={style.label}>
                          Project Description
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          name="description"
                          rows={3}
                          className={style.customInput}
                          ref={focus}
                          value={form.description}
                          onChange={changeHandler}
                          required
                        />
                      </Form.Group>

                      <Form.Group controlId="formImageUpload">
                        <Form.Label className={style.label}>
                          Upload Project Image
                        </Form.Label>
                        <Form.Control
                          type="file"
                          name="image"
                          accept="image/*"
                          className={style.customInput}
                          ref={focus}
                          value={form.image}
                          onChange={changeHandler}
                          required
                        />
                      </Form.Group>

                      <Form.Group controlId="InstagramProfileUrl">
                        <Form.Label className={style.label}>
                          Instagram Profile URL
                        </Form.Label>
                        <Form.Control
                          type="url"
                          name="instagram"
                          className={style.customInput}
                          ref={focus}
                          value={form.instagram}
                          onChange={changeHandler}
                          required
                        />
                      </Form.Group>

                      <Form.Group controlId="FacebookProfileUrl">
                        <Form.Label className={style.label}>
                          Facebook Profile URL
                        </Form.Label>
                        <Form.Control
                          type="url"
                          name="facebook"
                          className={style.customInput}
                          ref={focus}
                          value={form.facebook}
                          onChange={changeHandler}
                          required
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className={style.linkContainer}>
                        <p>Already have a project? </p>
                       <Link to="/AddProduct" className={style.linkText}>
                             Add Product
                             </Link>
                     </div>
                      <div className={style.divBtn}>
                        <Button className={style.btn} type="submit">
                          <Link to="/AddProduct">Next Page</Link>
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProjectPage;
