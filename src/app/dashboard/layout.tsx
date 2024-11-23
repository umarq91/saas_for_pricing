export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
         
        >
   Dashboard Header
          {children}
        </body>
      </html>
    );
  }
  