const { Command } = require('commander');
const program = new Command();
import { createCommit } from "./commands/createCommit";

program
    .name('gitcc')
    .description('CLI para criação de commits seguindo o padrão Convencional Commits')
    .version('1.0.0');

program
    .command('create')
    .option("--emoji", "Utiliza de emojis para melhor visualização dos commits")
    .description('Criar commit. Passando a flag --emoji voce utiliza emojis para diferencia os commits')
    .action(createCommit);

program.parse();