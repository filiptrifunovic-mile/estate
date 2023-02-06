import { Box } from "@chakra-ui/react";

const PropertyYouTubeEmbed = ({ coverVideo }) => {
  const ration = (315 / 560) * 100;

  return (
    <Box
      paddingTop={`${ration}%`}
      position="relative"
      height="0"
      overflow="hidden"
      frameBorder="0"
    >
      <iframe
        style={{ position: "absolute", top: 0, bottom: 0 }}
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${coverVideo}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowfullscreen"
        allowfullscreen
      ></iframe>
    </Box>
  );
};

export default PropertyYouTubeEmbed;
