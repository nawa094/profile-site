import { Box, Container } from "@mui/material";
import { StyledTypography } from "../components/StyledTypography";
import { motion, useAnimation } from "framer-motion";

export const Home = () => {
  const controls = useAnimation();

  return (
    <Box>
      {/* Section 1 */}
      <Box
        sx={{
          height: "100vh", // Full viewport height
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url(/path/to/image1.jpg)", // Background image for topic 1
          backgroundAttachment: "fixed", // Parallax effect
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white", // Text color
        }}
      >
        <Container>
          <StyledTypography
            variant="h2"
            align="center"
            sx={{ fontWeight: "bold" }}
          >
            / me
          </StyledTypography>
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
            viewport={{ once: false }} // Only animate once
            transition={{ duration: 0.8 }} // Animation duration
            onViewportLeave={() => controls.start({ opacity: 0, y: 50 })}
          >
            <StyledTypography variant="h5" align="center">
              Landing
            </StyledTypography>
          </motion.div>
        </Container>
      </Box>

      {/* Section 2 */}
      <Box
        sx={{
          height: "100vh", // Full viewport height
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url(/path/to/image2.jpg)", // Background image for topic 2
          backgroundAttachment: "fixed", // Parallax effect
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white", // Text color
        }}
      >
        <Container>
          <StyledTypography
            variant="h2"
            align="center"
            sx={{ fontWeight: "bold" }}
          >
            / work
          </StyledTypography>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            onViewportLeave={() => controls.start({ opacity: 0, y: 50 })}
          >
            <StyledTypography variant="h5" align="center">
              It was a dog. It was a big dog. Swear to me! Well, you see... I'm
              buying this hotel and setting some new rules about the pool area.
              The first time I stole so that I wouldn't starve, yes. I lost many
              assumptions about the simple nature of right and wrong. And when I
              traveled I learned the fear before a crime and the thrill of
              success. But I never became one of them. Well, you see... I'm
              buying this hotel and setting some new rules about the pool area.
              I'll be standing where l belong. Between you and the peopIe of
              Gotham. It's ends here. No guns, no killing. I will go back to
              Gotham and I will fight men Iike this but I will not become an
              executioner. I'm Batman Bruce Wayne, eccentric billionaire. Hero
              can be anyone. Even a man knowing something as simple and
              reassuring as putting a coat around a young boy shoulders to let
              him know the world hadn't ended.
            </StyledTypography>
          </motion.div>
        </Container>
      </Box>

      {/* Section 3 */}
      <Box
        sx={{
          height: "100vh", // Full viewport height
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url(/path/to/image3.jpg)", // Background image for topic 3
          backgroundAttachment: "fixed", // Parallax effect
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white", // Text color
        }}
      >
        <Container>
          <StyledTypography
            variant="h2"
            align="center"
            sx={{ fontWeight: "bold" }}
          >
            / projects
          </StyledTypography>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            onViewportLeave={() => controls.start({ opacity: 0, y: 50 })}
          >
            <StyledTypography variant="h5" align="center">
              Description for Topic 3
            </StyledTypography>
          </motion.div>
        </Container>
      </Box>

      {/* Section 4 (Optional) */}
      <Box
        sx={{
          height: "100vh", // Full viewport height
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url(/path/to/image4.jpg)", // Background image for topic 4
          backgroundAttachment: "fixed", // Parallax effect
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white", // Text color
        }}
      >
        <Container>
          <StyledTypography
            variant="h2"
            align="center"
            sx={{ fontWeight: "bold" }}
          >
            / contact
          </StyledTypography>
          <StyledTypography variant="h5" align="center">
            Description for Topic 4
          </StyledTypography>
        </Container>
      </Box>
    </Box>
  );
};
