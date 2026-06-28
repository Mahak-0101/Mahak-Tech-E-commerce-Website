import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | MahakTech',
  description: 'Terms of service for MahakTech.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-3xl mx-auto py-24">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-slate-mist">Coming soon.</p>
      </div>
    </div>
  );
}
