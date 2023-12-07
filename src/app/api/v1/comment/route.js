import prisma from "@/libs/prisma";

export async function POST(req) {
  const { anime_mal_id, user_email, comment, username, anime_title } =
    await req.json();
  const data = { anime_mal_id, user_email, comment, username, anime_title };

  const createComment = await prisma.comment.create({ data });
  if (!createComment) return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 201, isCreated: true, data: data });
}
