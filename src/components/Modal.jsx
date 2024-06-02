import React from "react";
import { MdOutlineCancelScheduleSend } from "react-icons/md";

const Modal = ({ closeModal }) => {
    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative my-6 mx-auto w-[1100px]">
                    <div className="px-4 rounded-lg shadow-lg relative flex flex-col w-full bg-[#1F1F1F] outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-solid">
                            <h3 className="text-xl text-center w-full text-white font-semibold">
                                Change my referral code
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-white opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={closeModal}
                            >x
                            </button>
                        </div>
                        <div className="relative px-6  flex text-white">
                            <h6 className="font-semibold text-[15px] pr-2">Your current referral code:</h6>
                            <p>5b94314d-2fab-4330-b339-0963d338bffb</p>
                        </div>
                        <div className="relative px-6 pt-6 mb-3 flex text-white">
                            <h6 className="font-bold text-[16px]">New Code</h6>
                        </div>
                        <div className="pb-5 px-6">
                            <input
                                type="text"
                                className="w-full px-3 rounded-lg py-2 text-white bg-[#363636] focus:outline-none focus:ring-2 focus:ring-[#CE9600] hover:ring-2 hover:ring-[#363636]/30 ease-in-out transition-all"
                            />
                        </div>
                        <div className="mb-4">
                            <div onClick={closeModal} className="flex items-center bg-[#CE9600] hover:bg-[#CE9600]/90 justify-center  my-3 mx-64 rounded-lg cursor-pointer  border-solid border-blueGray-200">
                                <button
                                    className="text-white flex items-center gap-2 background-transparent font-bold uppercase px-6 py-2.5 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    <MdOutlineCancelScheduleSend/>Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
};

export default Modal;
