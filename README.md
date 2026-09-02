# Central de Demandas

Protótipo de uma aplicação móvel para registrar e acompanhar demandas de dados e sistemas corporativos. O projeto utiliza JavaScript, React Native (Expo), Node.js e SQLite.

## Funcionalidades

- identificação simples do usuário;
- abertura de solicitações com categoria, prioridade e descrição;
- consulta, filtro por status e histórico de solicitações;
- atualização de status e observações pela equipe responsável;
- avaliação do atendimento e formulário de feedback;
- persistência local no navegador para a demonstração no GitHub Pages;
- API opcional em Node.js com banco SQLite para evolução fora do GitHub Pages.

## Executar localmente

```bash
npm install
npm run web
```

Para iniciar a API local opcional (ela não é necessária para o GitHub Pages):

```bash
cd server
npm install
npm start
```

Em redes corporativas com inspeção SSL, a instalação de `better-sqlite3` pode exigir que a equipe de TI disponibilize o certificado da empresa ao Node.js. Isso não afeta a publicação estática no GitHub Pages.

## Publicar no GitHub Pages

1. Crie um repositório GitHub e envie esta pasta como raiz do projeto.
2. Em **Settings > Pages**, selecione **GitHub Actions** como fonte de publicação.
3. Faça push na branch `main`. O workflow em `.github/workflows/deploy-pages.yml` fará a exportação e a publicação.

> O GitHub Pages hospeda somente arquivos estáticos. Por isso, a versão publicada armazena as solicitações no navegador do usuário. A pasta `server/` contém a referência da API Node.js + SQLite para uso em ambiente próprio.

## Cuidados com dados

Utilize somente dados fictícios ou anonimizados. Não registre nomes de sistemas internos, informações pessoais, documentos, credenciais ou dados operacionais da empresa.
