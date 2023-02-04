import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { HiHomeModern } from "react-icons/hi2";
import { navigationLinks } from "../../navigationConsts";

const NavigationDesktop = () => {
  return (
    <Box
      color="blue.600"
      py="2rem"
      backgroundColor="white"
      display={{ base: "none", md: "block" }}
    >
      <Box maxWidth="1280px" margin="0 auto">
        <Flex alignItems="center" justifyContent="space-between">
          <Link href="/">
            <Box display="flex" alignItems="center" gap="2">
              <HiHomeModern size="30" />
              <Text fontSize="2xl" fontWeight="black">
                ESTATE
              </Text>
            </Box>
          </Link>
          {navigationLinks.map((item, index) => (
            <NavigationLink key={index} {...item} />
          ))}
          <Button
            padding="1.5rem"
            colorScheme="twitter"
            fontSize="0.8rem"
            fontWeight="medium"
          >
            CREATE LISTING
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default NavigationDesktop;

const NavigationLink = ({ title, link, icon }) => {
  return (
    <Link href={link}>
      <Flex alignItems="center" gap="0.5rem">
        {icon}
        {title}
      </Flex>
    </Link>
  );
};
