import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  return prisma.carbonEntry.create({
    data: body
  });
}
