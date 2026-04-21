import { IEnvironment } from "./env.types";

// Este arquivo é apenas o localhost:4200 do angular. E este ambiente local está direcionando para a urlbase online. 
// LOCAL e EXEMPLAR. O Build pra deploy pode alterar este arquivo pelo da pasta Production ou Development, dependendo do ambiente de destino. (Isso é configurado no angular.json, na seção de fileReplacements)
export const ENV: IEnvironment = {
	production: false,
	debugLevel: 2,
	urlBase: 'https://mk.app.br/api'
};