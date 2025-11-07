import { setRequestLocale } from "next-intl/server";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HowToCreateDebt } from "@/components/how-to-create-debt";
import { HowToPayDebt } from "@/components/how-to-pay-debt";
import { Welcome } from "@/components/welcome";
import { ComponentLocaleProps } from "@/utils/i18nConfig";

export default async function Home(props: ComponentLocaleProps) {
  const params = await props.params;

  const { locale } = params;

  setRequestLocale(locale);

  return (
    <>
      <Header />
      <Welcome />
      <HowToCreateDebt />
      <HowToPayDebt />
      {/* <Roadmap /> */}
      {/* <TakePart /> */}
      <Footer />
    </>
  );
}
