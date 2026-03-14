import { NextResponse } from "next/server"
import { getDates } from "@/lib/data"
import { calculateStreak } from "@/lib/streakLogic"

export async function GET() {
  const dates = getDates()

  const streak = calculateStreak(dates)

  return NextResponse.json({
    currentStreak: streak,
    totalDays: dates.length,
    lastStudyDate: dates[dates.length - 1] || null
  })
}
