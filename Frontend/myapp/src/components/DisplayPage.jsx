import * as React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { BiLoaderAlt } from "react-icons/bi";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';

function DisplayPage() {

    const [UserData, setUserdata] = useState([])
    const [dogImage, setDogImage] = useState([])
    const [loading, setLoading] = useState(true)
    const [dataLoading, setDataLoading] = useState(true)

    const navigate = useNavigate()


    useEffect(() => {

        const GetUserDetails = async () => {
            setDataLoading(false)
            try {
                const response = await axios.get("http://localhost:5000/api/user")
                setDataLoading(true)

                setUserdata(response.data)
            } catch (error) {
                console.log("get api error", error)
            }
        }


        GetUserDetails()

        const GetDogImage = async () => {
            setLoading(false)
            try {
                const response = await axios.get("https://dog.ceo/api/breeds/image/random")
                setLoading(true)
                setDogImage(response.data.message)
            } catch (error) {
                console.log("dog api error", error)
            }
        }


        GetDogImage()



    }, [])

    // console.log(dogImage)


    function calculateAge(dateOfBirth) {
        const today = new Date();
        const dob = new Date(dateOfBirth);

        let years = today.getFullYear() - dob.getFullYear();
        let months = today.getMonth() - dob.getMonth();
        let days = today.getDate() - dob.getDate();

        // adjust if month/day difference is negative
        if (days < 0) {
            months--; // borrow a month
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        return { years, months };
    }






    return (
        <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100vh" }}>
            {/* cards  */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 rounded-lg shadow-lg place-items-center">
                {UserData.length > 0 &&
                    UserData.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col bg-gradient-to-b from-purple-100 via-white to-purple-50 shadow-md border border-slate-200 rounded-2xl my-6 w-full max-w-sm transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                        >
                            <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center ">
                                {loading ? (
                                    <img
                                        className="w-[320px] h-[320px] object-cover rounded-full"
                                        src={dogImage}
                                        alt="profile-picture"
                                    />
                                ) : (
                                    <Skeleton variant="circular" width={320} height={320} />
                                )}
                            </div>

                            <div className="p-6 text-center">
                                <h4 className="mb-1 text-xl font-bold text-slate-800 " style={{ display: "flex", justifyContent: "center", justifyItems: "center", alignItems: "center", gap: "10px" }}>
                                    First Name : {dataLoading ? item.firstName : <Skeleton width={80} variant="text" sx={{ fontSize: '' }} />}
                                </h4>
                                <p className="text-md font-semibold text-slate-600" style={{ display: "flex", justifyContent: "center", justifyItems: "center", alignItems: "center", gap: "10px" }}>
                                    Last Name : {dataLoading ? item.lastName : <Skeleton width={70} variant="text" sx={{ fontSize: '' }} />}
                                </p>
                                <p className="text-base text-slate-700 mt-4 font-light" style={{ display: "flex", justifyContent: "center", justifyItems: "center", alignItems: "center", gap: "10px" }}>
                                    DOB : {dataLoading ? item.dob : <Skeleton width={120} variant="text" sx={{ fontSize: '' }} />}

                                </p>
                                <p className="text-base text-indigo-600 mt-4 font-medium" style={{ display: "flex", justifyContent: "center", justifyItems: "center", alignItems: "center", gap: "10px" }}>
                                    Age : {dataLoading ?  `${calculateAge(item.dob).years} years ${calculateAge(item.dob).months} months` :<Skeleton width={120} variant="text" sx={{ fontSize: '' }} /> }
                                </p>
                            </div>

                            <div class="flex justify-center p-6 pt-2 gap-7"> <Button onClick={() => navigate("/")} class="min-w-52 h-[50px] cursor-pointer rounded-md bg-indigo-500  py-2 px-4 border border-transparent text-center text-[15px] text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button"> Go Back </Button> </div>

                        </div>


                    ))}
            </div>

        </div>


        // </div>
    );
}


export default DisplayPage;
