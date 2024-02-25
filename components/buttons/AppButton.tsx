"use client";
import { Button } from "@nextui-org/button";
import Image from "next/image";

interface AppButtonProps {
  onPress: () => void;
  title?: string;
  icon?: string;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  variant?:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost";
  width?: number;
  height?: number;
  children?: React.ReactNode;
}

export default function AppButton(props: AppButtonProps) {
  const {
    onPress,
    title,
    disabled = false,
    loading = false,
    className,
    children,
    icon,
    variant,
    width,
    height,
  } = props;

  return (
    <Button
      variant={variant || "solid"}
      onClick={onPress}
      isDisabled={disabled}
      isLoading={loading}
      className={className}
    >
      {icon && (
        <Image
          src={icon}
          width={width || 20}
          height={height || 20}
          className="mr-1"
          alt={icon}
        />
      )}
      {title ?? children}
    </Button>
  );
}
