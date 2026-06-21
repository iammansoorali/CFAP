import { prisma } from "@/lib/prisma";

export async function PUT(request: Request) {
  const body = await request.json();

  return Response.json(
    await prisma.carbonEntry.update({
      where: { id: body.id },
      data: body
    })
  );
}