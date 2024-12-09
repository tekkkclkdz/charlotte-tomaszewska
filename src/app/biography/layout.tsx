import React from 'react';

const BiographyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="!scroll-smooth dark overflow-x-hidden bg-black">
      <body className="bg-black">
        {children}
      </body>
    </html>
  );
};

export default BiographyLayout;