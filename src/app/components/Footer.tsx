export default function Footer() {
  return (
    <footer className="section-dark section">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-500 text-sm">
          Made by{" "}
          <a
            href="https://headleyweb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] hover:underline"
          >
            Headley Web
          </a>
          {" "}· headleyweb.com
        </div>
      </div>
    </footer>
  );
}
