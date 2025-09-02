import { getAllServices } from "../_data-access/get-all-sevices";
import { ServicesList } from "./services-list";

interface ServicesContentProps {
    userId: string;
}
export async function ServicesContent({ userId  }: ServicesContentProps)  {

    const services = await getAllServices({ userId: userId })

    console.log(services)

    return (
        <ServicesList services = {services.data || []} />
    )
}