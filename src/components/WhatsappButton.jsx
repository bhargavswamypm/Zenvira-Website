import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/917411702559"
      target="_blank"
      rel="noreferrer"
      className="
      fixed
      bottom-6
      right-6
      bg-green-500
      text-white
      p-4
      rounded-full
      shadow-xl
      text-3xl
      z-50"
    >
      <FaWhatsapp />
    </a>
  );
}