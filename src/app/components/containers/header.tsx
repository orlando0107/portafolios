import {Flex} from "@radix-ui/themes"
import Nav from "./nav"

export default function Header() {
  return (
    <>
      <Flex direction={"row"}>
        <Nav/>
      </Flex>
      </>
  )
}
