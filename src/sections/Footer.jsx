import { mySocials } from "../constants/index";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p></p>
        <p>|</p>
        <p>MySocials</p>
      </div>
      
      <div className="flex gap-3">
        {mySocials.map((social,) => (
          <a href={social.href}>
            {social.name}
          </a>
        ))}
      </div>
      <p>©</p>
    </section>
  );
};

export default Footer;