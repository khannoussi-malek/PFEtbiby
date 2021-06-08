import React from "react";
import { ReactQueryDevtools as ApiDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import TheContext from "./router/context";
import MainRouter from "./router";

function App() {
  // const { isAuthenticated } = useContext(TbibyContext);
  // console.log(isAuthenticated);
  // const auth = new Auth();

  const queryClient = new QueryClient();

  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <TheContext>
          <MainRouter />
          <ApiDevtools initialIsOpen={false} />
        </TheContext>
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
