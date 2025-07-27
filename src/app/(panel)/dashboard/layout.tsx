
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <h1 className="font-bold">SIDEBAR TESTE DO LAYOUT</h1>
            {children}
        </>
    )
}