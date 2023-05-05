import { ReactNode } from "react";
import Error401Page from "../error401-page";
import { useUserContext } from "../hooks/useUser";

function ProtectRoute({ children }: { children: ReactNode }) {
  const { user } = useUserContext();

  if (!user) return <Error401Page />;

  return <>{children}</>;
}

export default ProtectRoute;
