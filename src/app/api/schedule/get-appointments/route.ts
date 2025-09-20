// Backend meusite.com/api/schedule/get-appointments

import prisma from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    //Beuscar se tem agendamentos (appointments) em uma data específica de uma clínica.

    //Quais horários estão reservados.
    
    return NextResponse.json({
        ok: true
    })
}