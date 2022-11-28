import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';


const BookingModal = ({ productInfo }) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()



    const { _id, pName, sellingPrice } = productInfo

    const handleBooking = async (event) => {
        event.preventDefault()
        const form = event.target;
        const pName = form.pName.value
        const sellingPrice = form.sellingPrice.value
        const buyer_name = form.buyer_name.value
        const buyer_email = form.buyer_email.value
        const buyer_number = form.buyer_number.value
        const meeting_location = form.meeting_location.value
        const product_id = _id

        const booking = await {
            pName, sellingPrice, buyer_name, buyer_email, buyer_number, meeting_location, product_id
        }

        fetch(' https://server-nine-lilac.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: await JSON.stringify(booking)
        })

            .then(res => res.json())
            .then(data => {
                toast.success('Your Product is Booked')
                form.reset()
                navigate('/my-bookings')

            })





    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} className="mb-6">
                        <div className="col-span-6 mb-6">
                            <label className="block font-bold font-medium text-black mb-2">
                                Product Name
                            </label>

                            <input
                                name='pName'
                                type="Product Name"
                                required
                                disabled
                                defaultValue={pName}
                                className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                            />
                        </div>

                        <div className="col-span-6 mb-6">
                            <label className="block font-bold font-medium text-black mb-3">
                                Price
                            </label>

                            <input
                                name="sellingPrice"
                                type="text"
                                required
                                disabled
                                defaultValue={sellingPrice}
                                className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                            />
                        </div>

                        <div className="col-span-6 mb-6">
                            <label className="block font-bold font-medium text-black mb-3">
                                Your Name
                            </label>

                            <input
                                name="buyer_name"
                                type="text"
                                required
                                disabled
                                defaultValue={user?.displayName}
                                className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                            />
                        </div>

                        <div className="col-span-6 mb-5">
                            <label className="block font-bold font-medium text-black mb-3">
                                Your Email
                            </label>

                            <input
                                name='buyer_email'
                                type="text"
                                required
                                disabled
                                defaultValue={user?.email}
                                className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                            />
                        </div>
                        <div className="col-span-6 mb-5">
                            <label className="block font-bold font-medium text-black mb-3">
                                Phone Number
                            </label>

                            <input
                                name='buyer_number'
                                type="text"
                                required
                                placeholder='2854-1215-2212'

                                className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                            />
                        </div>

                        <div className="col-span-6 mb-5">
                            <label className="block font-bold font-medium text-black mb-3">
                                Meeting Location
                            </label>

                            <input
                                type="text"
                                name='meeting_location'
                                required
                                placeholder='California, United States'

                                className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                            />
                        </div>

                        <div className="col-span-6 mb-5">
                            <input
                                type="submit"
                                value="Book Now"
                                className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                            />
                        </div>


                    </form>

                </div>
            </div>

        </>
    );
};

export default BookingModal;