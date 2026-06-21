import { prisma } from "@/lib/prisma";

export async function DELETE(request: Request) {
  const body = await request.json();

  return Response.json(
    await prisma.carbonEntry.delete({
      where: { id: body.id }
    })
  );
}