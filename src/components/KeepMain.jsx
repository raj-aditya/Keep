import React, {useState, useEffect} from "react";
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Note from "./Note.jsx"
import Notes from "../resources/notes.js"
import CreateArea from "./CreateArea.jsx";
import Modal from "@mui/material/Modal";
import Button from '@mui/material/Button';
import Pagination from "./Pagination.jsx";
import FooterBody from "./Footer.jsx";


function KeepMain(){

    var [notes, setNotes] = useState([]);
    var [open, setOpen] = useState(false);
    var [currentPage, setCurrentPage] = useState(1);

   
    const itemsPerPage = 2
    const totalLength = notes.length
    const indexOfLastItem = 1 * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    var [currentPageNotes, setCurrentPageNotes] = useState(notes.slice(indexOfFirstItem, indexOfLastItem));

    useEffect(() => {
        changePage(currentPage);
    }, [notes, currentPage]);

    function handleOpen(){
        setOpen(true);
    }
    function handleClose(){
        setOpen(false);
    }
    
    function changePage(pageNumber){
        if (notes.length <= itemsPerPage){
            setCurrentPageNotes(notes)
        }
        else{
          const indexOfLastItem = pageNumber * itemsPerPage
          const indexOfFirstItem = indexOfLastItem - itemsPerPage
          setCurrentPageNotes(notes.slice(indexOfFirstItem, indexOfLastItem))
        }
    }

    function addNotes(newNote){
        if (newNote.title != "" || newNote.content != ""){
            setNotes(prevNotes => {
                return [...prevNotes, newNote]
            });
        }
        handleClose();
    }

    function deleteNotes(id){
        setNotes(notes.filter((e, index) => {return index != id}));
    }

    function handlePagination(pageNumber){
        setCurrentPage(pageNumber);
    }
    return (
        <div>
            <Header handleOpen={handleOpen}/>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <CreateArea onAdd={addNotes} notesLength={notes.length}/>
            
            </Modal>
            {/* <CreateArea onAdd={addNotes}/> */}
            
            <div className="notes_container">
            {currentPageNotes.map((item, index) => (
                <Note
                key={index}
                id={index}
                title={item.title}
                content={item.content}
                filterNotes={deleteNotes}

                />
            ))}
            </div>

            {/* { currentDisplay.map((e)=>(<p>{e}</p>))
             
            } */}

            {/* <h1>{count}</h1>
            <button onClick={() => (setCount(count + 1))}>Increment</button>
            <button onClick={() => (setCount(count - 1))}>Decrement</button> */}
            <div className="footer">
              <Pagination length={totalLength} postPerPage={itemsPerPage} handlePagination={handlePagination} currentPage={currentPage}></Pagination>
              <FooterBody />
            </div>
        </div>
    )
}

export default KeepMain;