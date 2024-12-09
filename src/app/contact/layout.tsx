import React from 'react';

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="!scroll-smooth dark overflow-x-hidden bg-black">
      <body className="bg-black">
        {children}
      </body>
    </html>
  );
};

export default ContactLayout;