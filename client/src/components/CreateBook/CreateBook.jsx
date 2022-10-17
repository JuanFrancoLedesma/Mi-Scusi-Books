import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCategories } from "../../redux/StoreBooks/booksActions";
import CategoriesSelector from "./CategoriesSelector/CategoriesSelector.jsx";
import ImgSelector from "./ImgSelector/ImgSelector.jsx";
import NewBookPreview from "./NewBookPreview/NewBookPreview.jsx";
import DialogAction from "./DialogActions/DialogActions.jsx";
import SubmitButtonStack from "./SubmitButtonsStack/SubmitButtonStack";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import {
  deleteCategory,
  handleErrors,
  onChange,
  handleSubmit,
} from "./Functions/exporter.js";
import "./CreateBook.css";

export default function CreateBook() {
  const history = useHistory();
  const dispatch = useDispatch();
  // // // // // //
  const emptyBook = {
    title: "",
    author: [],
    editorial: "",
    edition: "",
    price: "",
    categories: [],
    synopsis: "",
    format: "",
    language: "",
    ISBN: "",
    stock: "",
    image: "",
  };
  const [newBook, setNewBook] = useState(emptyBook);
  const [errorHandler, setErrorHandler] = useState({
    edition: "",
    price: "",
    synopsis: "",
    ISBN: "",
    stock: "",
  });
  const [open, setOpen] = useState({});
  const [author, setAuthor] = useState("");
  const [catSel, setCatSel] = useState("Select Theme");
  const [imgSelected, setImgSelected] = useState({ file: {}, url: "" });
  const defaultOptions = {
    format: "Select format",
    language: "Select language",
  };
  const [options, setOptions] = useState(defaultOptions);
  const { categories } = useSelector((state) => state.books);
  // // // // // //
  function handleChange(e) {
    onChange(e, newBook, setNewBook, author, setAuthor);
    if (["stock", "ISBN", "edition", "price"].includes(e.target.name))
      handleErrors(e, errorHandler, setErrorHandler);
  }
  const handleClickOpen = (e) => {
    console.log(newBook);
    setOpen({ [e.target.name]: true });
  };

  const handleClose = () => {
    setOpen({});
  };
  // // // // // //
  useEffect(() => {
    if (!Object.keys(categories).length) dispatch(getCategories());
  }, [dispatch]);
  // // // // // //
  return (
    <div className="userOuterDiv">
      <div className="contentCreateBook">
        <div className="titleFormx">
          <p>Create Book</p>
        </div>

        <div className="contentBookDiv">
          <div className="categoryBook">
            <div className="divInputForm">
              <span>Title: </span>
              <input
                autoComplete="off"
                style={{ textTransform: "capitalize" }}
                maxLength={30}
                type="text"
                placeholder="Write here"
                name="title"
                value={newBook.title}
                onChange={handleChange}
              />
            </div>

            <div className="divInputForm">
              <span>Author: </span>
              <input
                autoComplete="off"
                style={{ textTransform: "capitalize" }}
                maxLength={30}
                type="text"
                placeholder="Write here"
                name="author"
                value={author}
                onChange={(e) => {
                  setAuthor(e.target.value.toLowerCase());
                }}
                onKeyDown={(e) => {
                  if (e.keyCode === 13 && e.target.name === "author")
                    return onChange(e, newBook, setNewBook, author, setAuthor);
                }}
              />
              <button
                name="author"
                disabled={!author.length}
                onClick={handleChange}
                className="btnAdd"
              >
                Add
              </button>
            </div>

            <div className="divInputForm">
              <span>Editorial: </span>
              <input
                autoComplete="off"
                style={{ textTransform: "capitalize" }}
                maxLength={30}
                type="text"
                placeholder="Write here"
                name="editorial"
                value={newBook.editorial}
                onChange={handleChange}
              />
            </div>

            <div className="divInputForm">
              <span>Edition: </span>
              <input
                autoComplete="off"
                maxLength={30}
                type="text"
                placeholder="Year edition"
                name="edition"
                value={newBook.edition}
                onChange={handleChange}
              />
            </div>

            <span>{errorHandler.edition}</span>

            <div className="divInputForm">
              <span>Price: </span>
              <input
                autoComplete="off"
                maxLength={30}
                type="text"
                placeholder="Numbers only"
                name="price"
                value={newBook.price}
                onChange={handleChange}
              />
            </div>

            <span>{errorHandler.price}</span>
            {/* CATEGORIES SELECTOR */}
            <CategoriesSelector
              newBook={newBook}
              setNewBook={setNewBook}
              catSel={catSel}
              setCatSel={setCatSel}
              categories={categories}
            />

            <div className="divInputForm">
              <span>Synopsis: </span>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Write here"
                className="textareaAutosize"
                name="synopsis"
                value={newBook.synopsis}
                onChange={handleChange}
              />
            </div>

            <span>{errorHandler.synopsis}</span>

            <div className="divInputForm">
              <span>Format: </span>
              <select
                value={options.format}
                onChange={(e) => {
                  setNewBook({
                    ...newBook,
                    format: e.target.value.toLowerCase(),
                  });
                  setOptions({
                    ...options,
                    format: e.target.value.toLowerCase(),
                  });
                }}
              >
                <option disabled>Select format</option>
                <option>Digital</option>
                <option>Hardcover</option>
                <option>Paperback</option>
              </select>
            </div>

            <div className="divInputForm">
              <span>Language: </span>
              <select
                value={options.language}
                onChange={(e) => {
                  setNewBook({ ...newBook, language: e.target.value });
                  setOptions({ ...options, language: e.target.value });
                }}
              >
                <option disabled>Select language</option>
                <option>English</option>
                <option>Spanish</option>
              </select>
            </div>

            <div className="divInputForm">
              <span>ISBN: </span>
              <input
                type="text"
                placeholder="Numbers only"
                name="ISBN"
                value={newBook.ISBN}
                onChange={handleChange}
                maxLength={13}
              />
            </div>

            <span>{errorHandler.ISBN}</span>

            <div className="divInputForm">
              <span>Stock: </span>
              <input
                type="text"
                placeholder="Numbers only"
                name="stock"
                value={newBook.stock}
                onChange={handleChange}
              />
            </div>

            <span>{errorHandler.stock}</span>

            <div className="divInputForm">
              <ImgSelector
                imgSelected={imgSelected}
                setImgSelected={setImgSelected}
                newBook={newBook}
                setNewBook={setNewBook}
                catSel={catSel}
                setCatSel={setCatSel}
                categories={categories}
              />
            </div>
          </div>
        </div>

        <div className="formBackx">
          {/* BUTTONS STACK RESET & CREATE */}
          <SubmitButtonStack
            handleClickOpen={handleClickOpen}
            errorHandler={errorHandler}
            newBook={newBook}
          />
          {/* CONFIRM WINDOWS */}
          <DialogAction
            handleClose={handleClose}
            newBook={newBook}
            setNewBook={setNewBook}
            emptyBook={emptyBook}
            handleSubmit={handleSubmit}
            setAuthor={setAuthor}
            setOptions={setOptions}
            defaultOptions={defaultOptions}
            setCatSel={setCatSel}
            open={open}
            history={history}
          />
        </div>
      </div>

      <div className="contentCreateBook">
        <div className="titleFormx">
          <p>Book Information</p>
        </div>

        <div className="contentBookDiv">
          <div className="categoryBook">
            {/* NEW BOOK PREVIEW */}
            <NewBookPreview newBook={newBook} />
          </div>
        </div>

        <div className="formBackx">
          <div className="mantengo">
            {newBook.author.length ? (
              <button
                className="buttonDeleteBook"
                onClick={() => {
                  setNewBook({
                    ...newBook,
                    author: newBook.author.slice(0, newBook.author.length - 1),
                  });
                }}
              >
                Delete Author
              </button>
            ) : null}
            <button
              className="buttonDeleteBook"
              disabled={newBook.categories.length === 0}
              onClick={() => deleteCategory(newBook, setNewBook, setCatSel)}
            >
              Delete Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
