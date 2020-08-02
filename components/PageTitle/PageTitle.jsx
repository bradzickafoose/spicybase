import React from 'react';

function PageTitle({ title, children }) {
  return (
    <header>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {children}
        <h1 className="text-3xl font-bold leading-tight text-gray-700">
          {title}
        </h1>
      </div>
    </header>
  );
}

export default PageTitle;
