import React from 'react';
import { Breadcrumbs, PageTitle } from '../../components';

function LoginAndSecurity() {
  return (
    <div className="py-10">
      <PageTitle title="Login &amp; security">
        <Breadcrumbs />
      </PageTitle>
      <main>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* <!-- Replace with your content --> */}
          <div className="px-4 py-8 sm:px-0">
            <div className="border-4 border-gray-200 border-dashed rounded-lg h-96"></div>
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </main>
    </div>
  );
}

export default LoginAndSecurity;