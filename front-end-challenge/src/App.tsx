import { GoogleOAuthProvider } from "@react-oauth/google";

import { ReactQueryProvider } from "./providers/ReactQueryProvider";
import UseRoutes from "./routes/index.routes";

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <ReactQueryProvider>
        <UseRoutes />
      </ReactQueryProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
