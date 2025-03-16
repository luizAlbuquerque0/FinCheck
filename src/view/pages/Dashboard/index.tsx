import { useAuth } from "../../../app/hooks/useAuth";
import { Logo } from "../../components/Logo";
import { Usermenu } from "../../components/UserMenu";
import { Accounts } from "./components/Accounts";
import { Fab } from "./components/Fab";
import { Transactions } from "./components/Transactions";
import { DashboardProvider } from "./DashboardContext";

export function Dashboard() {
  const { signOut } = useAuth();
  return (
    <DashboardProvider>
      <div className="w-full h-full p-4 md:px-8 md:pb-8 md:pt-6 flex flex-col gap-4">
        <header className="h-12 flex items-center justify-between">
          <Logo classname="h-6 text-teal-900" />
          <Usermenu />
        </header>

        <main className="flex-1 flex flex-col md:flex-row gap-4 max-h-full">
          <div className="w-full md:w-1/2">
            <Accounts />
          </div>
          <div className="w-full md:w-1/2">
            <Transactions />
          </div>
        </main>

        <Fab />
      </div>
    </DashboardProvider>
  );
}
