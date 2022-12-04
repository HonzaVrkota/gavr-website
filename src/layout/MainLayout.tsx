import { FC, PropsWithChildren } from "react";
import Header from "./header/Header";

const MainLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="min-h-screen bg-bgDark">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
