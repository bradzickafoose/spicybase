import { useState } from 'react';
import { APP_NAME } from 'utils/constants';

export default function Footer() {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer>
      <div className="px-4 pb-4 mx-auto text-center text-gray-500 max-w-7xl sm:px-6 sm:pb-4 lg:pb-4 lg:px-8">
        &copy; <span>{year}</span> {APP_NAME}, Inc. All rights reserved
      </div>
    </footer>
  );
}
