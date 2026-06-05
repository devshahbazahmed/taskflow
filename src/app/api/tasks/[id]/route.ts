import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(
  request: NextRequest,
  ctx: RouteContext<'/api/tasks/[id]'>
) {
  try {
    const { id } = await ctx.params;
    const task = await prisma.task.findUnique({
      where: {
        id,
      },
    });

    if (!task) {
      return NextResponse.json(
        {
          success: false,
          error: 'Task not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: task,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch todo',
      },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  ctx: RouteContext<'/api/tasks/[id]'>
) {
  try {
    const { id } = await ctx.params;
    const { title, description, completed } = await request.json();
    const task = await prisma.task.findUnique({
      where: {
        id,
      },
    });

    if (!task) {
      return NextResponse.json(
        {
          success: false,
          error: 'Task not found',
        },
        { status: 404 }
      );
    }

    const updatedTask = await prisma.task.update({
      where: {
        id,
      },
      data: {
        title,
        description,
        completed,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: updatedTask,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch todo',
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  ctx: RouteContext<'/api/tasks/[id]'>
) {
  try {
    const { id } = await ctx.params;
    const task = await prisma.task.findUnique({
      where: {
        id,
      },
    });

    if (!task) {
      return NextResponse.json(
        {
          success: false,
          error: 'Task not found',
        },
        { status: 404 }
      );
    }

    await prisma.task.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: 'Task deleted successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch todo',
      },
      { status: 500 }
    );
  }
}
