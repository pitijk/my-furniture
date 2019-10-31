import { addFurnitureType } from "./actions";

export default dispatch => {
  // addFurnitureType = (type, name, images, description)
  dispatch(
    addFurnitureType(
      "Lamps",
      "Amias",
      ["/img/amias1.jpg", "/img/amias2.jpg", "/img/amias1.jpg3"],
      "Lightweight, portable, and mindful of space, table lamps keep your home looking on the bright side with just-right task and accent lighting. This one, for example, is founded atop a circular base made from champagne finished glass – making it ideal for a variety of design aesthetics from country cottage to modern farmhouse and more."
    )
  );
  dispatch(
    addFurnitureType(
      "Lamps",
      "Eric",
      ["/img/eric1.jpg", "/img/eric1.jpg"],
      "Bring both function and fashion to any tabletop in your home with this modern table lamp. Crafted from metal, this piece’s streamlined base showcases an openwork silhouette with three side supports in a solid finish that’s understated enough to complement most color palettes."
    )
  );
  dispatch(
    addFurnitureType(
      "Lamps",
      "Arendtsville",
      ["/img/arendtsville1.jpg", "/img/arendtsville2.jpg"],
      "Pristine glass with ultra-refined clarity, a crisp white textured paper drum shade, and a uniquely contemporary tapered profile elevates your home with modern style. This contemporary table lamp is perfect for the adventurous designer, effortlessly brightening a room with versatile style while seamlessly blending into your home décor."
    )
  );
  dispatch(
    addFurnitureType(
      "Lamps",
      "Tally Ho",
      ["/img/tallyho1.jpg", "/img/tallyho2.jpg"],
      "Inspired by the art and animation style of Tim Burton, this whimsical and scrolling lamp collection has a refined gothic vibe. Angular points extend and spiral from the wavy body of this atmospheric lighting family with the fantastical design extending all the way to the finial."
    )
  );
  dispatch(
    addFurnitureType(
      "Lamps",
      "Melmore",
      ["/img/melmore1.jpg", "/img/melmore1.jpg"],
      "Showcasing traditional styles through a contemporary lens, this 25.75” lamp lends a touch of curated whimsy to your aesthetic. This charming design showcases a scrollwork vine-shaped body on a raised round pedestal base and sports an off-white tapered drum shade for an elegant contrast."
    )
  );
};
