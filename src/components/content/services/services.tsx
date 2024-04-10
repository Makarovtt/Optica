"use client";

import { List } from "./list";
import { ServiceInfo } from "./serviceinfo";
import { NextUIProvider } from "@nextui-org/system";

export function Services() {
  return (
    <section className="max-w-maxw3big mx-auto bg-center bg-cover">
      <div className="max-w-maxw2big pt-0 mx-auto flex 2xl-max:flex-col 2xl-max:gap-10">
        <ServiceInfo />
        <NextUIProvider>
          <List />
        </NextUIProvider>
      </div>
    </section>
  );
}
