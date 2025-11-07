import appleAppSiteAssociation from "./apple-app-site-association.json";

export async function GET() {
  return Response.json(appleAppSiteAssociation);
}
