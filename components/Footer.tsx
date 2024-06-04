function HighlightedText({ url, text }: { url: string, text: string }) {
    return (
        <a 
            href={url}
            className="text-gray-400 transition-colors hover:text-[#eccff8]"
            target="_blank"
            rel="noopener noreferrer"
        >
            &nbsp;{text}&nbsp;
        </a>
    );
}

export default function Footer() {
    let year = new Date().getFullYear()

    return (
        <footer className="flex justify-between bg-black text-base text-gray-500 py-6 px-12 items-center">
            <p>
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
            <p>Copyright © {year}</p>
        </footer>
    )
}