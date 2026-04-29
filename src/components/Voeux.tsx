import { motion } from "framer-motion";
import { Heart, Star, Crown } from "lucide-react";

const voeux = [
  {
    icon: Heart,
    title: "Amour infini",
    text: "Que ton cœur déborde d'amour et que chaque jour te rappelle combien tu es précieuse.",
  },
  {
    icon: Star,
    title: "Lumière éclatante",
    text: "Continue de briller comme une étoile, illuminant tout ce qui t'entoure de ta présence.",
  },
  {
    icon: Crown,
    title: "Réussite royale",
    text: "Que cette nouvelle année couronne tous tes efforts et te conduise vers des sommets inespérés.",
  },
];

export const Voeux = () => {
  return (
    <section id="voeux" className="py-24 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-3"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase">Mes Vœux</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Pour toi, <span className="text-gradient italic">Orlane</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {voeux.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass rounded-3xl p-8 group hover:border-primary/60 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary grid place-items-center mb-5 group-hover:scale-110 transition-transform shadow-soft">
                <v.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
