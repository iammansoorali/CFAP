import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  return Response.json(
    await prisma.carbonEntry.findUnique({
      where: { id: Number(params.id) }
    })
  );
}