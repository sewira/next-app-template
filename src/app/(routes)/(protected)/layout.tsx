import MainHeader from "@/components/MainHeader";
import MainLayout from "@/components/MainLayout";
import React from "react";

type Props = {};

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default ProtectedLayout;
