import { addFurnitureType } from "./actions";

export default dispatch => {
  // addFurnitureType = (type, name, price, images, description)
  dispatch(
    addFurnitureType(
      "Lamps",
      "Amias",
      54.95,
      ["/img/amias1.jpg", "/img/amias2.jpg", "/img/amias3.jpg"],
      "Lightweight, portable, and mindful of space, table lamps keep your home looking on the bright side with just-right task and accent lighting. This one, for example, is founded atop a circular base made from champagne finished glass – making it ideal for a variety of design aesthetics from country cottage to modern farmhouse and more."
    )
  );
  dispatch(
    addFurnitureType(
      "Lamps",
      "Eric",
      59.95,
      ["/img/eric1.jpg", "/img/eric2.jpg"],
      "Bring both function and fashion to any tabletop in your home with this modern table lamp. Crafted from metal, this piece’s streamlined base showcases an openwork silhouette with three side supports in a solid finish that’s understated enough to complement most color palettes."
    )
  );
  dispatch(
    addFurnitureType(
      "Lamps",
      "Arendtsville",
      63.95,
      ["/img/arendtsville1.jpg", "/img/arendtsville2.jpg"],
      "Pristine glass with ultra-refined clarity, a crisp white textured paper drum shade, and a uniquely contemporary tapered profile elevates your home with modern style. This contemporary table lamp is perfect for the adventurous designer, effortlessly brightening a room with versatile style while seamlessly blending into your home décor."
    )
  );
  dispatch(
    addFurnitureType(
      "Lamps",
      "Tally Ho",
      49.95,
      ["/img/tallyho1.jpg", "/img/tallyho2.jpg"],
      "Inspired by the art and animation style of Tim Burton, this whimsical and scrolling lamp collection has a refined gothic vibe. Angular points extend and spiral from the wavy body of this atmospheric lighting family with the fantastical design extending all the way to the finial."
    )
  );
  dispatch(
    addFurnitureType(
      "Lamps",
      "Melmore",
      59.95,
      ["/img/melmore1.jpg", "/img/melmore2.jpg"],
      "Showcasing traditional styles through a contemporary lens, this 25.75” lamp lends a touch of curated whimsy to your aesthetic. This charming design showcases a scrollwork vine-shaped body on a raised round pedestal base and sports an off-white tapered drum shade for an elegant contrast."
    )
  );
  dispatch(
    addFurnitureType(
      "Coffe Tables",
      "Ahart",
      99.95,
      ["/img/ahart1.jpg", "/img/ahart2.jpg"],
      "Your coffee table is a style centerpiece for your living ensemble, and whether you're gathering a room's style or gathering all of your friends, a piece like this is perfect for lending your ensemble a modern accent. Crafted from a black-finished iron-based with a diamond-patterned base and capped with a mango wood surface, this table is brimming with on-trend mixed-material appeal."
    )
  );
  dispatch(
    addFurnitureType(
      "Coffe Tables",
      "Cainsville",
      87.95,
      ["/img/cainsville1.jpg", "/img/cainsville2.jpg"],
      "Clean, contemporary design meets rustic industrial style in this charismatic coffee table. Tastefully designed for a reclaimed aesthetic, this table is crafted of high-grade manufactured wood with long-lasting laminate veneers, while a clean-lined steel frame in a powder-coated matte black finish offers a sophisticated contrast."
    )
  );
  dispatch(
    addFurnitureType(
      "Coffe Tables",
      "Akbar",
      76.95,
      ["/img/akbar1.jpg", "/img/akbar2.jpg"],
      "Substantial in size yet delicate in appearance, Akbar Coffee Table features a beige top with a bronze hourglass metal fretwork base that is a beautiful combination of size and grace."
    )
  );
  dispatch(
    addFurnitureType(
      "Coffe Tables",
      "Kenton",
      79.95,
      ["/img/kenton1.jpg", "/img/kenton2.jpg"],
      "Whether you love curling up on the couch with a glass of wine to unwind from a long day or you were born to host casual cocktail nights, this charming coffee table is a timeless addition to any abode. Its distressed acacia top features a handsome herringbone pattern that adds classic appeal to your space, a stylish stage for a bouquet of flowers from your garden, and a stack of your favorite magazines."
    )
  );
  dispatch(
    addFurnitureType(
      "Coffe Tables",
      "Labarge",
      94.95,
      ["/img/labarge1.jpg", "/img/labarge2.jpg"],
      "What could be better than one coffee table? Two! Perfect for rounding out your home with a mid-century look, this set features two triangular tables that work together to create the standard coffee table size with a breezy style. Crafted from manufactured wood surfaces, each table is founded on slim, black-finished metal legs for a striking look wherever they're placed. "
    )
  );
  dispatch(
    addFurnitureType(
      "Bookcase",
      "Lamantica",
      129.95,
      ["/img/lamantica1.jpg", "/img/lamantica2.jpg"],
      "Not just for organizing your titles, bookshelves are a great way to add a touch of handy storage to any room! Whether you're looking to clear away piles of paperbacks, or show off a few attention-grabbing decorative items, a piece like this is a great option for a touch of traditional style."
    )
  );
  dispatch(
    addFurnitureType(
      "Bookcase",
      "Walworth",
      139.95,
      ["/img/walworth1.jpg", "/img/walworth2.jpg"],
      "Put a pop of personality into any arrangement with this versatile bookcase, featuring three open shelves that let you show off framed photos, artful accents, your favorite novels, and any other items that make you smile. Two cabinet doors below open to reveal concealed storage space, so you can tuck odds and ends out of sight."
    )
  );
  dispatch(
    addFurnitureType(
      "Bookcase",
      "Crenshaw",
      144.95,
      ["/img/crenshaw1.jpg", "/img/crenshaw2.jpg"],
      "Bring order and a pop of personality to any space in your home with this clean-lined bookcase. Crafted from wood, this design features a neutral finish and louvered accents for a classic and approachable look. "
    )
  );
  dispatch(
    addFurnitureType(
      "Bookcase",
      "Borchert",
      109.95,
      ["/img/borchert1.jpg", "/img/borchert2.jpg"],
      "Storage and display meet in the bookcase, a must-have for any stately study or modern farmhouse-inspired den. Made in the USA, it is crafted from manufactured wood and features subtle molded trim and a salt oak finish for a traditionally rustic look."
    )
  );
  dispatch(
    addFurnitureType(
      "Bookcase",
      "Jo Etagere",
      124.95,
      ["/img/joEtagere1.jpg", "/img/joEtagere2.jpg"],
      "Perch your favorite books, plants, photos and more while offering a touch of industrial design to your abode with this understated bookcase. Crafted from iron, the frame boasts a black finish while the oak shelves showcase a light brown coloring."
    )
  );
};
