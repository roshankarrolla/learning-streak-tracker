"use client"

import { useEffect, useState } from "react"
import StreakCard from "@/components/StreakCard"
import StudyButton from "@/components/StudyButton"

export default function Home() {
  const [data, setData] = useState({
    currentStreak: 0,
    totalDays: 0,
    lastStudyDate: null
  })

  const loadData = async () => {
    const res = await fetch("/api/streak")
    const json = await res.json()
    setData(json)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to Learning Tracker
      </h1>

      <StreakCard
        streak={data.currentStreak}
        total={data.totalDays}
        lastDate={data.lastStudyDate}
      />

      <StudyButton refresh={loadData} />
    </div>
  )
}
