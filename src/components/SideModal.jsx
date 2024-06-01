
import React from "react";

const SideModel = ({ closeModal }) => {
    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                <div className="fixed inset-0 bg-black opacity-50"></div>
                <div className="relative w-full max-w-lg mx-auto mt-6 transition-transform transform translate-x-full slide-in">
                    <div className="relative flex flex-col w-full px-4 bg-[#1F1F1F] rounded-lg shadow-lg outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-solid">
                            <h3 className="text-xl font-semibold text-center text-white w-full">
                                Change my referral code
                            </h3>
                            <button
                                className="p-1 ml-auto text-3xl font-semibold text-white bg-transparent border-0 opacity-5 outline-none focus:outline-none"
                                onClick={closeModal}
                            >
                                x
                            </button>
                        </div>
                        <div className="relative flex text-white px-6">
                            <h6 className="font-semibold text-[15px] pr-2">Your current referral code:</h6>
                            <p>5b94314d-2fab-4330-b339-0963d338bffb</p>
                        </div>
                        <div className="relative flex text-white px-6 pt-6 mb-3">
                            <h6 className="font-bold text-[16px]">New Code</h6>
                        </div>
                        <div className="pb-5 px-6">
                            <input
                                type="text"
                                className="w-full px-3 py-2 text-white bg-[#363636] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CE9600] hover:ring-2 hover:ring-[#363636]/30 transition-all ease-in-out"
                            />
                        </div>
                        <div className="mb-4">
                            <div className="flex items-center justify-center my-3 mx-64 bg-[#CE9600] rounded-lg cursor-pointer hover:bg-[#CE9600]/90">
                                <button
                                    className="px-6 py-2.5 text-sm font-bold text-white uppercase bg-transparent outline-none focus:outline-none ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={closeModal}
                                >
                                    Cancel
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

