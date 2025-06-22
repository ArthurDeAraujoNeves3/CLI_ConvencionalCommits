import * as figlet from "figlet";
import { select, input } from '@inquirer/prompts';
const { exec } = require('child_process');

import { gradientTheme } from "../utils/gradientDefault";
import { ccTags } from "../utils/allConvencionalCommitsTags";

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
    console.log("Executando git add .");
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

    const commitCommand = `git commit -m"${type} ${title}" ${description !== "" ? `-m"${description}"` : ""}`;

    // Executing the command
    exec(commitCommand, (error: Error, stdout: string, stderr: string) => {
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
};
