"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Ensure this is the correct import path

export default function LocaleSwitcher({styles}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();
  const pathname = usePathname();
  const actualPath = `/${pathname.split("/").filter(Boolean).slice(1).join("/")}`;

  const handleLocaleChange = (nextLocale) => {
    startTransition(() => {
      router.replace(`/${nextLocale}${actualPath}`);
    });
  };

  return (
    <Select
      value={localeActive}
      onValueChange={handleLocaleChange}
      disabled={isPending}
    >
      <SelectTrigger className={`${styles} w-[65px]`}>
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">EN</SelectItem>
        <SelectItem value="ro">RO</SelectItem>
      </SelectContent>
    </Select>
  );
}
