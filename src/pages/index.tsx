import MainLayout from "@layouts/MainLayout";
import { Home } from "@subsets/home";
import React from "react";

const Content = () => {
  return (
    <main>
      <Home />
    </main>
  );
};

const Page = () => {
  return <Content />;
};

Page.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

export default Page;
