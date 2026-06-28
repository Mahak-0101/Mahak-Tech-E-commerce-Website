import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Company | MahakTech',
  description: 'Learn about MahakTech, our mission, team, and growth timeline.',
};

export default function CompanyPage() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto py-24">
        <h1 className="text-5xl font-bold mb-8">Our Company</h1>
        <p className="text-xl text-slate-mist">Coming soon.</p>
      </div>
    </div>
  );
}
