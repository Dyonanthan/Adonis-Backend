'use strict'
const User = use('App/Models/User')
class UserController {
    async index(){
        const Users = User.all()
        return Users
    }
    async show(
        { params , response }
        ){
            try {   
                const user = await User.findOrFail(params.id)
                return user;

              } catch (error) {
                return response.send({ 
                    message: 'Usuário não encontrado' 
                })
              } 
        }
    async delete( 
        { params , response } 
        ){
            /* Verifica se o usuário existe na db */
            const user_delete = await User.findBy('id', params.id)
            if(user_delete)
            {
                response.send({
                    message: 'O usuário foi deletado', data: user_delete
                })
                user_delete.delete()

            }else{
                response.send({
                    message: 'Usuário não encontrado'
                })
            }
        }
    async update(
        { params , request , response}
        ){
            const data = request.only(['username', 'email', 'password', 'firstname', 'lastname'])
            const user_update = await User.find(params.id)
            if( data.username ){
                const username_check = await User.findBy('username', data.username)
                if(username_check){
                    return response.send({
                        message: 'Usuário já existente.'
                    })
                }
            }
            if( data.email ){
                const email_check = await User.findBy('email', data.email)
                if(email_check){
                    return response.send({
                        message: 'E-mail já cadastrado em outra conta.'
                    })
                }
             }
            user_update.merge(data)

            await user_update.save()

            return response.send({
                message: 'Usuário atualizado.', data: user_update
            }) 
        }
}

module.exports = UserController
