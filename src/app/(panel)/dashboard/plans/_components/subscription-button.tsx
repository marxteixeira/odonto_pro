"use client"

import { Button } from "@/components/ui/button"
import { Plan } from "@prisma/client"
import { createSubscription } from '../_actions/create-subcription'

interface SubscriptionButtonProps {
    type: Plan
}

export function SubscriptionButton({ type }: SubscriptionButtonProps) {

    async function handleCreateBilling() {

        const response = await createSubscription({ type: type })

    }

    return (
        <Button
            className={`w-full ${type === "PROFESSIONAL" && "bg-emerald-500 hover:bg-emerald-400"}`}
            onClick={handleCreateBilling}
        >
            Ativar assinatura
        </Button>
    )
}