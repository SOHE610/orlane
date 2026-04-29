import { motion } from "framer-motion";
import { Gift, Phone, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

// 📱 Modifie ce numéro avec celui d'Orlane
const PHONE_NUMBER = "+229 01 42 05 18 67";

export const Cadeaux = () => {
  const [copied, setCopied] = useState(false);

  const copyNumber = () => {
    navigator.clipboard.writeText(PHONE_NUMBER.replace(/\s/g, ""));
    setCopied(true);
    toast.success("Numéro copié ! 🎁");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="cadeaux" className="py-24 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-10 space-y-3">
            <span className="text-primary text-sm tracking-[0.3em] uppercase">Cadeaux</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Lui offrir <span className="text-gradient italic">un présent</span>
            </h2>
            <p className="text-muted-foreground">
              Tu souhaites lui faire plaisir ? Voici son numéro pour envoyer ton cadeau ou ton mobile money 💝
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden border-2 border-primary/40 shadow-glow"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl" />

            <div className="relative space-y-6 text-center">
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="w-20 h-20 mx-auto rounded-2xl bg-gradient-primary grid place-items-center shadow-soft"
              >
                <Gift className="w-10 h-10 text-white" />
              </motion.div>

              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">
                  Son numéro
                </p>
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  <Phone className="w-6 h-6 text-primary" />
                  <span className="font-display text-2xl md:text-4xl font-bold text-gradient select-all">
                    {PHONE_NUMBER}
                  </span>
                </div>
              </div>

              <Button
                onClick={copyNumber}
                size="lg"
                className="bg-gradient-primary hover:opacity-90 rounded-full h-12 px-8 shadow-soft"
              >
                {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                {copied ? "Copié !" : "Copier le numéro"}
              </Button>

              <p className="text-xs text-muted-foreground italic pt-2">
                Mobile Money, MTN, Moov, Wave — fais-toi plaisir 🎀
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
