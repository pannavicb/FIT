'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

    const Route = use('Route')
    Route.on('/').render('welcome')
    
    //users route
    Route.post('/users', 'UserController.store')     // สร้างผู้ใช้ใหม่
    Route.get('/users', 'UserController.index')      // แสดงผู้ใช้ทั้งหมด
    Route.get('/users/:id', 'UserController.show')   // แสดงข้อมูลผู้ใช้ตาม ID
    Route.put('/users/:id', 'UserController.update') // แก้ไขข้อมูลผู้ใช้
    Route.delete('/users/:id', 'UserController.delete') // ลบผู้ใช้
    
    // Student Routes
    Route.get('/students', 'StudentController.index')            // Get all students
    Route.get('/students/:id', 'StudentController.show')        // Get student by ID
    Route.post('/students', 'StudentController.store')          // Create new student
    Route.put('/students/:id', 'StudentController.update')      // Update student
    Route.delete('/students/:id', 'StudentController.destroy')  // Delete student

  