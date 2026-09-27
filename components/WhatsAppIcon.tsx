import { siWhatsapp } from "simple-icons";

export default function WhatsAppIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d={siWhatsapp.path} />
    </svg>
  );
}

