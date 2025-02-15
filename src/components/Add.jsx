import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";

const Add = ({ setCards }) => {
    const [showForm, setShowForm] = useState(false);
    const [description, setDescription] = useState("");

    // Toggle form visibility
    const handleButtonClick = (e) => {
        setShowForm(!showForm);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!description.trim()) return;
        setCards(prevCards => {
            const updatedCards = [...prevCards, { description }];
            localStorage.setItem("cards", JSON.stringify(updatedCards));
            return updatedCards;
        });

        setDescription("");
        setShowForm(false);
    };

    return (
        <div>
            {/* Plus Icon */}
            <div
                className="border-2 border-gray-300 text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl fixed bottom-5 right-7 cursor-pointer bg-blue-600 hover:bg-blue-700 hover:scale-110 transition-all shadow-lg"
                onClick={handleButtonClick}
            >
                <FaPlus />
            </div>

            {/* Form Modal */}
            {showForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="w-96 bg-gray-800 p-6 rounded-lg shadow-lg relative text-white">
                        {/* Close Button */}
                        <button
                            className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
                            onClick={handleButtonClick}
                        >
                            ✖
                        </button>

                        {/* Form */}
                        <h2 className="text-xl font-semibold mb-4 text-center">Add New Document</h2>
                        <form onSubmit={handleSubmit}>
                            {/* Description Input */}
                            <div className="mb-4">
                                <label className="block text-gray-300 mb-1">Description</label>
                                <textarea
                                    required
                                    name="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Enter details..."
                                    className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
                                    rows="4"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Add;
