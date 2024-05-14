import React, { useState, useEffect } from "react";

const Customers = () => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
    }, []);
    
    const addUser = () => {
      const userName = prompt("Enter user name:");
      const userEmail = prompt("Enter user email:");

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: userName,
        email: userEmail,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then((res) => res.json())
    .then((data) => {
      setUsers([...users, data]);
      });
  };

  const removeUser = () => {
    selectedUsers.forEach((id) => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => {
          setUsers(users.filter((user) => user.id !== id));
        });
    });
    // Clear selected users after deletion
    setSelectedUsers([]);
  };

  const handleCheckboxChange = (event, id) => {
    if (event.target.checked) {
      setSelectedUsers([...selectedUsers, id]);
    } else {
      setSelectedUsers(selectedUsers.filter((userId) => userId !== id));
    }
  };

  return (
    <div className="ml-10 mt-4">
      <h1 className="text-3xl font-bold">Users:</h1>

      <div className="flex mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={addUser}
        >
          Add User
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={removeUser}
        >
          Remove User
        </button>
      </div>

      <table className="mt-4 w-150 border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2"></th>
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-400 px-4 py-2">
                <input
                  type="checkbox"
                  onChange={(e) => handleCheckboxChange(e, user.id)}
                  // checked={selectedUsers.includes(user.id)}
                />
              </td>
              <td className="border border-gray-400 px-4 py-2">{user.name}</td>
              <td className="border border-gray-400 px-4 py-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;


// import React, { useState, useEffect } from "react";

// const Customers = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUsers, setSelectedUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data);
//       });
//   }, []);
  
//   const addUser = () => {
//     const userName = prompt("Enter user name:");
//     const userEmail = prompt("Enter user email:");
    
//     // if (!userName || !userEmail) {
//     //   alert("Name and email are required.");
//     //   return;
//     // }

//     fetch("https://jsonplaceholder.typicode.com/users", {
//       method: "POST",
//       body: JSON.stringify({
//         name: userName,
//         email: userEmail,
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//     .then((res) => res.json())
//     .then((data) => {
//       setUsers([...users, data]);
//     });
//   };

//   const removeUser = () => {
//     // Create an array of promises for each delete request
//     const deleteRequests = selectedUsers.map((id) =>
//       fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//         method: "DELETE",
//       })
//     );

//     // Wait for all requests to finish
//     Promise.all(deleteRequests)
//       .then(() => {
//         // Update the users state by filtering out the deleted users
//         setUsers(users.filter((user) => !selectedUsers.includes(user.id)));
//         // Clear selected users after deletion
//         setSelectedUsers([]);
//       })
//       .catch((error) => {
//         console.error("Error deleting users:", error);
//         // Clear selected users on error as well
//         setSelectedUsers([]);
//       });
//   };

//   const handleCheckboxChange = (event, id) => {
//     if (event.target.checked) {
//       setSelectedUsers([...selectedUsers, id]);
//     } else {
//       setSelectedUsers(selectedUsers.filter((userId) => userId !== id));
//     }
//   };

//   return (
//     <div className="ml-10 mt-4">
//       <h1 className="text-3xl font-bold">Users:</h1>

//       <div className="flex mt-4">
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
//           onClick={addUser}
//         >
//           Add User
//         </button>
//         <button
//           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//           onClick={removeUser}
//         >
//           Remove User
//         </button>
//       </div>

//       <table className="mt-4 w-150 border-collapse border border-gray-400">
//         <thead>
//           <tr>
//             <th className="border border-gray-400 px-4 py-2"></th>
//             <th className="border border-gray-400 px-4 py-2">Name</th>
//             <th className="border border-gray-400 px-4 py-2">Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td className="border border-gray-400 px-4 py-2">
//                 <input
//                   type="checkbox"
//                   onChange={(e) => handleCheckboxChange(e, user.id)}
//                   // checked={selectedUsers.includes(user.id)}
//                 />
//               </td>
//               <td className="border border-gray-400 px-4 py-2">{user.name}</td>
//               <td className="border border-gray-400 px-4 py-2">{user.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Customers;
