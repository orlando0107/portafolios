import { Button, Flex } from "@radix-ui/themes";

export default function Nav() {
  return (
    <>
      <Flex direction={"row"} gap={"2"} p={"2"} top={"0"}>
        <Flex>
          <Button variant="soft" >Login</Button>
        </Flex>
      </Flex>
    </>
  );
}
