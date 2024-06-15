import assetLinks from './assetlinks.json'

export async function GET() {
  return Response.json(assetLinks)
}
