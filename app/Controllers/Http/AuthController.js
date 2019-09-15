'use strict'
const User = use('App/Models/User')
class AuthController {
    async login(
        {request, response, auth}
        ){
            const {username, password} = request.only(['username', 'password'])

            const token = await auth.attempt(username, password)
            
            return response.json({
                'username': username,
                'data': token 
            })
        }
    async register(
        { request, response }
        ){
            const {username, email, password, firstname, lastname} = request.only(['username', 'email', 'password', 'firstname', 'lastname'])

            
            const username_check = await User.findBy('username', username)
            const email_check = await User.findBy('email', email)
            
            if(username_check){
                return response.send({message: 'Usuário já cadastrado.'})
            }

            if(email_check){
                return response.send({message: 'E-mail já cadastrado em outra conta.'})
            }

            const data = await User.create({
                username,email,password,firstname,lastname
            })

            return response.send({
                mensagem: 'Usuário registrado com sucesso.', 
                    username: data.username,
                    email: data.email
                })
        }
}

module.exports = AuthController
