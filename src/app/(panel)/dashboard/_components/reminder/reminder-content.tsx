"use client"

import { Button } from "@/components/ui/button"
import { useReminderForm, ReminderFormdata } from "././reminder-form"
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage
} from "@/components/ui/form"
import { Textarea } from '@/components/ui/textarea'


export function ReminderContent() {

  const form = useReminderForm()

  async function onSubmit(formData: ReminderFormdata) {

    console.log(formData.description)
  }

  return (
    <div className="grid gap-4 py-4">
      <Form {...form}>
        <form
          className="flex flex-col gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Descreva o lembrete:</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Digite o nome do lembrete..."
                    className="max-h-52"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={!form.watch("description")}
          >
            Cadastrar lembrete
          </Button>
        </form>
      </Form>
    </div>
  )
}