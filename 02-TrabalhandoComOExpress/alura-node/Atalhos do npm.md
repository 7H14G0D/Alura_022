## Ao trabalhar com o Node.js, frequentemente iremos instalar e utilizar novas bibliotecas ou frameworks, bem como publicar as nossas próprias. Com isso, utilizamos algum gerenciador de pacotes, como o NPM ou o YARN. Visto que o NPM já é instalado juntamente com o Node.js, destacamos aqui alguns dos principais comandos e atalhos para facilitar o uso do mesmo:

Comando	          Atalho	      Uso
install	          i	            Instala um novo módulo
list	            ls	          Lista os módulos instalados
test	            t	            Executa o script de teste especificado no package.json
--global	        -g	          Sinalizador para instalar um pacote globalmente 
--save	          -S	          Salva o módulo ao instalar
--save-exact     	-E	          Salva o módulo ao instalar, porém na versão exata mencionada
--save-dev	      -D	          Salva como Desenvolvimento o módulo ao instalar


## Outros comandos muito comuns:

Comando 	          Descrição
npm home	          Abre a página do projeto
npm repo	          Abre o repositório de código do projeto
npm audit	          Executa uma auditoria no projeto para identificar se existe alguma dependência com vulnerabilidade conhecida
npm update	        Atualiza projetos para a última versão respeitando o package.json
npm outdated	      Retorna a lista de dependências desatualizadas mostrando a versão mais recente
npm adduser	        Adiciona um novo usuario no https://registry.npmjs.org para permitir a publicação de pacotes
npm publish	        Faz a publicação do pacote no NPM


## Lembrando que não é necessário decorar todos estes comandos, sempre é possível utilizar o comando:
npm help <nome do comando>

## Para obter mais informações e detalhes dentro do próprio terminal.