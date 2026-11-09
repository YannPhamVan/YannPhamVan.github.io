export default function VideoPresentationSection() {
  return (
    <section className="bg-white py-16 px-6 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
            Mon parcours en 60 secondes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            De l'ingénierie industrielle à la Data Science, découvrez le fil conducteur de mon parcours et ma manière d'aborder les problématiques métier.
          </p>
        </div>
        <div className="w-full aspect-video overflow-hidden rounded-xl border border-border bg-black shadow-sm">
          <iframe
            title="Yann Pham-Van – Présentation en 60 secondes"
            src="https://player.vimeo.com/video/1237583017?h=ec7f4f2230"
            width="100%"
            height="100%"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowFullScreen
            loading="lazy"
            tabIndex={0}
            style={{ border: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
