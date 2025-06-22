import * as figlet from "figlet";
import { select, input } from '@inquirer/prompts';
import chalk from "chalk";
const { exec } = require('child_process');

import { gradientTheme } from "../utils/gradientDefault";
import { ccTags } from "../utils/allConvencionalCommitsTags";
import { colors } from "../utils/colors";

export async function createCommit() {
    figlet.text("GITCC", {
        font: "Isometric3",
        horizontalLayout: "default",
        whitespaceBreak: true
    },
        function (err: Error | null, data: undefined | string) {
            if (err) {
                console.log("Something went wrong...");
                console.dir(err);

                return;
            };

            if (data !== undefined) {
                console.log(gradientTheme(data));
            };
        }
    );

    console.log(chalk.hex(colors.primary)("Executando git add ."));
    exec("git add .", (error: Error, stdout: string, stderr: string) => {
        if (error) {
            console.error(`Erro: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });

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
    console.log(chalk.hex(colors.primary)(`Executando comando ${commitCommand}`));

    exec(commitCommand, (error: Error, stdout: string, stderr: string) => {
        if (error) {
            console.error(`Erro: ${error.message}`);
          
            return;
        };
        if (stderr) {
            console.error(`stderr: ${stderr}`);
          
            return;
        };

        console.log(chalk.red("Erro ao criar commit.", stderr));
    });
};
