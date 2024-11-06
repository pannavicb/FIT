'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Hash = use('Hash')

const User = use('App/Models/User')

class UserSeeder {
  async run () {
    await User.create({
      username: 'newuser',
      email: 'newuser@example.com',
      password: await Hash.make('your_password_here'), // แฮชรหัสผ่าน
      role: 'user'
    })
  }
}

module.exports = UserSeeder
