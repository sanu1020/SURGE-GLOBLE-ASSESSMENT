import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import "./studentNote.css"


function App() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [notes, setNotes] = useState("")
    const [ListofNotes, setListofNotes] = useState([])



    const submitN = () => {
        axios.post("http://localhost:4000/app/", {
            title: title,
            description: description,
            notes: notes

        })
            .then(() => {
                setListofNotes([...ListofNotes, { title: title, description: description, notes: notes }])
            }).catch(() => {
                alert("error occured....")
            })
    }

    const updateNotes = (id) => {
        const newNotes = prompt("Update the notes")
        window.alert("Kindly refresh the Page.....")

        axios.patch(`http://localhost:4000/app/${id}`, { notes: newNotes, id: id }).then(() => {
            setListofNotes(ListofNotes.map((val) => {
                return val._id === id ? { _id: id, title: val.title, description: val.description, notes: val.notes } :val ;
            }))
        })
    }

    const deleteNotes = (id) => {
        axios.delete(`http://localhost:4000/app/${id}/delete`).then(() => {
            setListofNotes(
                ListofNotes.filter((val) => {
                    return val._id !== id
                })
            )
        })
    }

    useEffect(() => {
        axios.get('http://localhost:4000/app/')
            .then((response) => {
                setListofNotes(response.data)
            }).catch((ERR) => {
                console.log(ERR)
            })
    }, [])

    return (

        <div className='container shadow my-5'>
            <div className="col-md-6 p-5">
                <h1 className="display-6 fw-bolder mb-5">NOTES</h1>
                <form>

                    <div class="mb-3">
                        <label for="exampleInputtitle" class="form-label">Title</label>
                        <input type="text" class="form-control" id="exampleInputtitle" aria-describedby="emailHelp" value={title} onChange={(event) => {
                            setTitle(event.target.value)
                        }} />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputdescription" class="form-label">Description</label>
                        <input type="text" class="form-control" id="exampleInputdescription" value={description} onChange={(event) => {
                            setDescription(event.target.value)
                        }} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputnotes" class="form-label">Notes</label>
                        <input type="text" class="form-control" id="exampleInputnotes" value={notes} onChange={(event) => {
                            setNotes(event.target.value)
                        }} />
                    </div>

                    <button onClick={submitN} type="submit" class="btn btn-outline-dark   w-50">Create Notes</button>
                </form>

                <div className="row">
                    
                            {ListofNotes.map((val) => {
                                return (
                                    <div className="notesContainer">

                                        
                                            <table >
                                                <tr>
                                                    <th>Title</th>
                                                    <th>Description</th>
                                                    <th>Notes</th>
                                                    
                                                </tr>
                                                
                                                <tr>
                                                    <td>{val.title} </td>
                                                    <td>{val.description} </td>
                                                    <td>{val.notes} </td>
                                           

                                                </tr>
                                            </table>

                                            <button onClick={() => {
                                            updateNotes(val._id)
                                        }} class="btn btn-outline-dark   w-50 ">Update</button>
                                       <button id="removeBtn" onClick={() => {
                                            deleteNotes(val._id)
                                        }} class="btn btn-outline-dark   w-50" >delete</button>
                                         
                                        

                                        

                                       
                                    </div>
                                )
                            })}
                        






                    
                    </div>
                    </div>
                    </div>
                    );

}


                    export default App;