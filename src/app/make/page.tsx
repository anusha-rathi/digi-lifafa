import type { Metadata } from "next";
import Workbench from "@/components/Workbench";

export const metadata: Metadata = {
  title: "Make a lifafa",
  description:
    "Pick the paper, fill it with notes, tuck in a mithai and the one-rupee coin, and write what you'd say.",
};

export default function Make() {
  // The workbench is its own world — dark, so the paper and foil read the way
  // they do on a real envelope. The rest of the site stays light.
  return (
    <main className="flex-1 bg-[radial-gradient(120%_80%_at_50%_-10%,#3a1a1c_0%,transparent_60%),radial-gradient(90%_60%_at_50%_110%,#2a1112_0%,transparent_55%),#140c0b] pt-6 pb-2 text-[#f2e3d3]">
      <Workbench />
    </main>
  );
}
