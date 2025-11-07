import { getTranslations, setRequestLocale } from "next-intl/server";

import { api } from "@/data/api";
import { Group } from "@/data/types/group";

import OpenApp from "./OpenApp";

export interface JoinGroupProps {
  params: Promise<{
    groupId: string;
    locale: string;
  }>;
}

async function getGroupData(groupId: string): Promise<Group | undefined> {
  try {
    const response = await api(`/landing-page/groups/${groupId}`, {
      next: {
        revalidate: 60 * 60, // 1 hour
      },
    });

    const group = await response.json();

    return group;
  } catch (error) {
    console.log("Error fetching group data", error);
  }
}

export async function generateMetadata(props: JoinGroupProps) {
  const params = await props.params;

  const { groupId, locale } = params;

  const group = await getGroupData(groupId);
  const t = await getTranslations({ locale, namespace: "GroupInviteLink" });

  return {
    title: t("title", { groupName: group?.name }),
    description: t("description", { invitedFor: group?.invitedBy.name }),
    openGraph: {
      images: [group?.photo],
    },
  };
}

export default async function JoinGroup(props: JoinGroupProps) {
  const params = await props.params;
  setRequestLocale(params.locale);

  return <OpenApp groupId={params.groupId} />;
}
