import React,{useContext} from "react";
export default function GeneralInfo({nextStep}){
    return (
       
        
        <div className="px-4">
    <form className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4">
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">FULL NAME</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
        </div>

        <div className="flex flex-col md:flex-row mb-4">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">MOBILE NUMBER</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
            </div>
            <div className="w-full md:w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">FAX NUMBER</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
            </div>
        </div>

        <div className="flex flex-col md:flex-row mb-4">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">EMAIL</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email"/>
            </div>
            <div className="w-full md:w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">EARLIEST START DATE</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date"/>
            </div>
        </div>

        <div className="flex flex-col md:flex-row mb-4">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">PRESENT SALARY</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
            </div>
            <div className="w-full md:w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">SALARY DESIRED</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
            </div>
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">POSITION DESIRED</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-4">
            <div className="w-full md:w-1/2 flex items-center mb-4 md:mb-0 md:mr-4">
                <input id="part-time" type="radio" name="employment" className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"/>
                <label for="part-time" className="ml-2 text-gray-700 text-sm font-bold">PART-TIME</label>
            </div>
            <div className="w-full md:w-1/2 flex items-center">
                <input id="full-time" type="radio" name="employment" className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"/>
                <label for="full-time" className="ml-2 text-gray-700 text-sm font-bold">FULL-TIME</label>
            </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-4">
            <label className="w-full md:w-auto text-gray-700 text-sm font-bold mb-2 md:mb-0">HAVE YOU EVER APPLIED TO SB & COMPANY, LLC BEFORE</label>
            <div className="flex items-center">
                <input id="applied-yes" type="radio" name="applied" className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 ml-4"/>
                <label for="applied-yes" className="ml-2 text-gray-700 text-sm font-bold">Yes</label>
            </div>
            <div className="flex items-center ml-4">
                <input id="applied-no" type="radio" name="applied" className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"/>
                <label for="applied-no" className="ml-2 text-gray-700 text-sm font-bold">No</label>
            </div>
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">IF YES, WHAT?</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-4">
            <label className="w-full md:w-auto text-gray-700 text-sm font-bold mb-2 md:mb-0">ARE YOU LEGALLY PERMITTED TO WORK IN THIS COUNTRY?</label>
            <div className="flex items-center">
                <input id="work-yes" type="radio" name="work" className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 ml-4"/>
                <label for="work-yes" className="ml-2 text-gray-700 text-sm font-bold">Yes</label>
            </div>
            <div className="flex items-center ml-4">
                <input id="work-no" type="radio" name="work" className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"/>
                <label for="work-no" className="ml-2 text-gray-700 text-sm font-bold">No</label>
            </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-4">
            <label className="w-full md:w-auto text-gray-700 text-sm font-bold mb-2 md:mb-0">WILL YOU NOW OR IN THE FUTURE REQUIRE SPONSORSHIP FOR EMPLOYMENT VISA STATUS?</label>
            <div className="flex items-center">
                <input id="visa-yes" type="radio" name="visa" className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 ml-4"/>
                <label for="visa-yes" className="ml-2 text-gray-700 text-sm font-bold">Yes</label>
            </div>
            <div className="flex items-center ml-4">
                <input id="visa-no" type="radio" name="visa" className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"/>
                <label for="visa-no" className="ml-2 text-gray-700 text-sm font-bold">No</label>
            </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-4">
            <label className="w-full md:w-auto text-gray-700 text-sm font-bold mb-2 md:mb-0">HAVE YOU EVER BEEN CONVICTED OF A CRIME OTHER THAN A MINOR TRAFFIC VIOLATION?</label>
            <div className="flex items-center">
                <input id="crime-yes" type="radio" name="crime" className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 ml-4"/>
                <label for="crime-yes" className="ml-2 text-gray-700 text-sm font-bold">Yes</label>
            </div>
            <div className="flex items-center ml-4">
                <input id="crime-no" type="radio" name="crime" className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"/>
                <label for="crime-no" className="ml-2 text-gray-700 text-sm font-bold">No</label>
            </div>
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold">IF YES, GIVE DETAILS ON A SEPARATE PAGE AND ATTACH TO THE APPLICATION</label>
        </div>
        <div className="flex items-center justify-center mt-4">
             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={nextStep}>Next</button>
        </div>

    </form>
</div>

    )
}