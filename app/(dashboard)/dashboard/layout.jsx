import { SessionButton } from "@/components/shower-session/session-button"

function DashboardLayout({ children }) {
  return (
    <>
      {children}
      <SessionButton />
    </>
  )
}

export default DashboardLayout
