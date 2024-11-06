'use strict'

const Student = use('App/Models/Student')

class StudentController {
  // Get all students
  async index({ response }) {
    try {
      const students = await Student.all()
      return response.status(200).json(students)
    } catch (error) {
      return response.status(500).json({ message: 'Error fetching students', error: error.message })
    }
  }

  // Get a single student by ID
  async show({ params, response }) {
    try {
      const student = await Student.find(params.id)

      if (!student) {
        return response.status(404).json({ message: 'Student not found' })
      }

      return response.status(200).json(student)
    } catch (error) {
      return response.status(500).json({ message: 'Error fetching student', error: error.message })
    }
  }

// Create multiple students
async store({ request, response }) {
    try {
      const studentsData = request.only(['first_name', 'last_name', 'email', 'phone', 'birthdate'])
      
      const students = await Student.createMany(studentsData)
  
      return response.status(201).json({
        message: 'Students created successfully',
        data: students
      })
    } catch (error) {
      return response.status(500).json({ message: 'Error creating students', error: error.message })
    }
  }
  


  // Update an existing student
  async update({ params, request, response }) {
    try {
      const student = await Student.find(params.id)

      if (!student) {
        return response.status(404).json({ message: 'Student not found' })
      }

      const data = request.only(['first_name', 'last_name', 'email', 'phone', 'birthdate'])

      student.merge(data)
      await student.save()

      return response.status(200).json({
        message: 'Student updated successfully',
        data: student
      })
    } catch (error) {
      return response.status(500).json({ message: 'Error updating student', error: error.message })
    }
  }

  // Delete a student
  async destroy({ params, response }) {
    try {
      const student = await Student.find(params.id)

      if (!student) {
        return response.status(404).json({ message: 'Student not found' })
      }

      await student.delete()

      return response.status(200).json({
        message: 'Student deleted successfully'
      })
    } catch (error) {
      return response.status(500).json({ message: 'Error deleting student', error: error.message })
    }
  }
}

module.exports = StudentController
