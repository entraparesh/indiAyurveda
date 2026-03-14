export default function ConsultationPage() {
  return (
    <main className="flex flex-col items-center justify-center py-16 px-8">
      
      {/* Page Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Book Your Consultation</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Schedule a personalized Ayurveda consultation with Dr. Harshali. 
          Choose a time that works best for you and start your wellness journey today.
        </p>
      </section>

      {/* Calendly Embed */}
      <section className="w-full max-w-4xl mb-12">
        <iframe
          src="https://calendly.com/entraparesh/new-meeting"
          width="100%"
          height="600"
          frameBorder="0"
          className="rounded shadow"
        ></iframe>
      </section>

      {/* WhatsApp Contact */}
      <section className="text-center">
        <p className="text-gray-700 mb-4">Prefer to chat directly?</p>
        <a
          href="https://wa.me/918698161990"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700"
        >
          Message us on WhatsApp
        </a>
      </section>
    </main>
  );
}