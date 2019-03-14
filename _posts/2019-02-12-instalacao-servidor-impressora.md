---
layout: post
title: Instalação do Servidor de Impressão
date: 2019-02-12 21:35:22
description: Aprenda como fazer a configuração da impressora de impressão
categories: 
- Base de Conhecimentos
tags:
- senha 
- atendimento
---

A função do servidor de impressão é imprirmir as senhas que foram solicitadas diretamente no Tablet.

Conforme o orientação do item 2, o download do arquivo de instalação deve ser realizado diretamente no computador que terá a impressora previamente configura via REDE (network) ou USB (ligado diretamente no computador).

Para que as senhas sejam impressas corretamete siga os seguintes passos:

1. Crie o diretório C:/sso/
2. Descompate o que o arquivo ZIP baixado em C:/sso/
3. Acesse o diretório C:/sso/
4. Execute o arquivo 'start.bat' com um duplo clique
5. O Servidor de Impressão está online
6. Execute o seguinte comando 'WINDOWS' + R e digite 'cmd'
7. O prompt do windows irá abrir
8. Digite 'ipconfig' e pressione ENTER
9. Localize o IP do servidor de impressão, algo muito parecido com a imagem abaixo.
10. Copie o IP do servidor de impressão - CRTL + C.
11. Acesse o sistema do Smartline - https://smartlinepro.com.br/controle/
12. Entre com seu usuário/senha e acesse a funcionalidade 'Configurações' no menu lateral esquerdo
13. Clique no botão editar referente à franquia ao qual esta instalação está sendo realizada
14. Cole o IP no campo 'URL Serviço de Impressão' de modo que fique algo: http://192.168.0.2:9000/
15. Clique em salvar e pronto

TABLET - Feche o aplicativo e abra novamente para que as alterações sejam atualizadas no tablet.
