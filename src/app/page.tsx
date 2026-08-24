import Link from "next/link";
import Lifafa from "@/components/Lifafa";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center gap-9 px-5 py-12">
      <header className="text-center">
        <h1 className="font-display text-4xl text-marigold">डिजि लिफ़ाफ़ा</h1>
        <p className="mt-2 text-sm leading-relaxed text-paper/70">
          Make a shagun ka lifafa, pay them directly over UPI, and send the
          envelope as a link.
        </p>
      </header>

      <Lifafa
        data={{
          style: "jaali",
          colour: "maroon",
          mithai: "ladoo",
          coin: "1",
          occasion: "wedding",
          receiverName: "Priya",
          senderName: "Mummy",
          message:
            "बहुत बहुत बधाई! May this new chapter bring you every happiness.\nEat something sweet first.",
          amountPaise: null,
        }}
      />

      <Link
        href="/make"
        className="rounded-full bg-marigold px-8 py-3 font-semibold text-night transition hover:bg-marigold/90"
      >
        Make a lifafa
      </Link>

      <p className="max-w-xs text-center text-[11px] leading-relaxed text-paper/35">
        This site doesn&apos;t process, hold or transfer money. You pay them
        yourself, from your own UPI app.
      </p>
    </main>
  );
}
