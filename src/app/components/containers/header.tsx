import {Flex} from "@radix-ui/themes"
import Nav from "./nav"

export default function Header() {
  return (
    <>
      <Flex
        direction={"row"}
        className="fixed top-0 left-0 w-full bg-white shadow-md z-10 transition-colors duration-300"
      >
        <Nav />
      </Flex>
    </>
  );
}
