import type { Metadata } from "next";
import Workbench from "@/components/Workbench";

export const metadata: Metadata = {
  title: "Make a lifafa",
  description:
    "Pick the paper, fill it with notes, tuck in a mithai and the one-rupee coin, and write what you'd say.",
};

export default function Make() {
  return (
    <main className="flex-1 pt-6 pb-2">
      <Workbench />
    </main>
  );
}
