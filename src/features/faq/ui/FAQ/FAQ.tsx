import Container from "@mui/material/Container"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

const faqItems = [
  {
    question: "What is this app for?",
    answer: "It helps you organize tasks by creating separate to-do lists and tracking progress.",
  },
  {
    question: "Do I need an account to use the app?",
    answer: "Yes, you need to sign in to access and save your lists.",
  },
  {
    question: "Can I create multiple to-do lists?",
    answer: "Yes, you can create as many lists as you need.",
  },
  {
    question: "How do I add a new task?",
    answer: "Open a list and use the add form to create a new task.",
  },
  {
    question: "How do I mark a task as completed?",
    answer: "Toggle the checkbox next to the task to mark it as done.",
  },
  {
    question: "Can I edit a task title?",
    answer: "Yes, click on the task title to edit it in place.",
  },
  {
    question: "How do I delete a task or a list?",
    answer: "Use the delete action on the task or list to remove it permanently.",
  },
  {
    question: "Why is the app showing a loading bar?",
    answer: "It appears when the app is syncing data with the server.",
  },
  {
    question: "Is there a dark mode?",
    answer: "Yes, you can switch themes using the toggle in the header.",
  },
  {
    question: "Where can I report a bug?",
    answer: "Please contact the team and include steps to reproduce the issue.",
  },
]

export const FAQ = () => {
  return (
    <Container maxWidth="lg">
      <Stack spacing={3}>
        <Typography variant="h4" component="h1">
          FAQ
        </Typography>
        <Paper elevation={2}>
          <List>
            {faqItems.map((item) => (
              <ListItem key={item.question} divider>
                <ListItemText
                  primary={
                    <Typography variant="subtitle1" component="span" fontWeight={700}>
                      {item.question}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" color="text.secondary">
                      {item.answer}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Stack>
    </Container>
  )
}
