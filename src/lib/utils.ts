import { clsx } from "clsx"
import { Metadata } from "next";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export function constructMetadata({
  title = "MBody Evolution - Personal training cu Mihaela Bordeianu",
  description = "Transformă-ți viața cu MBody Evolution și Mihaela Bordeianu, antrenor personal dedicat, oferind programe personalizate de fitness și nutriție pentru a-ți atinge obiectivele de sănătate și wellness.",
  keywords = "antrenor personal, Mihaela Bordeianu, fitness, wellness, programe personalizate, antrenamente, nutriție, MBody Evolution, sănătate, București, transformare corporală, lifestyle sănătos, antrenor fitness",
  image = "/hero2.jpg",
  icons = "/icon.svg",
}: {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
      type: 'website',
    },
    twitter: {
      card: "summary_large_image",
      title,
      site:"https://mbody.ro",
      description,
      images: [image],
      creator: "@micky_bordeianu",
    },
    icons,
    metadataBase: new URL("https://mbody.vercel.app"),
  };
}
