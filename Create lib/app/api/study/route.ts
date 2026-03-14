import { NextResponse } from "next/server"
import { getDates, addDate } from "@/lib/data"

export async function POST() {
  const today = new Date().toISOString().split("T")[0]
  const dates = getDates()

  if (dates.includes(today)) {
    return NextResponse.json({
      message: "You have already marked today."
    })
  }

  addDate(today)

  return NextResponse.json({
    message: "Study marked successfully"
  })
}
