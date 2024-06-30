
export default function AdditionalQualification({ preStep, nextStep }){
  return (
     
      
    <div class="px-4">
    <form class="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4">
        <div className="px-4">
            <label htmlFor="responsibility" className="block text-gray-700 text-sm font-bold mb-2">PLEASE IDENTIFY ANY ADDITIONAL KNOWLEDGE,SKILLS,QUALIFICATION OR AWARDS THAT WILL BE HELPDUL TOMAS IN CONSIDERING YOUR APPLICATION FOR EMPLOYEMENT</label>
            <textarea rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"></textarea>
        </div>
        <div class="flex items-center justify-between mt-4">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={preStep}>Back</button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={nextStep}>Next</button>
        </div>
    </form>
</div>

  )
}