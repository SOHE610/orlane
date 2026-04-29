import { motion } from "framer-motion";

const souvenirs = [
  { year: "Sourires", text: "Pour ton rire qui éclaire les pièces les plus sombres." },
  { year: "Force", text: "Pour ta capacité à te relever, toujours, avec grâce." },
  { year: "Cœur", text: "Pour la générosité que tu offres sans jamais compter." },
  { year: "Talent", text: "Pour cette créativité qui te rend unique au monde." },
];

export const Souvenirs = () => {
  return (
    <section id="souvenirs" className="py-24 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-3"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase">Souvenirs</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Ce que <span className="text-gradient italic">nous célébrons</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden md:block" />
          <div className="space-y-12">
            {souvenirs.map((s, i) => (
              <motion.div
                key={s.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/2 glass rounded-3xl p-7">
                  <h3 className="font-display text-3xl text-gradient mb-2">{s.year}</h3>
                  <p className="text-muted-foreground">{s.text}</p>
                </div>
                <div className="w-5 h-5 rounded-full bg-gradient-primary shadow-glow shrink-0" />
                <div className="md:w-1/2 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
