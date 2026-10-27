import { FaGithub, FaInstagram, FaLinkedin } from "../ui/icons";

export const ShareFooter = () => {
  const arrayShare = [
    {
      name: "GitHub",
      url: "https://github.com/devevents",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/devevents",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/devevents/",
    },
  ];

  return (
    <section className="space-y-4">
      <h3
        className="
                  text-lg
                  font-semibold
                  text-(--text-color)
                  dark:text-(--text-color-dark)
                "
      >
        Comunidade
      </h3>

      <p className="text-gray-500">
        Acompanhe novidades e eventos nas redes sociais.
      </p>

      <div className="flex items-center gap-4">
        {arrayShare.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
                    w-11
                    h-11
                    rounded-full
                    bg-white/10
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-xl
                    text-gray-400
                    hover:text-white
                    hover:bg-(--primary-color)
                    transition-all
                    duration-300
                  "
          >
            {item.name === "GitHub" && <FaGithub size={24} />}
            {item.name === "LinkedIn" && <FaLinkedin size={24} />}
            {item.name === "Instagram" && <FaInstagram size={24} />}
          </a>
        ))}
      </div>
    </section>
  );
};
