import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { topic } = await req.json()

  // Dummy data (replace later with OpenAI)
  return NextResponse.json({
    title: `Lesson: ${topic}`,
    description: `This is a generated lesson about ${topic}.`,
    outcomes: [
      `Understand the basics of ${topic}`,
      `Identify key applications of ${topic}`,
      `Apply ${topic} concepts in real scenarios`
    ]
  })
}
