
export default function References({ preStep, nextStep }){
  return (
    <div className="overflow-hidden px-4">
         <form>
        <label htmlFor="responsibility" className="block text-gray-700 text-sm font-bold mb-2">PLEASE IDENTIFY ANY ADDITIONAL KNOWLEDGE,SKILLS,QUALIFICATION OR AWARDS THAT WILL BE HELPDUL TOMAS IN CONSIDERING YOUR APPLICATION FOR EMPLOYEMENT</label>
            <table className="min-w-500 min-h-400 bg-white border border-gray-200 mx-auto">
                
                     <thead>
                        <tr className="bg-gray-100">
                            <th className="border-b border-gray-200 px-6 py-3 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Name/title</th>
                            <th className="border-b border-gray-200 px-6 py-3 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Organization</th>
                            <th className="border-b border-gray-200 px-6 py-3 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Relationship</th>
                            <th className="border-b border-gray-200 px-6 py-3 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Telephonic Number</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-gray-300">
                        <tr>
                        <td className="border-b border-gray-200 px-6 py-4 text-center ">
                            <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
                        </td>
                        <td className="border-b border-gray-200 px-6 py-4 text-center">
                            <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
                        </td>
                        <td className="border-b border-gray-200 px-6 py-4 text-center">
                            <input type="text" className="w-full  text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
                        </td>
                        <td className="border-b border-gray-200 px-6 py-4 text-center">
                            <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
                        </td>
                        </tr>
                        <tr>
                        <td className="border-b border-gray-200 px-6 py-4 text-center ">
                            <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
                        </td>
                        <td className="border-b border-gray-200 px-6 py-4 text-center">
                            <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
                        </td>
                        <td className="border-b border-gray-200 px-6 py-4 text-center">
                            <input type="text" className="w-full  text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
                        </td>
                        <td className="border-b border-gray-200 px-6 py-4 text-center">
                            <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
                        </td>
                        </tr>
                    </tbody>
                            
            
      </table>
      <div class="flex items-center justify-between mt-4">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={preStep}>Back</button>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={nextStep}>Next</button>
                        </div>

                        </form>
      
      </div>

  )
}