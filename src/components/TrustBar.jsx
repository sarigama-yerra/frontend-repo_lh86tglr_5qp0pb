export default function TrustBar() {
  const logos = [
    { name: 'Montessori', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Montessori-logo.svg/320px-Montessori-logo.svg.png' },
    { name: 'STEM Labs', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Logo_STEM.svg/320px-Logo_STEM.svg.png' },
    { name: 'EdAlliance', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png' },
    { name: 'KidsCode', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png' },
  ];

  return (
    <section aria-label="Trusted by" className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center opacity-70">
          {logos.map((l) => (
            <div key={l.name} className="flex items-center justify-center">
              <img src={l.url} alt={l.name} className="h-8 object-contain grayscale" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
