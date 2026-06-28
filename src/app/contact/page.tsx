import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | MahakTech',
  description: 'Get in touch with MahakTech. Let\'s build something extraordinary.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto py-24">
        <h1 className="text-5xl font-bold mb-8">Contact Us</h1>
        <p className="text-xl text-slate-mist">Coming soon.</p>
      </div>
    </div>
  );
}
