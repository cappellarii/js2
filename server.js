const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

const getData = () => JSON.parse(fs.readFileSync('data.json'));
const saveData = (data) => fs.writeFileSync('data.json', JSON.stringify(data));

// Endpoint GET
app.get('/contadores', (req, res) => {
  res.json(getData());
});

// Endpoint POST para atualizar
app.post('/incrementar', (req, res) => {
  const { contador } = req.body;
  const data = getData();
  if (data[contador] !== undefined) {
    data[contador]++;
    saveData(data);
    res.json({ sucesso: true, valor: data[contador] });
  } else {
    res.status(400).json({ erro: 'Contador inválido' });
  }
});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
