// let entrada1 = null;
// let entrada2 = null;
// let saida1 = null;
// let saida2 = null;
// let hoje = null;
// let  retornoPrevidto = null;
// let   saidaPrevistaMax = null;
// let   saidaPrevistaMin = null;
// let  tempoAgendaEntrada2 = 0;
// let  tempoAgendaSaida2 = 0;
// let  UltimaConsulta = null;
// let SaldoAtual = null;

function getNumeroPerfil(html: string): string {
  const regexBody = /(?<=UrlProfile = '\/Dimep\/Pessoas\/UserProfilePessoas\/)\d+/g;
  html.match(regexBody);
  return '';
}

export { getNumeroPerfil };
