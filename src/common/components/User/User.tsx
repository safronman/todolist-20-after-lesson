import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

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
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
        gap: 2,
        px: { xs: 2, md: 4 },
        pb: 4,
      }}
    >
      {users.map((user) => (
        <Card key={user.id} variant="outlined" sx={{ borderRadius: 2, height: "100%" }}>
          <CardContent>
            <Stack spacing={1}>
              <Typography variant="h6" fontWeight={700}>
                {user.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {user.email}
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
                <Chip label={user.role} size="small" color="primary" variant="outlined" />
                <Typography variant="caption" color="text.secondary">
                  Age: {user.age}
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}
