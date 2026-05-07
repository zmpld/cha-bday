import { ButtonPrimary } from "./Button";
import { BackgroundLines } from "./ui/background-lines";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Stories",
    href: "#projects",
  },
  {
    label: "Birthday note",
    href: "#about",
  },
];

const Footer = () => {
  return (
    <footer className="section pb-0">
      <BackgroundLines className="h-auto min-h-[24rem] rounded-t-3xl border-t border-zinc-800/60">
        <div className="container py-14">
          <div className="lg:grid lg:grid-cols-2">
            <div className="mb-10">
              <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                Wishing you a Happy Happy Birthday Cha!
              </h2>
              <ButtonPrimary
                href="mailto:alezandromapalad@gmail.com"
                label="Reach out"
                icon="chevron_right"
                classes="reveal-up"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 lg:pl-20">
              <div>
                <p className="mb-2 reveal-up">Sitemap</p>
                <ul>
                  {sitemap.map(({ label, href }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        className="block text-sm text-zinc-400 py-1 
                    transition-colors hover:text-zinc-200 reveal-up"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-10">
            <a href="/" className="logo reveal-up">
              <img
                src="/assets/letter-z.png"
                width={40}
                height={40}
                alt="Logo"
                className="rounded-lg"
              />
            </a>

            <p className="text-zinc-500 text-sm reveal-up">
              &copy; 2026{" "}
              <span className="text-zinc-200">zmpld_ All rights reserved.</span>
            </p>
          </div>
        </div>
      </BackgroundLines>
    </footer>
  );
};

export default Footer;
