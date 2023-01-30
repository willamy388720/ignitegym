import { Image, IImageProps } from "native-base";

type Props = IImageProps & {
  size: number;
};

export function UserPhoto({ size, ...rest }: Props) {
  return (
    <Image
      height={size}
      width={size}
      rounded={"full"}
      borderWidth={2}
      borderColor={"gray.400"}
      {...rest}
    />
  );
}
