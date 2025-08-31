"use client"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'
import { DialogService } from './dialog-service'

export function ServicesList() {

    const [isDialogOpen, setIsDialogOpen] = useState(false)

    return(
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <section className='mx-auto'>
            
            <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-xl md:text-2x1 font-bold'>Serviços</CardTitle>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className='w=4 h-4'/>
                        </Button>
                    </DialogTrigger>

                    <DialogContent>
                        <DialogService
                            closeModal={ () => {
                                setIsDialogOpen(false);
                            }}
                        />
                    </DialogContent>
                </CardHeader>
            </Card>
        </section>
        </Dialog>
        
    )
}