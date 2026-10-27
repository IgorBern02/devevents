import type { Request, Response } from "express";

export const getHome = (req: Request, res: Response) => {
  const html = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Devevents API</title>
      <style>
        body { font-family: sans-serif; text-align: center; margin-top: 50px; background: #121212; color: #fff; }
        a { display: inline-block; margin: 10px; padding: 12px 24px; background: #4f46e5; color: white; text-decoration: none; border-radius: 6px; font-weight: bold; }
        a:hover { background: #4338ca; }
      </style>
    </head>
    <body>
      <h1>Bem-vindo ao Devevents</h1>
      <p>Escolha qual tipo de evento você deseja visualizar:</p>
      <div>
        <a href="/events">📅 Eventos Futuros</a>
        <a href="/past-events">📜 Eventos Passados</a>
      </div>
    </body>
    </html>
  `;

  res.send(html);
};
