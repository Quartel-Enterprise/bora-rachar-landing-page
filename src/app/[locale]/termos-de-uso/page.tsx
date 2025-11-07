import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { ComponentLocaleProps } from "@/utils/i18nConfig";

export default async function Terms(props: ComponentLocaleProps) {
  const params = await props.params;

  const { locale } = params;

  setRequestLocale(locale);
  const t = useTranslations("TermsOfService");
  // const currentDate = new Date()
  // const formattedDate = `${currentDate.toLocaleDateString('pt-BR')} às ${currentDate.toLocaleTimeString('pt-BR')}`

  return (
    <div className="mx-auto flex max-w-4xl flex-col p-16">
      <h1 className="mb-4 text-3xl font-bold">{t("title")}</h1>
      <p className="mb-2">{t("lastUpdate")}</p>

      <p className="mb-10">{t("introduction")}</p>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">{t("acceptanceTitle")}</h2>
        <p className="mb-4">{t("acceptanceContent")}</p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">{t("eligibilityTitle")}</h2>
        <p className="mb-4">{t("eligibilityContent")}</p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">
          {t("serviceDescriptionTitle")}
        </h2>
        <p className="mb-4">{t("serviceDescriptionContent")}</p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">{t("accountCreationTitle")}</h2>
        <p className="mb-4">{t("accountCreationContent")}</p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">{t("appUsageTitle")}</h2>
        <p className="mb-4">{t("appUsageIntro")}</p>
        <ul className="ml-6 list-disc">
          <li className="mb-2">{t("appUsageListItem1")}</li>
          <li className="mb-2">{t("appUsageListItem2")}</li>
          <li className="mb-2">{t("appUsageListItem3")}</li>
          <li className="mb-2">{t("appUsageListItem4")}</li>
          <li className="mb-2">{t("appUsageListItem5")}</li>
          <li className="mb-2">{t("appUsageListItem6")}</li>
          <li className="mb-2">{t("appUsageListItem7")}</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">
          {t("dataProtectionLawTitle")}
        </h2>
        <p className="mb-4">{t("dataProtectionParagraph1")}</p>
        <p className="mb-4">{t("dataProtectionParagraph2")}</p>
        <p className="mb-4">{t("dataProtectionParagraph3")}</p>
        <p className="mb-4">{t("dataProtectionParagraph4")}</p>
        <ul className="ml-6 list-disc">
          <li className="mb-2">{t("collectedDataListItem1")}</li>
          <li className="mb-2">{t("collectedDataListItem2")}</li>
          <li className="mb-2">{t("collectedDataListItem3")}</li>
          <li className="mb-2">{t("collectedDataListItem4")}</li>
          <li className="mb-2">{t("collectedDataListItem5")}</li>
          <li className="mb-2">{t("collectedDataListItem6")}</li>
          <li className="mb-2">{t("collectedDataListItem7")}</li>
          <li className="mb-2">{t("collectedDataListItem8")}</li>
          <li className="mb-2">{t("collectedDataListItem9")}</li>
          <li className="mb-2">{t("collectedDataListItem10")}</li>
          <li className="mb-2">{t("collectedDataListItem11")}</li>
        </ul>
        <p className="mb-4">{t("dataProtectionParagraph5")}</p>
        <p className="mb-4">{t("dataProtectionParagraph6")}</p>
        <p className="mb-4">{t("dataProtectionParagraph7")}</p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">{t("userContentTitle")}</h2>
        <p className="mb-4">{t("userContentParagraph1")}</p>
        <p className="mb-4">{t("userContentParagraph2")}</p>
        <p className="mb-4">{t("userContentParagraph3")}</p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">
          {t("intellectualPropertyRightsTitle")}
        </h2>
        <p className="mb-4">{t("intellectualPropertyRightsParagraph1")}</p>
        <p className="mb-4">{t("intellectualPropertyRightsParagraph2")}</p>
        <p className="mb-4">{t("intellectualPropertyRightsParagraph3")}</p>
        <ul className="ml-6 list-disc">
          <li className="mb-2">{t("prohibitedContentListItem1")}</li>
          <li className="mb-2">{t("prohibitedContentListItem2")}</li>
          <li className="mb-2">{t("prohibitedContentListItem3")}</li>
          <li className="mb-2">{t("prohibitedContentListItem4")}</li>
          <li className="mb-2">{t("prohibitedContentListItem5")}</li>
          <li className="mb-2">{t("prohibitedContentListItem6")}</li>
          <li className="mb-2">{t("prohibitedContentListItem7")}</li>
          <li className="mb-2">{t("prohibitedContentListItem8")}</li>
          <li className="mb-2">{t("prohibitedContentListItem9")}</li>
          <li className="mb-2">{t("prohibitedContentListItem10")}</li>
          <li className="mb-2">{t("prohibitedContentListItem11")}</li>
          <li className="mb-2">{t("prohibitedContentListItem12")}</li>
          <li className="mb-2">{t("prohibitedContentListItem13")}</li>
          <li className="mb-2">{t("prohibitedContentListItem14")}</li>
          <li className="mb-2">{t("prohibitedContentListItem15")}</li>
          <li className="mb-2">{t("prohibitedContentListItem16")}</li>
          <li className="mb-2">{t("prohibitedContentListItem17")}</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">{t("thirdPartyLinksTitle")}</h2>
        <p className="mb-4">{t("thirdPartyLinksContent")}</p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">
          {t("disclaimerOfWarrantiesTitle")}
        </h2>
        <p className="mb-4">{t("disclaimerOfWarrantiesParagraph1")}</p>
        <p className="mb-4">{t("disclaimerOfWarrantiesParagraph2")}</p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">
          {t("limitationOfLiabilityTitle")}
        </h2>
        <p className="mb-4">{t("limitationOfLiabilityParagraph1")}</p>
        <p className="mb-4">{t("limitationOfLiabilityParagraph2")}</p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">{t("indemnificationTitle")}</h2>
        <p className="mb-4">{t("indemnificationContent")}</p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">
          {t("governingLawAndJurisdictionTitle")}
        </h2>
        <p className="mb-4">{t("governingLawAndJurisdictionParagraph1")}</p>
        <p className="mb-4">{t("governingLawAndJurisdictionParagraph2")}</p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">{t("terminationTitle")}</h2>
        <p className="mb-4">{t("terminationParagraph1")}</p>
        <p className="mb-4">{t("terminationParagraph2")}</p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">
          {t("generalProvisionsTitle")}
        </h2>
        <p className="mb-4">{t("generalProvisionsParagraph1")}</p>
        <p className="mb-4">{t("generalProvisionsParagraph2")}</p>
        <p className="mb-4">{t("generalProvisionsParagraph3")}</p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">{t("brazilianLawTitle")}</h2>
        <p className="mb-4">{t("brazilianLawContent")}</p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">
          {t("consumerProtectionCodeTitle")}
        </h2>
        <p className="mb-4">{t("consumerProtectionParagraph1")}</p>
        <p className="mb-4">
          {t.rich("consumerProtectionParagraph2", {
            consumerProtectionCodeLink: (chunk) => (
              <a
                href="https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {chunk}
              </a>
            ),
          })}
        </p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">
          {t("changesToTheseTermsTitle")}
        </h2>
        <p className="mb-4">{t("changesToTheseTermsContent")}</p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">{t("generalAspectsTitle")}</h2>
        <p className="mb-4">{t("generalAspectsParagraph1")}</p>
        <p className="mb-4">{t("generalAspectsParagraph3")}</p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">{t("languageTitle")}</h2>
        <p className="mb-4">{t("languageContent")}</p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">{t("contactUsTitle")}</h2>
        <p className="mb-4">
          {t.rich("contactUsContent", {
            contactEmail: (chunk) => (
              <a
                href="mailto:appborarachar@gmail.com"
                className="text-blue-600 hover:underline"
              >
                {chunk}
              </a>
            ),
          })}
        </p>
      </div>

      <p className="mb-4">{t("finalDisclaimer")}</p>
    </div>
  );
}
