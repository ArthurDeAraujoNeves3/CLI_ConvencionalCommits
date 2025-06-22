const { Command } = require('commander');
const program = new Command();
const { createCommit } = require("./commands/createCommit");

program
    .name('gitcc')
    .description('CLI para criação de commits seguindo o padrão Convencional Commits')
    .version('1.0.0');

program
    .command('create')
    .description('Criar commit. Passando a flag --emoji voce utiliza emojis para diferencia os commits')
    .action(createCommit);

program.parse();