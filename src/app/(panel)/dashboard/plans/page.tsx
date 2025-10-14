import getSession from "@/lib/getSession"
import { redirect } from "next/navigation"
import { GridPlans } from "./_components/grid-plans"
import { getSubscription } from "@/utils/get-subscriptions"

export default async function Plans() {
    const session = await getSession()

    if (!session) {
        redirect("/")
    }

    const subscritpion = await getSubscription({ userId: session?.user?.id! })

    return (
        <div>

            {subscritpion?.status !== "active" && (
                <GridPlans />
            )}

            {subscritpion?.status === "active" && (
                <div>Você tem uma assinatura ativa</div>
            )}

        </div>
    )
}