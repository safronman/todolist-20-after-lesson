import TextField from "@mui/material/TextField"
import { type ChangeEvent, useCallback, useEffect, useState } from "react"

type Props = {
  value: string
  onChange: (title: string) => void
  disabled?: boolean
}

export const EditableSpan = ({ value, onChange, disabled }: Props) => {
  const [title, setTitle] = useState(value)
  const [isEditMode, setIsEditMode] = useState(false)

  useEffect(() => {
    if (!isEditMode) {
      setTitle(value)
    }
  }, [isEditMode, value])

  const turnOnEditMode = useCallback(() => {
    if (disabled) return
    setIsEditMode(true)
  }, [disabled])

  const turnOffEditMode = useCallback(() => {
    setIsEditMode(false)
    if (title !== value) {
      onChange(title)
    }
  }, [onChange, title, value])

  const changeTitle = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
  }, [])

  return (
    <>
      {isEditMode ? (
        <TextField
          variant={"outlined"}
          value={title}
          size={"small"}
          onChange={changeTitle}
          onBlur={turnOffEditMode}
          autoFocus
          disabled={disabled}
        />
      ) : (
        <span onDoubleClick={turnOnEditMode}>{value}</span>
      )}
    </>
  )
}
