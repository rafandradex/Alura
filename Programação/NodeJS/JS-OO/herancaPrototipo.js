const user = {
  nome: "Juliana",
  email: "juliana@gmail.com",
  nascimento: "2024-01-01",
  role: "estudante",
  ativo: true, //por padrão
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};

const admin = {
  nome: "Rafael",
  email: "rafael@gmail.com",
  nascimento: "2024-01-01",
  role: "admin",
  ativo: true, //por padrão
  criarCurso: function () {
    console.log("Curso criado");
  },
};

Object.setPrototypeOf(admin, user);
admin.criarCurso()
admin.exibirInfos()
