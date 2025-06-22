# GITCC

![Static Badge](https://img.shields.io/badge/v22.15.1-node?logo=nodedotjs&logoColor=white&label=NodeJS)
![Static Badge](https://img.shields.io/badge/v10.12.1-pnpm?logo=pnpm&label=PNPM&color=%23F9AD00)
![Static Badge](https://img.shields.io/badge/typescript-v?logo=typescript&logoColor=white&color=%233178C6)

<hr/>

CLI criada com NodeJS para criação de commits seguindo o padrão do [Convencional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

[Página do pacote no NPM](https://www.npmjs.com/package/@aarthur.neves/gitcc-cli?activeTab=readme)

## Instalando CLI

```shell
npm i -g @aarthur.neves/gitcc-cli
```

### Comandos

> [!IMPORTANT]
> Antes de utilizar esse comando, lembre de utilizar o `git add` para salvar suas alterações

```shell
gitcc create
```
Com essa flag, você criar commits utilizando emojis para diferenciar os seus commits
```shell
gitcc create --emoji #ou -e
```

Esses são todos os comandos que a CLI disponibiliza

## Instalando projeto para desenvolvimento

```shell
git clone https://github.com/ArthurDeAraujoNeves3/gitcc.git
```
```shell
git clone git@github.com:ArthurDeAraujoNeves3/gitcc.git
```

Instalando dependências
```shell
pnpm i
```

```shell
pnpm run dev comandoDoProjeto #Dessa forma você pode rodar os comando do CLI em ambiente de desenvolvimento
```
Comando para o build
```shell
pnpm run build
```

Ao rodar o build, coloque esse comando no topo do arquivo main.js
```
#!/usr/bin/env node
```
