import MainLayout from "@layouts/MainLayout";
import { Gallery } from "@subsets/gallery";
import React from "react";

const Content = () => {
  return (
    <main>
      <Gallery />
    </main>
  );
};

const Page = () => {
  return <Content />;
};

Page.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

export default Page;
