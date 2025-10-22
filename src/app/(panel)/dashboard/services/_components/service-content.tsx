import { canPermission } from "@/utils/permissions/canPermission";
import { getAllServices } from "../_data-access/get-all-sevices";
import { ServicesList } from "./services-list";
import { LabelSubscription } from "@/components/ui/label-subscription";

interface ServicesContentProps {
    userId: string;
}

//apenas para teste da aula 87 (suspense api)
const delay = (ms: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

export async function ServicesContent({ userId }: ServicesContentProps) {

    //await delay(5000);
    const services = await getAllServices({ userId: userId })
    const permissions = await canPermission({ type: "service" })

    console.log("PERMISSIONS: ", permissions)

    return (
        <>
            {!permissions.hasPermission && (
                <LabelSubscription expired={permissions.expired} />
            )}
            <ServicesList services={services.data || []} permission={permissions} />
        </>

    )
}