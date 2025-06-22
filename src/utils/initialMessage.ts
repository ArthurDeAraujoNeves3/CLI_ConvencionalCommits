import * as figlet from "figlet";

import { gradientTheme } from "../utils/gradientDefault";

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

export async function InitialMessage() {
    await figlet.text("GITCC", {
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
                console.log(""); // Spacing
            };

            sleep();
        }
    );
};
