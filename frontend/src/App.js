import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppRoutes from "./routes/app-routes";
import { UserProvider } from './context/UserContext';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <AppRoutes />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </UserProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
