import MainLayout from "@layouts/MainLayout";
import React from "react";

const Content = () => {
  return <main>hello</main>;
};

const Page = () => {
  return <Content />;
};

Page.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

export default Page;
