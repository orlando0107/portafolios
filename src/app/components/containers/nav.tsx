import { Button, Flex } from "@radix-ui/themes";
import SignIn from "../buttons/sign-in";

export default function Nav() {
  return (
    <>
      <Flex direction={"row"} gap={"2"} p={"2"} top={"0"}>
        <Flex>
          <Button variant="soft" >
          <SignIn/>
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
