import { TaskStatus } from "@/common/enums"
import { useGetTasksQuery } from "@/features/todolists/api/tasksApi"
import type { DomainTodolist } from "@/features/todolists/lib/types"
import List from "@mui/material/List"
import { TaskItem } from "./TaskItem/TaskItem"
import { TasksSkeleton } from "./TasksSkeleton/TasksSkeleton"
import { TasksPagination } from "./TasksPagination/TasksPagination"
import { useMemo, useState } from "react"

type Props = {
  todolist: DomainTodolist
}

export const Tasks = ({ todolist }: Props) => {
  const { id, filter } = todolist

  const [page, setPage] = useState(1)

  const { data, isLoading } = useGetTasksQuery({ id, params: { page } })

  const filteredTasks = useMemo(() => {
    const tasks = data?.items ?? []
    switch (filter) {
      case "active":
        return tasks.filter((task) => task.status === TaskStatus.New)
      case "completed":
        return tasks.filter((task) => task.status === TaskStatus.Completed)
      default:
        return tasks
    }
  }, [data?.items, filter])

  if (isLoading) {
    return <TasksSkeleton />
  }

  return (
    <>
      {filteredTasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <>
          <List>
            {filteredTasks.map((task) => (
              <TaskItem key={task.id} task={task} todolist={todolist} />
            ))}
          </List>
          <TasksPagination totalCount={data?.totalCount || 0} page={page} setPage={setPage} />
        </>
      )}
    </>
  )
}

