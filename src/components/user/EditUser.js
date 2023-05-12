// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { getUserById, deleteUser, editUserInfo, getAllUserTypes } from "../../modules/authManager";
// import { Form, FormGroup, InputGroup, FormLabel } from "react-bootstrap"

export default function EditUser() {
//     const navigate = useNavigate();
//     const { id } = useParams();
//     const [ oldUser, setOldUser ] = useState({});
//     const [ newUser, setNewUser ] = useState({});
//     const [ userTypes, setUserTypes ] = useState([]);
//     const [ isAdmin, setIsAdmin ] = useState(false);

//     const getUser = () => {
//         (getUserById(id)).then(userData => setOldUser(userData))
//     }
//     const getUserTypes = () => {
//         (getAllUserTypes()).then(data => setUserTypes(data))
//     }

//     useEffect(() => {
//         getUser()
//         getUserTypes()
//         if (userProfile?.userTypeId === 1) {
//             setIsAdmin(true)
//         }
//     }, []);

//     useEffect(() => {
//         setNewUser(oldUser)
//     }, [ oldUser ]);

//     const submitTemplate = (e) => {
//         e.preventDefault();
//         editUserInfo(newUser)
//         .then(window.alert('Changes have been made!'))
//             .then(() => {navigate(`/users/${newUser.id}`)
//         })
//     }

//     const deleteFunction = (e) => {
//         e.preventDefault();
//         const confirmation = window.confirm('Are you sure you want to delete this user?')
//         if (confirmation) {
//             deleteUser(oldUser.id)
//             .then(window.alert('User has been deleted!'))
//             .then(() => {userProfile.userType.name === "Admin" ?
//                 navigate('/users') : navigate('/')})
//         }
//     }

    return (
    <>
//         { /* <section className="input-container">
//             <header className="text-black">{oldUser?.firstName} {oldUser?.lastName}</header>
//         </section>
//         <Form onSubmit={submitTemplate}>
//             <FormGroup>
//                 <FormLabel >First Name</FormLabel>
//                 <InputGroup
//                 defaultValue={oldUser.firstName}
//                 type="text"
//                 onChange={(e) => {
//                     let copy = {...newUser}
//                     copy.firstName = e.target.value 
//                     setNewUser(copy)}}
//                 />
//                 <FormLabel>Last Name</FormLabel>
//                 <InputGroup
//                 defaultValue={oldUser.lastName}
//                 type="text"
//                 onChange={(e) => {
//                     let copy = {...newUser}
//                     copy.lastName = e.target.value 
//                     setNewUser(copy)}}
//                 />
//             </FormGroup>
//             <FormGroup>
//                     <FormLabel>Email</FormLabel>
//                     <InputGroup
//                     defaultValue={oldUser.email}
//                     type="text"
//                     onChange={(e) => {
//                         let copy = {...newUser}
//                         copy.email = e.target.value 
//                         setNewUser(copy)}}
//                     />
//             </FormGroup>
//             <FormGroup>
//                 <FormLabel>User Privileges</FormLabel>
//                 {!isAdmin ? <p className="card-body">User Type: {oldUser?.userType?.name}</p> :
//                 <>
//                     <InputGroup
//                     defaultValue={oldUser?.userTypeId}
//                     type="select"
//                     onChange={(e) => {
//                         let copy = {...newUser}
//                         copy.userTypeId = e.target.value 
//                         setNewUser(copy)}}
//                     >
//                         {userTypes.map(ut => {
//                         return (<option key={ut.id} value={ut.id}>{ut.name}</option>)
//                         })}
//                     </InputGroup>
//                 </>}
//             </FormGroup>
//             <div className="edit-btn-container">
//                 <button type="submit"
//                     className="input-container"
//                     color="success">Save Changes</button>
//                 <button type="delete"
//                     className="input-container bg-danger"
//                     onClick={deleteFunction}>Delete User</button>
//             </div>
    //         </Form> */}
    </>
    )
}