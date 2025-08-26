import { getAllServices } from "../_data-access/get-all-sevices";

interface ServicesContentProps {
    userId: string;
}
export async function ServicesContent({ userId  }: ServicesContentProps)  {

    const services = await getAllServices({ userId: userId })

    console.log(services)

    return (
        <div>
            TODOS OS MEUS SERVIÇOS
        </div>
    )
}