import Sidebar from "@/components/Sidebar"

export default function DashboardPage() {
  return (
    <div className="flex min h-screen bg-gray-100">
        <Sidebar />
      <h1>Users Dashboard</h1>
    </div>
  )
}