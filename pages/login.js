import { Layout, LoginForm } from 'components';

export default function LoginPage() {
  return (
    <Layout header={false} footer={false} pageTitle={false}>
      <LoginForm />
    </Layout>
  );
}