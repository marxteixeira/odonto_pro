"use client"

import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { useDialogServiceForm, DialogServiceFormData } from "./dialog-service-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { convertRealToCents } from "@/utils/currency"

export function DialogService() {

    const form = useDialogServiceForm()

    async function onSubmit(values: DialogServiceFormData){
        const priceInCents = convertRealToCents(values.price)
        console.log(priceInCents)
    }

    function changeCurrency(event: React.ChangeEvent<HTMLInputElement>){
        let { value } = event.target;
        value = value.replace(/\D/g, '');

        // - Valor em centavos = Valor em reais * 100
        // - Valor em reais = valor em centavos / 100
        if(value){
            value = (parseInt(value, 10) / 100).toFixed(2); //conversão de centavos par reais
            value = value.replace('.', ',');
            value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
        }

        event.target.value = value;
        form.setValue("price", value)
    }

    return (
        <>
            <DialogHeader>
                <DialogTitle> Novo Serviço</DialogTitle>
                <DialogDescription>
                    Adicione um novo serviço
                </DialogDescription>
            </DialogHeader>

            <Form {...form}>
                <form
                    className="space-y-2"
                    onSubmit={form.handleSubmit(onSubmit)}>

                    <div className="flex flex-col">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="my-2">
                                    <FormLabel className="font-semibold">
                                        Nome do serviço:
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Digite o nome do serviço..."
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem className="my-2">
                                    <FormLabel className="font-semibold">
                                        Valor do serviço:
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Ex: 120,00"
                                            onChange={changeCurrency}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <p className="font-semibold">Tempo de duração do serviço:</p>
                        <div className="grid grid-cols-2 gap-3">
                            <FormField
                                control={form.control}
                                name="hours"
                                render={({ field }) => (
                                    <FormItem className="my-2">
                                        <FormLabel className="font-semibold">
                                            Horas:
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="1"
                                                min="0"
                                                type="number"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="minutes"
                                render={({ field }) => (
                                    <FormItem className="my-2">
                                        <FormLabel className="font-semibold">
                                            Minutos:
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="0"
                                                min="0"
                                                type="number"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full font-semibold text-white"
                        >
                            Adicionar serviço
                        </Button>

                    </div>
                </form>
            </Form>
        </>
    )
}