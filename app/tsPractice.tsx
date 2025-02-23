export default function React({
    children,
} : {
    children: React.ReactNode
}) {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    )
}