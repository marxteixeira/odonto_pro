import { getAllServices } from "../_data-access/get-all-sevices";
import { ServicesList } from "./services-list";

interface ServicesContentProps {
    userId: string;
}

//apenas para teste da aula 87 (suspense api)
const delay = (ms: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

export async function ServicesContent({ userId  }: ServicesContentProps)  {

    //await delay(5000);
    const services = await getAllServices({ userId: userId })

    return (
        <ServicesList services = {services.data || []} />
    )
}