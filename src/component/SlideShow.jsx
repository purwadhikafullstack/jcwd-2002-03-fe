import * as React from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { MdExpandLess } from "react-icons/md"
import Slider from "react-slick";

const SlideShow = () => {
    const [slider, setSlider] = React.useState();
    const top = useBreakpointValue({ base: "50%", md: "50%" });
    const side = useBreakpointValue({ base: "-10px", md: "10px" });

    // These are the images used in the slide
    const cards = [
        "https://img.goapotik.com/banner-image-promo%20mylanta-61.jpeg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-TxFtdCvO1Xnz9LduQaNmQAt4fNXeiDpgTQ&usqp=CAU",
        "https://katalogpromosi.com/wp-content/uploads/2021/08/promo17agustus-banner.jpg"
    ];

    // Settings for the slider
    const settings = {
        dots: true,
        arrows: false,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Box
            position="relative"
            height={["124px", "232px"]}
            width="90%"
            overflow="hidden"
            marginLeft="auto"
            marginRight="auto"
            mb={[5, 10, 10]}
            borderRadius="16px"
        >

            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                colorScheme="messenger"
                borderRadius="full"
                position="absolute"
                left={side}
                top={top}
                bgColor="#FFFFFF"
                color="#213360"
                transform="translate(0%, -50%) rotate(-90deg)"
                zIndex={5}
                onClick={() => slider?.slickPrev()}>
                <MdExpandLess />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                colorScheme="messenger"
                borderRadius="full"
                position="absolute"
                right={side}
                top={top}
                bgColor="#FFFFFF"
                color="#213360"
                transform="translate(0%, -50%) rotate(90deg)"
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <MdExpandLess />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(next) => setSlider(next)}>
                {cards.map((url) => (
                    <Box
                        key={url}
                        height="sm"
                        position="relative"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        backgroundImage={`url(${url})`}
                    />
                ))}
            </Slider>
        </Box>
    );
}

export default SlideShow