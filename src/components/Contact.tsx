import { motion } from "framer-motion";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

// 🔗 Modifie ces liens avec les vrais comptes d'Orlane
const SOCIALS = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/2290142051867",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "",
    color: "from-pink-500 via-fuchsia-500 to-orange-400",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/orlane.immaculee",
    color: "from-blue-500 to-blue-700",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3 mb-12"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase">Contact</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            La <span className="text-gradient italic">contacter</span>
          </h2>
          <p className="text-muted-foreground">Envoie-lui un message direct sur ses réseaux 💌</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5">
          {SOCIALS.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="glass rounded-3xl p-8 group hover:border-primary/60 transition-all"
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${s.color} grid place-items-center mb-4 group-hover:scale-110 transition-transform shadow-soft`}>
                <s.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold">{s.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">Lui écrire</p>
            </motion.a>
          ))}
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-border/50 text-sm text-muted-foreground"
        >
          <p>Fait avec <span className="text-primary">♥</span> pour <span className="font-script text-lg text-gradient">Orlane AKPLA</span></p>
          <p className="text-xs mt-2 opacity-70">© {new Date().getFullYear()} — Joyeux Anniversaire</p>
        </motion.footer>
      </div>
    </section>
  );
};
