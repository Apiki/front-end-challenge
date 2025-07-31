import "../styles/globals.scss"

export default function RootLayout({ children }) {
  return (
    <html lang='pt' suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
