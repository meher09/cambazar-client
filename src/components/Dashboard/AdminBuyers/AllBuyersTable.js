import React from 'react';
import toast from 'react-hot-toast';

const AllBuyersTable = ({ buyer }) => {

    const handleDeleteUser = (email) => {
        fetch(`http://localhost:5000/user/${email}`, {
            method: "DELETE",
            headers: {
                'content-type': 'Application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success("User Deleted Successfully")
            })
    }




    const { name, email } = buyer
    return (
        <tr>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{name}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{email}</td>

            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <button
                    className="btn btn-sm bg-rose-700 hover:bg-rose-500"
                    onClick={() => handleDeleteUser(email)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default AllBuyersTable;