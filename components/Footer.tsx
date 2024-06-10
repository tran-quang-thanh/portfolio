function HighlightedText({ url, text }: { url: string, text: string }) {
  return (
    <a 
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="text-gray-400 transition-colors hover:text-[#eccff8]"
		>
      &nbsp;{text}&nbsp;
    </a>
  );
}

export default function Footer() {
	let year = new Date().getFullYear()
	
	return (
		<footer className="grid md:grid-cols-2 bg-black text-base text-gray-500 px-12 items-center">
			<p className="py-6">
        Design inspired by
        <HighlightedText url="https://soumyajit.vercel.app/" text="Soumyajit Behera" />
        and built by
        <span className="color-text">&nbsp;Tran Quang Thanh</span>
        <br />
        Developed with
        <HighlightedText url="https://nextjs.org" text="NextJS" />
        and
        <HighlightedText url="https://tailwindcss.com" text="Tailwind CSS" />
      </p>
      <p className="md:justify-self-end py-6">Copyright © {year}</p>
    </footer>
  )
}