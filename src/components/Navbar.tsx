import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Vœux", href: "#voeux" },
  { label: "Souvenirs", href: "#souvenirs" },
  { label: "Cadeaux", href: "#cadeaux" },
  { label: "Lettre", href: "#lettre" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 inset-x-0 z-50 glass"
    >
      <nav className="container flex items-center justify-between h-20">
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="font-display text-xl font-bold text-gradient">AKPLA Orlane</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-11 h-11 rounded-full bg-gradient-primary grid place-items-center shadow-soft"
          aria-label="menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden overflow-hidden glass border-t border-border/50"
        >
          <ul className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-foreground/90 hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};
