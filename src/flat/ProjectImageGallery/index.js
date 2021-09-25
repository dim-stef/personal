import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { Box } from "@chakra-ui/layout";

function ProjectImageGallery({ images }) {
  return (
    <Carousel
    renderIndicator={()=>null}
    showStatus={false}
    showThumbs={false}>
      {images.map((image) => {
        const { title, description, file } = image.fields;

        return (
          <Box key={title}>
            <img src={`https:${file.url}`} style={{maxHeight: 500, objectFit: 'contain'}} alt={title} />
          </Box>
        );
      })}
    </Carousel>
  );
}

export default ProjectImageGallery;
