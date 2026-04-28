'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center px-4 py-24 text-center">
        <h1 className="mb-6 text-5xl font-bold md:text-7xl">
          AI-powered growth systems
          <br />
          <span className="text-accent">for brands that move fast</span>
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-400">
          We don't post for vanity. We build systems that print pipeline.
        </p>
        <div className="flex gap-4">
          <button className="rounded-lg bg-accent px-8 py-3 font-semibold text-black transition-smooth hover:shadow-lg hover:shadow-accent/50">
            Book Strategy Call
          </button>
          <button className="border border-accent px-8 py-3 font-semibold text-accent transition-smooth hover:bg-accent/10">
            Try Our AI Agent →
          </button>
        </div>
      </section>

      {/* Services (stub) */}
      <section className="px-4 py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">What We Build</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {['Meta Ads', 'IG Growth', 'DM Automation', 'AI Voice Agents', 'Brand Identity', 'Funnel Audits'].map(
            (service) => (
              <div key={service} className="rounded-lg border border-gray-800 bg-gray-950 p-6">
                <h3 className="font-semibold text-accent">{service}</h3>
              </div>
            )
          )}
        </div>
      </section>

      {/* CTA (stub) */}
      <section className="px-4 py-24 text-center">
        <h2 className="mb-4 text-3xl font-bold">Ready to build?</h2>
        <p className="mb-8 text-gray-400">Let's talk about your growth goals.</p>
      </section>
    </div>
  );
