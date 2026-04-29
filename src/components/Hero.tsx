import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Bulles décoratives */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-accent/15 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-primary/40"
            style={{
              width: `${8 + Math.random() * 18}px`,
              height: `${8 + Math.random() * 18}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="container grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center lg:text-left"
        >
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {["JOIE", "SUCCÈS", "PAIX"].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
                className="px-4 py-1 rounded-full text-xs font-semibold tracking-widest border border-primary/50 text-primary bg-primary/10"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Joyeux<br />
            Anniversaire<br />
            <span className="text-gradient italic">Orlane AKPLA</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
            Aujourd'hui, nous célébrons une femme d'exception. Que cette nouvelle année
            soit le reflet de ta lumière intérieure : éclatante, chaleureuse et infiniment inspirante.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 shadow-soft text-base h-12 px-8 rounded-full">
              <a href="#voeux"><Sparkles className="w-4 h-4 mr-2" /> Lire les Vœux</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/50 text-foreground hover:bg-primary/10 rounded-full h-12 px-8">
              <a href="#souvenirs">Voir les Souvenirs <ArrowRight className="w-4 h-4 ml-2" /></a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground italic pt-4">
            « Chaque année est un nouveau chapitre de ton incroyable voyage. »
          </p>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute w-[420px] h-[420px] rounded-full border border-primary/30 animate-spin-slow" />
          <div className="absolute w-[480px] h-[480px] rounded-full border border-accent/20 animate-spin-slow" style={{ animationDirection: "reverse" }} />

          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden animate-pulse-glow border-4 border-primary/60">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/20" />
            <img
              src="/orlane.jpg"
              alt="Orlane AKPLA"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Petites bulles autour */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-6 h-6 rounded-full bg-primary/60 blur-sm"
              style={{
                top: `${20 + Math.sin(i) * 40}%`,
                left: `${20 + Math.cos(i) * 60}%`,
              }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

