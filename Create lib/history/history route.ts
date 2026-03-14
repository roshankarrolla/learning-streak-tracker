import { NextResponse } from "next/server"
import { getDates } from "@/lib/data"

export async function GET() {
  const dates = getDates().sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  )

  return NextResponse.json({ dates })
}
