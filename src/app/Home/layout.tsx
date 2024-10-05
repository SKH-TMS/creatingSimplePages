

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     
        
         <>
          <div >
          <h1 >Home</h1>
     
          <div className="mt-8">{children}</div>
          
          </div>
        </>
    );
  }
  