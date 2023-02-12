import React from "react"
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit"
import "@styles/Banner.css"
import bann1 from "@assets/b2.png"
import bann2 from "@assets/b1.png"
import bann3 from "@assets/bann3.png"

const Banner = () => {
  return (
    <div className="banner align-items-center d-flex">
      <MDBCarousel showControls>
        <MDBCarouselItem
          className="bannerItem  m-auto"
          itemId={1}
          src={bann1}
          alt="..."
        />
        <MDBCarouselItem
          className="m-auto bannerItem "
          itemId={2}
          src={bann2}
          alt="..."
        />
        <MDBCarouselItem
          className=" m-auto bannerItem "
          itemId={3}
          src={bann3}
          alt="..."
        />
      </MDBCarousel>
    </div>
  )
}

export default Banner
