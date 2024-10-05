
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     
        
         <>
          <h2 className="bg-red-600">inner layout item</h2>
          {children}
        </>
    );
  }
  