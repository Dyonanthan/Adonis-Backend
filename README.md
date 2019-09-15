
# Introdução
Este é um projeto limpo desenvolvido com a framework AdonisJS onde possuí autenticação, controle dos usuários.

# Instalação

Use os comandos do adonisjs para a instalação do projeto

```bash
git clone https://github.com/Dyonanthan/adonis_api.git
npm install
adonis migration:run
adonis serve --dev
```


# Autenticação
## Login
 **O login é feito pelo usuário e senha, podendo ser trocada pelo e-mail em:**
 >config -> auth.js

```javascript 
jwt: {
    serializer: 'lucid',
    model: 'App/Models/User',
    scheme: 'jwt',
    uid: 'username',               -> email ou username
    password: 'password',
    options: {
      secret: Env.get('APP_KEY')
    }
  }
```


## Registro
**É possível fazer o registro de: e-mail, usuário, primeiro nome, último nome e senha. Podendo ser alterada em:**
>database -> migrations -> user.js
```javascript
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('email', 254).notNullable().unique()
      table.integer('userlevel',11).notNullable()
      table.string('firstname', 40).notNullable()
      table.string('lastname', 40).notNullable()
      table.timestamps()
    })
  }
```
# Informações
## Usuários
## Listar Usuários

## Mostrar usuários




