'use client'
import React, { useState } from 'react'

export default function Page() {
  const [topic, setTopic] = useState('')
  const [lesson, setLesson] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const generateLesson = async () => {
    setLoading(true)
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic }),
    })
    const data = await res.json()
    setLesson(data)
    setLoading(false)
  }

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">CourseGPT</h1>
      <input
        type="text"
        className="border rounded p-2 w-full mb-4"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter a topic (e.g., Introduction to AI)"
      />
      <button
        onClick={generateLesson}
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Lesson'}
      </button>

      {lesson && (
        <div className="mt-6 space-y-4">
          <h2 className="text-xl font-semibold">Title: {lesson.title}</h2>
          <p><strong>Description:</strong> {lesson.description}</p>
          <p><strong>Outcomes:</strong></p>
          <ul className="list-disc pl-5">
            {lesson.outcomes.map((o: string, i: number) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  )
}
