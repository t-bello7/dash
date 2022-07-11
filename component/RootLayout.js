const RootLayout = ({children}) => {
    return (
        <html>
            <body>
                <h1> Header </h1>
                {children}
            </body>
        </html>
    )
}
export default RootLayout;