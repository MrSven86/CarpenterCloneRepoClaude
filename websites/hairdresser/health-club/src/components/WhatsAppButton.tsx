import { motion } from "framer-motion";
import whatsappIcon from "@/assets/whatsapp.svg";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5491134842107"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.4 }}
    >
      {/* Text bubble */}
      <div className="bg-background border border-border rounded-md px-4 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <span className="text-foreground font-semibold text-sm whitespace-nowrap" style={{ fontFamily: "var(--font-body)" }}>
          ¡Contactanos!
        </span>
      </div>

      {/* WhatsApp circle */}
      <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
        <img src={whatsappIcon} alt="WhatsApp" className="w-7 h-7" />
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
