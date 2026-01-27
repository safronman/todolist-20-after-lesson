import s from "./User.module.css"

type UserItem = {
  id: string
  name: string
  email: string
  role: string
  age: number
}

export const User = () => {
  const users: UserItem[] = [
    { id: "u1", name: "Ada Lovelace", email: "ada@example.com", role: "Mathematician", age: 36 },
    { id: "u2", name: "Grace Hopper", email: "grace@example.com", role: "Rear Admiral", age: 85 },
    { id: "u3", name: "Alan Turing", email: "alan@example.com", role: "Computer Scientist", age: 41 },
    { id: "u4", name: "Katherine Johnson", email: "katherine@example.com", role: "NASA Analyst", age: 101 },
  ]

  return (
    // Todo: переименуй на s и внеси в AGENTS.md
    <div className={s.list}>
      {users.map((user) => (
        <div key={user.id} className={s.card}>
          <div className={s.name}>{user.name}</div>
          <div className={s.meta}>{user.email}</div>
          <div className={s.meta}>
            {user.role} - {user.age}
          </div>
        </div>
      ))}
    </div>
  )
}
