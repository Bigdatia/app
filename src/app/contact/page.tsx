import { redirect } from 'next/navigation';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Call - Bigdatia",
  description: "Get a call from one of our consultants.",
};


export default function ContactoPage() {
  // Reemplaza el número con tu número de WhatsApp
  // incluyendo el código de país (57 para Colombia), sin espacios ni símbolos
  redirect("https://wa.me/573164856744?text=Hi,%20I'm%20interested%20in%20the%20service");

  // No es necesario retornar nada, la redirección interrumpe la renderización.
}