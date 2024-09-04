import React from 'react';

const Contacts = () => {
    return (
        <div className="flex justify-center items-center mt-40 md:mt-30">
            <div className="max-w-lg w-full p-8 bg-gray-50 rounded-lg shadow-md">
                <h1 className="text-center text-2xl font-bold mb-6">Contact us</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <p className="mt-2 text-sm text-gray-500">
                            We'll never share your email with anyone else.
                        </p>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            placeholder="Your message here"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        ></textarea>
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            id="terms"
                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                            I agree to the terms and conditions
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;



