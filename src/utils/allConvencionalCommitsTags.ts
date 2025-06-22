type ccTagsProps = {
    name: string,
    description: string,
    value: string
}[];

// https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13
export const ccTags: ccTagsProps = [
    {
        name: "feat",
        description: "Commits que adicionam, ajustam ou removem um novo recurso da API ou da IU",
        value: "feat:"
    },
    {
        name: "fix",
        description: "Commits que corrigem um bug de API ou UI de um feat commit precedido",
        value: "fix:"
    },
    {
        name: "refactor",
        description: "Commits que reescrevem ou reestruturam o código sem alterar o comportamento da API ou da IU",
        value: "refactor:"
    },
    {
        name: "perf",
        description: "Os commits são um tipo especial de refactor commits que melhoram especificamente o desempenho",
        value: "perf:"
    },
    {
        name: "style",
        description: "Confirmações que abordam o estilo do código (por exemplo, espaços em branco, formatação, ponto e vírgula ausentes) e não afetam o comportamento do aplicativo",
        value: "style:"
    },
    {
        name: "test",
        description: "Commits que adicionam testes ausentes ou corrigem os existentes",
        value: "test:"
    },
    {
        name: "docs",
        description: "Commits que afetam exclusivamente a documentação",
        value: "docs:"
    },
    {
        name: "build",
        description: "Commits que afetam componentes relacionados à compilação, como ferramentas de compilação, dependências, versão do projeto, pipelines de CI/CD, etc...",
        value: "build:"
    },
    {
        name: "ops",
        description: "Commits que afetam componentes operacionais como infraestrutura, implantação, backup, procedimentos de recuperação, etc...",
        value: "ops:"
    },
    {
        name: "chore",
        description: "Commits diversos, por exemplo, modificação .gitignore",
        value: "chore:"
    },
];

//https://gist.github.com/parmentf/359667bf23e08a1bd8241fbf47ecdef0
export const ccTagsEmojis: ccTagsProps = [
    {
        name: "✨ feat",
        description: "Commits que adicionam, ajustam ou removem um novo recurso da API ou da IU",
        value: ":sparkles:"
    },
    {
        name: "🐛 fix",
        description: "Commits que corrigem um bug de API ou UI de um feat commit precedido",
        value: ":bug:"
    },
    {
        name: "🔨 refactor",
        description: "Commits que reescrevem ou reestruturam o código sem alterar o comportamento da API ou da IU",
        value: ":hammer:"
    },
    {
        name: "🚀 perf",
        description: "Os commits são um tipo especial de refactor commits que melhoram especificamente o desempenho",
        value: ":rocket:"
    },
    {
        name: "💎 style",
        description: "Confirmações que abordam o estilo do código (por exemplo, espaços em branco, formatação, ponto e vírgula ausentes) e não afetam o comportamento do aplicativo",
        value: ":gem:"
    },
    {
        name: "🚨 test",
        description: "Commits que adicionam testes ausentes ou corrigem os existentes",
        value: ":rotating_light:"
    },
    {
        name: "📚 docs",
        description: "Commits que afetam exclusivamente a documentação",
        value: ":books:"
    },
    {
        name: "📦 build",
        description: "Commits que afetam componentes relacionados à compilação, como ferramentas de compilação, dependências, versão do projeto, pipelines de CI/CD, etc...",
        value: ":package:"
    },
    {
        name: "🖥️ ops",
        description: "Commits que afetam componentes operacionais como infraestrutura, implantação, backup, procedimentos de recuperação, etc...",
        value: ":desktop_computer:"
    },
    {
        name: "🔧 chore",
        description: "Commits diversos, por exemplo, modificação .gitignore",
        value: ":wrench:"
    },
];
