import { EditableSpan } from "@/common/components/EditableSpan/EditableSpan"
import { useRemoveTodolistMutation, useUpdateTodolistTitleMutation } from "@/features/todolists/api/todolistsApi"
import type { DomainTodolist } from "@/features/todolists/lib/types"
import DeleteIcon from "@mui/icons-material/Delete"
import IconButton from "@mui/material/IconButton"
import { useCallback } from "react"
import styles from "./TodolistTitle.module.css"

type Props = {
  todolist: DomainTodolist
}

export const TodolistTitle = ({ todolist }: Props) => {
  const { id, title, entityStatus } = todolist

  const [removeTodolist] = useRemoveTodolistMutation()
  const [updateTodolistTitle] = useUpdateTodolistTitleMutation()

  const deleteTodolist = useCallback(() => removeTodolist(id), [id, removeTodolist])

  const changeTodolistTitle = useCallback(
    (title: string) => {
      updateTodolistTitle({ id, title })
    },
    [id, updateTodolistTitle],
  )

  const isDisabled = entityStatus === "loading"

  return (
    <div className={styles.container}>
      <h3>
        <EditableSpan value={title} onChange={changeTodolistTitle} disabled={isDisabled} />
      </h3>
      <IconButton onClick={deleteTodolist} disabled={isDisabled}>
        <DeleteIcon />
      </IconButton>
    </div>
  )
}
