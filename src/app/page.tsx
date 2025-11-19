import { COMPANY_INFO } from "@/lib/constants";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-50">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-slate-900">{COMPANY_INFO.name}</h1>
        <p className="text-xl text-slate-600">
          Medicare Made Simple in {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}.
        </p>
        <div className="mt-8 inline-block p-4 bg-blue-100 text-blue-800 rounded-lg font-medium">
          🚧 Site Revamp In Progress
        </div>
        <p className="text-sm text-slate-400 mt-4">
          Call us at: {COMPANY_INFO.phone}
        </p>
      </div>
    </main>
  );
}