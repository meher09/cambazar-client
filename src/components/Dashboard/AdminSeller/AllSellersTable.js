import React from 'react';
import toast from 'react-hot-toast';
import VerifiedText from './VerifiedText';


const AllSellersTable = ({ buyer }) => {
    const { name, email, photoURL, _id } = buyer



    const handleVerify = email => {
        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Vefication Process successful.')
                }
            })
    }




    return (
        <tr>

            <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                <img src={photoURL} className="w-16 h-16 rounded-full" alt="" />
            </td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700">{name}</td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700">{email}</td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                {
                    buyer.verified ? <VerifiedText></VerifiedText> :

                        <button
                            className="btn btn-sm bg-rose-700 hover:bg-rose-500"
                            onClick={() => handleVerify(_id)}
                        >
                            Verify
                        </button>
                }

            </td>
        </tr>
    );
};

export default AllSellersTable;