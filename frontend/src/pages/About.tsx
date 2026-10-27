import { CardAbout } from "../components/ui/about/CardAbout";
import {
  FaBullseye,
  FaEye,
  FaBook,
  FaLightbulb,
  FaChartLine,
  FaHandshake,
} from "../components/ui/icons";

export const About = () => {
  return (
    <div className="space-y-10 flex flex-col items-center w-full px-4 max-w-6xl mx-auto mt-20">
      <section>
        <h1 className="text-4xl font-bold text-(--text-color) dark:text-(--text-color-dark) text-center max-w-2xl">
          Por dentro de todas as novidades sobre{" "}
          <span className="text-(--primary-color)">tecnologia</span>
        </h1>

        <p className="text-lg text-gray-500 mt-4 rounded-lg p-4 max-w-2xl text-justify whitespace-pre-line">
          Esse é um site para divulgação de{" "}
          <span className="text-(--text-color) dark:text-(--text-color-dark) font-bold">
            eventos de tecnologia
          </span>
          , onde os usuários podem encontrar e se inscrever em eventos.
        </p>
      </section>

      <section className="grid grid-cols-3 justify-items-center gap-8 w-fullp-2">
        <CardAbout icon={<FaBullseye />} title="Nossa" highlight="missão">
          Nossa missão é conectar a comunidade de tecnologia, facilitando o
          acesso a eventos relevantes e promovendo crescimento profissional.
        </CardAbout>
        <CardAbout icon={<FaEye />} title="Nossa" highlight="visão">
          Ser a plataforma líder para divulgação de eventos de tecnologia, onde
          profissionais e entusiastas possam descobrir oportunidades de
          aprendizado e networking.
        </CardAbout>
        <CardAbout icon={<FaLightbulb />} title="Nossos" highlight="valores">
          Compromisso com a comunidade, transparência, inovação e inclusão são
          os pilares que guiam nossas ações e decisões.
        </CardAbout>
        <CardAbout icon={<FaBook />} title="Nossa" highlight="história">
          Fundada em 2024, a DevEvents nasceu da paixão por tecnologia e do
          desejo de criar um espaço onde eventos de tecnologia pudessem ser
          facilmente encontrados e acessados por todos.
        </CardAbout>
        <CardAbout icon={<FaChartLine />} title="Nosso" highlight="futuro">
          Estamos constantemente evoluindo para oferecer a melhor experiência
          possível, com planos de expandir nossos recursos e parcerias para
          atender às necessidades da comunidade de tecnologia.
        </CardAbout>
        <CardAbout icon={<FaHandshake />} title="Nosso" highlight="compromisso">
          Estamos comprometidos em fornecer uma plataforma confiável e fácil de
          usar, onde os usuários possam encontrar eventos de tecnologia
          relevantes e se conectar com outros profissionais da área, promovendo
          o crescimento e desenvolvimento da comunidade de tecnologia.
        </CardAbout>
      </section>
    </div>
  );
};
