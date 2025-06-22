
import { select, input } from '@inquirer/prompts';
import chalk from "chalk";
const { exec } = require('child_process');

import { InitialMessage } from '../utils/initialMessage';
import { ccTags } from "../utils/allConvencionalCommitsTags";
import { colors } from "../utils/colors";

export async function createCommit() {
    await InitialMessage();

    console.log(chalk.hex(colors.primary)("Tenha certeza de ter executado o comando git add antes"));
    
    // Type of commit (Ex: feat)
    const type = await select({
        message: "Qual o tipo do commit",
        choices: ccTags
    });
    // (Required)
    const title = await input({
        message: "Dê um título ao commit:", validate: (message) => {
            if (message.length == 0) {
                return "Título é obrigatório";
            };

            return true;
        }
    });
    // (Optional)
    const description = await input({ message: "Explique detalhadamente as mudanças alterações feitas:" });

    // Executing the command to create a commit
    const commitCommand = `git commit -m"${type} ${title}" ${description !== "" ? `-m"${description}"` : ""}`;
    console.log(chalk.hex(colors.primary)(`Executando comando $${commitCommand}`));
    exec(commitCommand, (error: Error, stdout: string, stderr: string) => {
        if (error) {
            console.error(chalk.red(`Erro: ${error.message}`));
            console.log("Verifique se você tem alguma alteração feita ou se rodou o comando $git add");

            return;
        };
        if (stderr) {
            console.error(`stderr: ${stderr}`);

            return;
        };

        console.log(stdout);
    });
};
