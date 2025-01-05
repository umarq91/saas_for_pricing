import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { ReactNode } from "react";
import { RxCaretLeft } from "react-icons/rx";

type Props = {
  backButtonHref: string;
  pageTitle: string;
  children: ReactNode;
};

function PageWithBackButton({ backButtonHref, pageTitle, children }: Props) {
  return (
    <div className="grid  grid-cols-[auto,1fr] gap-x-4 gap-y-10">
      <Button size="icon" className="rounded-full" asChild variant={"outline"}>
        <Link href={backButtonHref}>
          <div className="sr-only">Back</div>
          <RxCaretLeft className="size-8" />
        </Link>
      </Button>
      <h1 className="text-2xl font-semibold self-center ">{pageTitle}</h1>
      <div className="col-start-2">{children}</div>
    </div>
  );
}

export default PageWithBackButton;
