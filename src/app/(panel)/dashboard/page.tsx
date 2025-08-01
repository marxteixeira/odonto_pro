import getSession from '@/lib/getSession'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const session = await getSession()

  console.log(session)

  if (!session) {
    redirect("/")
  }

  return (
    <div>
      <h1>Página Dashboard</h1>

      <div className="w-full h-[600px] bg-gray-200 mb-10"></div>

      <div className="w-full h-[600px] bg-gray-500 mb-10"></div>

      <div className="w-full h-[600px] bg-gray-200 mb-10"></div>
    </div>
  )
}