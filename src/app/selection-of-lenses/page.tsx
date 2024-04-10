import { Header } from "@/components/header/header";
import { SelectionOfFrames } from "@/components/pages/selection-of-frames";

const activeLink: string = "lenses";

export default function PageSelectionOfFrames() {
  return (
    <>
      <Header activeLink={activeLink} />
      <SelectionOfFrames />
      {/* <Choose /> */}
      {/* <InfoSection />
    <SelectionList /> */}
      {/* <SomeText />
    <Consultation />*/}{" "}
    </>
  );
}
