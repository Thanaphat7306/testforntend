export default function DashboardPage() {
  return (
    <>
        <div className="bg-gray-300 flex min- h-screen  ">
<aside className="w-64 bg-white p-8 ">
            <h1 className="text-4xl font-bold mb-8">YourLogo</h1>
            <div className="text-gray-700 text-lg hover:text-blue-700 cursor-pointer m-4">Dashboard</div>
            <div className="text-gray-700 text-lg hover:text-blue-700 cursor-pointer m-4">Users</div>
            <div className="text-gray-700 text-lg hover:text-blue-700 cursor-pointer m-4">Document</div>
            <div className="text-gray-700 text-lg hover:text-blue-700 cursor-pointer m-4">Photos</div>
            <div className="text-gray-700 text-lg hover:text-blue-700 cursor-pointer m-4">Hierarchy</div>
            <br />
            <div className="text-gray-700 text-lg hover:text-blue-700 cursor-pointer m-4">Message</div>
            <div className="text-gray-700 text-lg hover:text-blue-700 cursor-pointer m-4">Help</div>
            <div className="text-gray-700 text-lg hover:text-blue-700 cursor-pointer m-4">Setting</div>
        </aside>
        <main className="flex-1 p-10">
            <div>
                <h2 className="text-2xl font-bold ">Hello, Lekan</h2>
                <p className="text-gray-700">Have a nice day</p>
                <div className="flex justify-between items-start mb-8">
                    <h3 className="text-xl font-bold text-blue-500 mt-4">Users Dashboard</h3>
                </div>
            </div>

        </main >
            
        </div>
    </>
    

   
    
  )
}