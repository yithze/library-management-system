import { Metadata } from 'next';
import { SignInForm } from '../_components/signin-form';


export const metadata: Metadata = {
  title: 'Authentication | Sign In',
  description: 'Sign In page for authentication.'
};


export default function Page() {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <SignInForm />
    </div>
  )
}

