import { client } from "./sanity.client";
import imageUrlBuilder from "@sanity/image-url";

//: Configuring project images
const builder = imageUrlBuilder(client);

//: Adding source of Image
function urlFor(source: any) {
  return builder.image(source);
}

export default urlFor;