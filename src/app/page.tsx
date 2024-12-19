import { Flex } from "@radix-ui/themes";
import Foother from "./components/containers/foother";
import Header from "./components/containers/header";

export default function Home() {
  return (
    <Flex direction={"column"} className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col flex-1 items-center justify-center pt-20 gap-8">
        <h1>home</h1>
      </main>
      <Foother />
    </Flex>
  );
}
