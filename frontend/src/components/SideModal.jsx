
import React from "react";
import { MdOutlineCancelScheduleSend } from "react-icons/md";

const SideModel = ({ closeSideModal }) => {
    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                <div className="fixed inset-0 bg-black opacity-50 "></div>
                <div className="relative w-full max-w-lg mx-auto mt-6 transition-transform transform translate-x-full slide-in">
                    <div className="relative flex flex-col w-full px-4 bg-[#1F1F1F] rounded-lg shadow-lg outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-solid">
                            <h3 className="text-xl font-semibold text-center text-white w-full">
                                Update Referral Code
                            </h3>
                            <button
                                className="p-1 ml-auto text-3xl font-semibold text-white bg-transparent border-0 opacity-5 outline-none focus:outline-none"
                                onClick={closeSideModal}
                            >
                                x
                            </button>
                        </div>
                        <div className="relative flex text-white px-6 pt-6 mb-2">
                            <h6 className="font-bold text-[16px]">Referral Code</h6>
                        </div>
                        <div className="pb-7 px-6">
                            <input
                                type="text"
                                className="w-full px-3 py-2 text-white bg-[#363636] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CE9600] hover:ring-2 hover:ring-[#363636]/30 transition-all ease-in-out"
                            />
                        </div>
                        <div className="mb-24 px-6">
                            <div onClick={closeSideModal} className="flex items-center w-full bg-[#CE9600] hover:bg-[#CE9600]/90 justify-center  my-3  rounded-lg cursor-pointer  border-solid border-blueGray-200">
                                <button
                                    className="text-white flex gap-2 items-center background-transparent font-bold uppercase  py-2.5 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                   <MdOutlineCancelScheduleSend/> Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideModel;

