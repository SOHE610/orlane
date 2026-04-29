import { motion } from "framer-motion";

export const Lettre = () => {
  return (
    <section id="lettre" className="py-24 relative">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-3"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase">Lettre</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Mots du <span className="text-gradient italic">cœur</span>
          </h2>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 relative shadow-soft"
        >
          <div className="absolute top-6 left-8 font-display text-7xl text-primary/40 leading-none">"</div>
          <div className="space-y-5 text-foreground/90 leading-relaxed text-lg pl-4">
            <p className="font-script text-3xl text-gradient">Chère Orlane,</p>
            <p>
              En ce jour si spécial, je voulais prendre un instant pour te dire à quel point
              tu comptes. Tu es une lumière, une force tranquille, une âme rare.
            </p>
            <p>
              Que cette nouvelle année t'apporte tout ce que tu mérites : la paix, l'amour,
              la santé, le succès, et mille petits bonheurs au quotidien.
            </p>
            <p>
              Continue d'être cette femme exceptionnelle, fidèle à elle-même, rayonnante
              et généreuse. Le monde est plus beau avec toi dedans.
            </p>
            <p className="font-script text-2xl text-primary pt-2">
              Joyeux anniversaire, ma belle. ✨
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  );
};
