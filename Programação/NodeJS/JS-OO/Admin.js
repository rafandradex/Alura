import User from "./User.js";

export default class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo = "true") {
    super(nome, email, nascimento, role, ativo);
  }

  // exibirInfos() {
  //   const infos = super.exibirInfos()
  //   return `Admin: ${infos}`;
  // }

  criarCurso(nomeCurso, qtdVagas) {
    return `Você criou o curso de ${nomeCurso} com ${qtdVagas} vagas.`
  }


}