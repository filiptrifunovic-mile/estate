import { Image, SimpleGrid } from "@chakra-ui/react";
import { partners } from "./partnersConst";

const Partners = () => {
  return (
    <SimpleGrid columns={partners.length} margin="0 auto" minChildWidth="150px">
      {partners.map((partner) => (
        <Image
          key={partner}
          src={partner}
          alt={partner}
          alignSelf="center"
          padding={{ base: "2rem", sm: "3rem" }}
          filter="grayscale(1)"
          opacity="0.4"
          // width="300px"
          // height="300px"
          // objectFit="contain"
        />
      ))}
    </SimpleGrid>
  );
};

export default Partners;