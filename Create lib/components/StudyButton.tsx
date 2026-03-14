"use client"

import { useState } from "react"

export default function StudyButton({ refresh }: any) {
  const [message, setMessage] = useState("")

  const markStudy = async () => {
    const res = await fetch("/api/study", {
      method: "POST"
    })

    const data = await res.json()

    setMessage(data.message)

    refresh()
  }

  return (
    <div className="mt-4">
      <button
        onClick={markStudy}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        I Studied Today
      </button>

      {message && <p className="mt-2">{message}</p>}
    </div>
  )
}
