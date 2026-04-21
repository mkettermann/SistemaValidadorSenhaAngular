import { IEnvironment } from "../env.types";

// Ambiente de produção.
export const ENV: IEnvironment = {
	production: true,
	debugLevel: 0,
	urlBase: 'https://mk.app.br/api'
};