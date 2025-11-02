import {
  Stack,
  VStack,
  Heading,
  Image,
  Flex,
  Text,
  Link,
  // IconButton,
  Icon,
} from "@chakra-ui/react";

import profilePic from "../../../assets/images/Photograph.JPG";
import ICONS from "../../../constants/icons";
import { tcsLink, accentureLink } from "../../../constants/links";

export default function Introduction() {
  return (
    <Stack
      direction={["column-reverse", "row"]}
      spacing="24px"
      style={{ alignItems: "center" }}
    >
      <VStack align="stretch">
        <Heading
          as="h1"
          size="xl"
          noOfLines={3}
          style={{ alignItems: "center" }}
        >
          Hi, I&apos;m Navdeep Singh.{" "}
          {/* <IconButton
            aria-label="Play pronunciation track"
            variant="link"
            isRound
            icon={<Icon as={FaPlayCircle} boxSize="2rem" color="purple.500" />}
          /> */}
        </Heading>
        <Text fontSize="md">
          I&apos;m a full-stack developer (proficient in Frontend). I currently
          work at {" "}
          <Link href={accentureLink} isExternal>
            Accenture Solutions Private Ltd<Icon as={ICONS.EXTERNAL_LINK} mx="2px" />
          </Link>{" "}
          as a Senior Analyst — Packaged Application Development. Previously, I
          worked at {" "}
          <Link href={tcsLink} isExternal>
            TCS<Icon as={ICONS.EXTERNAL_LINK} mx="2px" />
          </Link>{" "}
          as a System Engineer (TCS Digital) until November 2024.
          <br />
          I am passionate about creating things. I love building software that
          helps society.
          <br />
          In my pastime, I socialize with friends, go for long walks, meditate,
          and do public speaking at Toastmasters clubs.
        </Text>
      </VStack>
      <Flex>
        <Image
          borderRadius="full"
          src={profilePic}
          w="330px"
          h="auto"
          objectFit={"cover"}
          loading="lazy"
          alt="Navdeep Singh"
        />
      </Flex>
    </Stack>
  );
}
