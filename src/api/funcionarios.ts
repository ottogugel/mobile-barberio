export type Funcionario = {
    id: number;
    nome: string;
    email: string;
    senha: string;
    data_nascimento?: Date;
    avaliacao?: number;
    experiencia?: number;
    atendimentos?: number;
}