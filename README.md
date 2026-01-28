# 🦸‍♂️ Desafio Lógica de Programação – Classificador de Nível de Herói

## 💻 Sobre o Projeto

Este repositório contém a solução para o desafio **“Classificador de nível de Herói”**, proposto pela plataforma **DIO (Digital Innovation One)** como parte dos estudos de lógica de programação com **JavaScript**.

O desafio consiste em criar um programa que classifique um herói com base na quantidade de experiência (XP), exibindo uma mensagem com o nome do herói e seu nível correspondente.

---

## 🛠 Versões no Projeto

Neste repositório você encontrará duas versões do programa:

### 📄 1. Versão Simples (`index.js`)

Esta versão é a mais básica, ideal para iniciantes. Ela já tem valores pré-definidos para o nome e XP do herói e usa estruturas condicionais para determinar o nível.

### 📄 2. Versão Interativa (`classificadorHeroi.js`)

Nesta versão mais elaborada, o programa solicita ao usuário que digite o **nome do herói** e a **quantidade de XP** diretamente pelo terminal, usando o módulo `readline` do Node.js.

Isso permite a entrada dinâmica de dados enquanto o programa está rodando.

---

## 🧠 Conceitos Aplicados

No desenvolvimento deste desafio foram utilizados:

✔ Variáveis  
✔ Operadores lógicos e relacionais  
✔ Estruturas de decisão (`if`, `else if`, `else`)  
✔ Entrada de dados via terminal (Node.js)  
✔ Template Strings  

Esses conceitos são fundamentais para a lógica de programação e foram praticados neste projeto. :contentReference[oaicite:1]{index=1}

---

## ▶️ Como Executar

Para rodar o projeto localmente, siga os passos abaixo:

### 1) Clone o repositório:
```bash
git clone https://github.com/bmcarvalho95/desafio-logica-inicial-dio.git

### 2) Acesse a pasta do projeto:

cd desafio-logica-inicial-dio

### 3) Execute uma das versões:

🟦 Versão simples
node index.js

🟩 Versão interativa (com entrada pelo terminal)
node classificadorHeroi.js

🧪 Exemplo de Uso

Ao executar a versão interativa, o terminal fará perguntas como:

Digite o nome do herói: Artemisis  
Digite o XP do herói: 6205

O Herói de nome Artemis está no nível de Ouro

📌 Níveis de Herói

O programa classifica os heróis conforme as faixas de XP:

XP do Herói	Nível
< 1.000	Ferro
1.001 – 2.000	Bronze
2.001 – 5.000	Prata
5.001 – 7.000	Ouro
7.001 – 8.000	Platina
8.001 – 9.000	Ascendente
9.001 – 10.000	Imortal
≥ 10.001	Radiante


✨ O que Aprendi

Este desafio me ajudou a reforçar:

✔ A lógica condicional em JavaScript
✔ Como fazer entrada de dados no terminal usando Node.js
✔ A diferença entre código fixo e código interativo
✔ Organização de projeto para GitHub﻿

👩‍💻 Sobre a Autora

Projeto desenvolvido por Bruna Martins de Carvalho
Desenvolvido como parte dos desafios da plataforma DIO (Digital Innovation One).
