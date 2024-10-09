// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'A fully responsive blogging website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="puff-in-center bg-custom min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-slate-800 flex items-center justify-between p-4 text-yellow-500 fixed top-0 w-full z-10">
          <div className="flex items-center">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/028/241/116/non_2x/english-alphabet-u-with-wings-logo-design-car-and-automotive-logo-concept-free-vector.jpg" 
              className="rounded-3xl h-10 w-auto mr-4" 
              alt="" 
            />
            <h1 className="text-xl font-bold">UBAID&apos;S Blogging Website</h1>
          </div>
          <img 
            src="https://static.vecteezy.com/system/resources/previews/028/241/116/non_2x/english-alphabet-u-with-wings-logo-design-car-and-automotive-logo-concept-free-vector.jpg" 
            className="rounded-3xl h-10 w-auto" 
            alt="Right Image" 
          />
        </header>

        {/* Main Content */}
        <main className="pt-20 flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-slate-800 p-4 text-yellow-500">
          <p className="text-center ">&copy; 2024 My Blog. All rights reserved.
          {/* <a href="" className='font-bold uppercase  text-black text-center p-3 rounded-3xl transition mt-4  '>about me</a> */}
          </p>
        </footer>
      </body>
    </html>
  );
}
