import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export function DefButton({ text, className, link, onClickFunc }: any) {
  return (
    <Button
      as={Link}
      href={link || "/"}
      className={cn("text-white font-bold text-md bg-[#1C8594]", className)}
      color="primary"
      onClick={onClickFunc || null}
    >
      <span className="text-white">{text}</span>
    </Button>
  );
}
