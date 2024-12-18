import { Flex } from "@radix-ui/themes";
import Foother from "./components/containers/foother";
import Header from "./components/containers/header";

export default function Home() {
  return (
    <Flex direction={"column"}>
      <Header/>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>home</h1>
      </main>
      <Foother/>
    </Flex>
  );
}
