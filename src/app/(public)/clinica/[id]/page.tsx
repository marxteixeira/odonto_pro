import { redirect } from 'next/navigation'
import { getInfoSchedule } from './_data_access/get-info-schedule'
import { ScheduleContent } from './_components/schedule-context'

export default async function SchedulePage({
    params,
}: {
    params: Promise<{ id: string}>
}) {

    const userId = (await params).id
    const user = await getInfoSchedule({  userId: userId })

    if(!user){
        redirect("/")
    }

    console.log(user)

    return (
        <ScheduleContent />
    )
}