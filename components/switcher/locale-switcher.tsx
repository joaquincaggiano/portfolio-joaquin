"use client";

import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import { useParams} from "next/navigation";
import { ChangeEvent, useTransition } from "react";

const LocaleSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    console.log("nextLocale: ", nextLocale)
    startTransition(() => {
      router.replace(`/${pathname}`, {locale: nextLocale});
    });
  };
  return (
    <label className='border-2 rounded'>
    <p className='sr-only'>change language</p>
    <select
      defaultValue={localActive}
      className='bg-transparent py-2'
      onChange={onSelectChange}
      disabled={isPending}
    >
      <option value='en'>English</option>
      <option value='es'>Spanish</option>
    </select>
  </label>
  );
};

export default LocaleSwitcher;
