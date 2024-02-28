export function showImage(item: any, loop?: any) {
  // console.log(item, "Image show");
  {
    if (item) {
      if (loop) {
        return `${process.env.NEXT_PUBLIC_API_BASE_URL}${item?.attributes?.url}`;
      } else {
        return `${process.env.NEXT_PUBLIC_API_BASE_URL}${item?.data?.attributes?.url}`;
      }
    } else {
      ("");
    }
  }
}
