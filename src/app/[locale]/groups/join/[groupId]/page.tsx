import { getTranslations, setRequestLocale } from "next-intl/server";

import { api } from "@/data/api";
import { GroupResponse } from "@/data/types/group";

import OpenApp from "./OpenApp";

export interface JoinGroupProps {
  params: Promise<{
    groupId: string;
    locale: string;
  }>;
}

async function getGroupData(
  groupId: string,
): Promise<GroupResponse | undefined> {
  try {
    const response = await api(`/groups/invite/${groupId}`, {
      next: {
        revalidate: 1, // 1 hour
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
    title: t("title", { groupName: group?.group.name || "" }),
    description: t("description", { invitedFor: group?.invitedBy.name || "" }),
    openGraph: {
      images: [group?.group.imageUrl],
    },
  };
}

export default async function JoinGroup(props: JoinGroupProps) {
  const params = await props.params;
  setRequestLocale(params.locale);

  return <OpenApp groupId={params.groupId} />;
}
