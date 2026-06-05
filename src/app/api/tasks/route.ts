import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    const tasks = await prisma.task.findMany();
    if (!tasks || tasks.length === 0) throw new Error('No todos found');
    return NextResponse.json({ success: true, data: tasks }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch todos' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, description } = await request.json();

    if (!title || !description)
      return NextResponse.json(
        { success: false, error: 'Title and description are required' },
        { status: 400 }
      );
    const task = await prisma.task.create({
      data: {
        title,
        description,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: task,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: 'Failed to create task' },
      { status: 500 }
    );
  }
}
