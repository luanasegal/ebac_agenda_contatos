const form = document.getElementById('form-agenda');
const nomeCompleto = [];
const ddd = [];
const telefone = [];
const email = [];

let linhas = '';

form.addEventListener('submit', function (e) {
      e.preventDefault();

      adicionaLinha();
      atualizaTabela();
}); // A página não é recarregada quando uma nova linha é adicionada à tabela com as linhas já existentes

function validaNome(nomeCompleto) {
      // Condição criada para garantir pelo menos duas palavras
      const palavrasNoNome = nomeCompleto.split(' ');
      return palavrasNoNome.length >= 2;
} // Valida se o nome colocado no campo nome-contato é completo ou não

function checkDDD(value) {
      const validDDDs = ['11', '12', '13', '14', '15', '16', '17', '18', '19', '21', '22', '24', '27', '28', '31', '32', '33', '34', '35', '37', '38', '41', '42', '43', '44', '45', '46', '47', '48', '49', '51', '53', '54', '55', '61', '62', '63', '64', '65', '66', '67', '68', '69', '71', '73', '74', '75', '77', '79', '81', '82', '83', '84', '85', '86', '87', '88', '89', '91', '92', '93', '94', '95', '96', '97', '98', '99'];

      return validDDDs.includes(value);
} // Verifica se o DDD é válido

document.getElementById('ddd-celular').addEventListener('input', function () {
      const inputDDD = this.value;

      if (!checkDDD(inputDDD)) {
            document.getElementById('mensagem-erro').textContent = 'DDD inválido. Por favor digite um valor válido.';
      } else {
            document.getElementById('mensagem-erro').textContent = '';
      }
});   // Verifica o DDD à medida que o usuário digita

function adicionaLinha() {
      const inputNomeContato = document.getElementById('nome-contato');
      const inputDDDContato = document.getElementById('ddd-celular');
      const inputTelefoneContato = document.getElementById('numero-celular');
      const inputEmailContato = document.getElementById('email-contato');

      const nomeCompleto = inputNomeContato.value.trim().split(' ');
      const nome = nomeCompleto[0] || '';
      const sobrenome = nomeCompleto.slice(1).join(' ') || ''; // Captura o nome e sobrenome

      if (nome === '' || sobrenome === '') {
            document.getElementById('mensagem-erro').textContent = 'Por favor informe nome e sobrenome.';
            return;
      }

      document.getElementById('mensagem-erro').textContent = '';

      let linha = '<tr>';
      linha += `<td>${nome} ${sobrenome}</td>`;
      linha += `<td>${inputDDDContato.value}</td>`;
      linha += `<td>${inputTelefoneContato.value}</td>`;
      linha += `<td>${inputEmailContato.value}</td>`;
      linha += `</tr>`;

      linhas += linha;

      inputNomeContato.value = '';
      inputDDDContato.value = '';
      inputTelefoneContato.value = '';
      inputEmailContato.value = '';
} // Adiciona à tabela os valores colocados no formulário linha a linha

function atualizaTabela() {
      const corpoTabela = document.querySelector('tbody');
      corpoTabela.innerHTML = linhas;
} // Atualiza a tabela a cada novo contato adicionado