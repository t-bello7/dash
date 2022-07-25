import React from 'react';

const RootLayout = ({ children }) => (
  <>
    <header>
      hello
    </header>

    {children}

    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by best team ever

      </a>
    </footer>
  </>
);
export default RootLayout;
