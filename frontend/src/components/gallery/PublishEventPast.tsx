import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

import img from "../../assets/undraw_online-meetings_zutp.svg";

export const PublishEventPast = () => {
  return (
    <section className="w-full flex items-center justify-center px-4 py-24">
      <div
        className="
          max-w-7xl w-full
          bg-linear-to-br from-slate-900 via-slate-800 to-slate-900
          border border-white/10
          rounded-3xl
          overflow-hidden
          shadow-2xl
          shadow-purple-500/10
          grid grid-cols-1 lg:grid-cols-2
          items-center
        "
      >
        <div className="flex items-center justify-center p-10 relative">
          <div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />

          <img
            src={img}
            alt="Evento tech"
            className="
              relative z-10
              w-full
              max-w-md
              hover:scale-105
              transition-transform
              duration-500
            "
          />
        </div>

        <div className="p-10 md:p-16">
          <span className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/30">
            Compartilhe um evento passado
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 leading-tight">
            Publique um evento passado
            <span className="text-purple-500"> evento tech</span>
          </h2>
          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            Ajude desenvolvedores a encontrarem meetups, workshops e
            conferências incríveis pelo Brasil.
          </p>

          <div className="mt-8 space-y-4">
            {" "}
            <div className="flex items-center gap-3 text-gray-300">
              {" "}
              <div className="w-2 h-2 bg-purple-500 rounded-full" />{" "}
              <p>Divulgação para toda comunidade</p>{" "}
            </div>{" "}
            <div className="flex items-center gap-3 text-gray-300">
              {" "}
              <div className="w-2 h-2 bg-purple-500 rounded-full" />{" "}
              <p>Eventos presenciais e online</p>{" "}
            </div>{" "}
            <div className="flex items-center gap-3 text-gray-300">
              {" "}
              <div className="w-2 h-2 bg-purple-500 rounded-full" />{" "}
              <p>Mais alcance para seu meetup</p>{" "}
            </div>{" "}
          </div>

          <Link to={"/submit-event"}>
            <Button
              className="
                mt-10
                px-8
                py-4
                rounded-2xl
                bg-purple-600
                hover:bg-purple-500
                text-white
                text-lg
                font-semibold
                shadow-lg
                shadow-purple-500/20
                hover:scale-105
                transition-all
                duration-300
                cursor-pointer
              "
            >
              Publicar Evento
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
