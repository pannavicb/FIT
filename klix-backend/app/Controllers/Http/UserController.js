'use strict'

const User = use('App/Models/User')

class UserController {
   //Get all users
  async index({ response }) {
    try {
      const users = await User.all()
      return response.status(200).json(users)
    } catch (error) {
      return response.status(500).json({ message: 'Error fetching users', error: error.message })
    }
  }

  // Get a single user by ID
  async show({ params, response }) {
    try {
      const user = await User.find(params.id)

      if (!user) {
        return response.status(404).json({ message: 'User not found' })
      }

      return response.status(200).json(user)
    } catch (error) {
      return response.status(500).json({ message: 'Error fetching user', error: error.message })
    }
  }

  // Create a new user
  async store({ request, response }) {
    try {
      const data = request.only(['username', 'email', 'password'])

      const user = await User.create(data)

      return response.status(201).json({
        message: 'User created successfully',
        data: user
      })
    } catch (error) {
      return response.status(500).json({ message: 'Error creating user', error: error.message })
    }
  }

  // Update an existing user
  async update({ params, request, response }) {
    try {
      const user = await User.find(params.id)

      if (!user) {
        return response.status(404).json({ message: 'User not found' })
      }

      const data = request.only(['username', 'email', 'password'])

      user.merge(data)
      await user.save()

      return response.status(200).json({
        message: 'User updated successfully',
        data: user
      })
    } catch (error) {
      return response.status(500).json({ message: 'Error updating user', error: error.message })
    }
  }

  // Delete a user
  async destroy({ params, response }) {
    try {
      const user = await User.find(params.id)

      if (!user) {
        return response.status(404).json({ message: 'User not found' })
      }

      await user.delete()

      return response.status(200).json({
        message: 'User deleted successfully'
      })
    } catch (error) {
      return response.status(500).json({ message: 'Error deleting user', error: error.message })
    }
  }
}

module.exports = UserController
