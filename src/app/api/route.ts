import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const base = request.nextUrl.searchParams.get("base") ?? 0;
  const random = Math.floor(Math.random() * 1000) + 1;
  return Response.json({
    random: random,
    base: base,
    sum: random + parseInt(base as string),
    now: Date.now(),
    verson: "0.0.11",
  });
}
