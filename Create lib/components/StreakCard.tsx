interface Props {
  streak: number
  total: number
  lastDate: string | null
}

export default function StreakCard({ streak, total, lastDate }: Props) {
  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h2 className="text-xl font-bold">Dashboard</h2>

      <p className="mt-2">Current Streak: {streak} days</p>
      <p>Total Study Days: {total}</p>
      <p>Last Studied: {lastDate || "N/A"}</p>
    </div>
  )
}
