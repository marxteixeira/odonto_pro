// Backend meusite.com/api/schedule/get-appointments

import prisma from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;

    const userId = searchParams.get('userId')
    const dateParam = searchParams.get('date')

    if (!userId || userId === "null" || !dateParam || dateParam === "null") {
        return NextResponse.json({
            error: "Nenhum agendamento encotnrado"
        }, {
            status: 400
        })
    }


    try {
        // Converte a data recebida em um objeto Date
        const [year, month, day] = dateParam.split("-").map(Number)
        const startDate = new Date(year, month - 1, day, 0, 0, 0)
        const endDate = new Date(year, month - 1, day, 23, 59, 59, 999)

        console.log("start date: ", startDate)
        console.log("end date: ", endDate)

        return NextResponse.json({
            ok: true
        })


    } catch (err) {
        console.log(err);
        return NextResponse.json({
            error: "Nenhum agendamento encotnrado"
        }, {
            status: 400
        })
    }


}