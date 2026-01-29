import { useAppDispatch } from "@/common/hooks"
import { containerSx } from "@/common/styles"
import { todolistsApi } from "@/features/todolists/api/todolistsApi"
import type { DomainTodolist, FilterValues } from "@/features/todolists/lib/types"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { useCallback } from "react"

type Props = {
  todolist: DomainTodolist
}

export const FilterButtons = ({ todolist }: Props) => {
  const { id, filter } = todolist

  const dispatch = useAppDispatch()

  const changeFilter = useCallback(
    (filter: FilterValues) => {
      dispatch(
        todolistsApi.util.updateQueryData("getTodolists", undefined, (state) => {
          const todolist = state.find((todolist) => todolist.id === id)
          if (todolist) {
            todolist.filter = filter
          }
        }),
      )
    },
    [dispatch, id],
  )

  const setAll = useCallback(() => changeFilter("all"), [changeFilter])
  const setActive = useCallback(() => changeFilter("active"), [changeFilter])
  const setCompleted = useCallback(() => changeFilter("completed"), [changeFilter])

  return (
    <Box sx={containerSx}>
      <Button variant={filter === "all" ? "outlined" : "text"} color={"inherit"} onClick={setAll}>
        All
      </Button>
      <Button
        variant={filter === "active" ? "outlined" : "text"}
        color={"primary"}
        onClick={setActive}
      >
        Active
      </Button>
      <Button
        variant={filter === "completed" ? "outlined" : "text"}
        color={"secondary"}
        onClick={setCompleted}
      >
        Completed
      </Button>
    </Box>
  )
}
