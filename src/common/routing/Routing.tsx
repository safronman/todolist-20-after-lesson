import { selectIsLoggedIn } from "@/app/app-slice"
import { Main } from "@/app/Main"
import { PageNotFound } from "@/common/components/PageNotFound/PageNotFound"
import { ProtectedRoute } from "@/common/components/ProtectedRoute/ProtectedRoute"
import { User } from "@/common/components/User/User"
import { useAppSelector } from "@/common/hooks"
import { Login } from "@/features/auth/ui/Login/Login"
import { FAQ } from "@/features/faq/ui/FAQ/FAQ"
import { Route, Routes } from "react-router"

export const Path = {
  Main: "/",
  Login: "login",
  Faq: "faq",
  User: "user",
  NotFound: "*",
} as const

export const Routing = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn)

  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={isLoggedIn} redirectPath={Path.Login} />}>
        <Route path={Path.Main} element={<Main />} />
      </Route>
      <Route element={<ProtectedRoute isAllowed={!isLoggedIn} />}>
        <Route path={Path.Login} element={<Login />} />
      </Route>
      <Route path={Path.User} element={<User />} />
      <Route path={Path.Faq} element={<FAQ />} />
      <Route path={Path.NotFound} element={<PageNotFound />} />
    </Routes>
  )
}
