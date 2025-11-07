import "./globals.css";

import type { Metadata } from "next";
import { Roboto, Ubuntu } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import AmplitudeContextProvider from "@/context/amplitude";
import { ComponentLocaleProps } from "@/utils/i18nConfig";
import { routing } from "@/i18n/routing";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "700", "500"],
  display: "swap",
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: ["400"],
});

export async function generateMetadata(
  props: ComponentLocaleProps,
): Promise<Metadata> {
  const params = await props.params;

  const { locale } = params;

  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    metadataBase: new URL(t("link")),
    openGraph: {
      images: [t("ogImage")],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;

  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const { children } = props;

  return (
    <html className={`${roboto.variable} ${ubuntu.variable}`} lang={locale}>
      <body className="font-roboto antialiased">
        <NextIntlClientProvider>
          <AmplitudeContextProvider>{children}</AmplitudeContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
