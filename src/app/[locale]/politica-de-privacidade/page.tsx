import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { ComponentLocaleProps } from "@/utils/i18nConfig";

export default async function PrivacyPolicy(props: ComponentLocaleProps) {
  const params = await props.params;

  const { locale } = params;

  setRequestLocale(locale);
  const t = useTranslations("PrivacyPolicy");

  return (
    <div className="mx-auto flex max-w-4xl flex-col p-16">
      <h1 className="mb-4 text-3xl font-bold">{t("title")}</h1>
      <p className="mb-2">{t("lastUpdate")}</p>

      <p className="mb-4">{t("developer")}</p>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">
          {t("informationCollection-title")}
        </h2>
        <p className="mb-4">{t("informationCollection-description")}</p>

        <div className="mb-4">
          <h3 className="mb-2 text-xl font-bold">
            {t("informationCollection-directInformation-title")}
          </h3>
          <ul className="ml-6 list-disc">
            <li className="mb-2">
              {t("informationCollection-directInformation-accountInfo")}
            </li>
            <li className="mb-2">
              {t("informationCollection-directInformation-userContent")}
            </li>
            <li className="mb-2">
              {t("informationCollection-directInformation-communications")}
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="mb-2 text-xl font-bold">
            {t("informationCollection-automaticInformation-title")}
          </h3>
          <ul className="ml-6 list-disc">
            <li className="mb-2">
              {t("informationCollection-automaticInformation-usageInfo")}
            </li>
            <li className="mb-2">
              {t("informationCollection-automaticInformation-deviceInfo")}
            </li>
            <li className="mb-2">
              {t("informationCollection-automaticInformation-locationInfo")}
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="mb-2 text-xl font-bold">
            {t("informationCollection-thirdPartyInformation-title")}
          </h3>
          <p className="ml-6">
            {t("informationCollection-thirdPartyInformation-description")}
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">{t("informationUse-title")}</h2>
        <p className="mb-4">{t("informationUse-description")}</p>
        <ul className="ml-6 list-disc">
          <li className="mb-2">{t("informationUse-provideImproveApp")}</li>
          <li className="mb-2">{t("informationUse-personalizeExperience")}</li>
          <li className="mb-2">{t("informationUse-communicate")}</li>
          <li className="mb-2">{t("informationUse-protectRights")}</li>
          <li className="mb-2">{t("informationUse-complyLaws")}</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">
          {t("informationSharing-title")}
        </h2>
        <p className="mb-4">{t("informationSharing-description")}</p>
        <ul className="ml-6 list-disc">
          <li className="mb-2">{t("informationSharing-withConsent")}</li>
          <li className="mb-2">
            {t("informationSharing-withServiceProviders")}
          </li>
          <li className="mb-2">{t("informationSharing-forLegalReasons")}</li>
          <li className="mb-2">{t("informationSharing-protectOurRights")}</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">{t("privacyRights-title")}</h2>
        <p className="mb-4">{t("privacyRights-description")}</p>
        <ul className="ml-6 list-disc">
          <li className="mb-2">{t("privacyRights-access")}</li>
          <li className="mb-2">{t("privacyRights-correction")}</li>
          <li className="mb-2">{t("privacyRights-deletion")}</li>
          <li className="mb-2">{t("privacyRights-opposition")}</li>
          <li className="mb-2">{t("privacyRights-dataPortability")}</li>
        </ul>
        <p className="ml-6">{t("privacyRights-exerciseRights")}</p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">{t("dataSecurity-title")}</h2>
        <p className="mb-4">{t("dataSecurity-description")}</p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">{t("children-title")}</h2>
        <p className="mb-4">{t("children-description")}</p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">{t("policyChanges-title")}</h2>
        <p className="mb-4">{t("policyChanges-description")}</p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold">{t("contact-title")}</h2>
        <p>
          {t.rich("contact-description", {
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
    </div>
  );
}
