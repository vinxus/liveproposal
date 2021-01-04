"use strict";
const sqlite3 = require('sqlite3').verbose();

class Db {
    constructor(file) {
        this.db = new sqlite3.Database(file);
        this.createTable()
    }

    createTable() {
        const sql = `
            CREATE TABLE IF NOT EXISTS user (
                id integer PRIMARY KEY,
                name text,
                email text UNIQUE,
                user_pass text,
                is_admin integer,
                is_logged_in integer)`
        return this.db.run(sql);
    }
    createProposalTable() {
        const sql = `
            CREATE TABLE IF NOT EXISTS proposal (
                id integer PRIMARY KEY,
                title text,
                category text,
                category text,
                body text,
                createdAt dateTime
                createdBy text)`
        return this.db.run(sql);
    }
    selectByEmail(email, callback) {
        return this.db.get(
            `SELECT * FROM user WHERE email = ?`,
            [email],function(err,row){
                callback(err,row)
            })
    }

    insertAdmin(user, callback) {
        
        return this.db.run(
            'INSERT INTO user (name,email,user_pass,is_admin) VALUES (?,?,?,?)',
            user, (err) => {
                callback(err)
            })
    }

    selectAll(callback) {
        return this.db.all(`SELECT * FROM user`, function(err,rows){
            callback(err,rows)
        })
    }

    insert(user, callback) {
        return this.db.run(
            'INSERT INTO user (name,email,user_pass, is_admin) VALUES (?,?,?,?)',
            user, (err) => {
                callback(err)
            })
    }

    updateLogin(email, loginStatus, callback) {
        var query = 'UPDATE user set is_logged_in = ? where email = ?'
        console.log('Update Login')
        return this.db.run(
            query,
            [loginStatus, email], (err) => {
                callback(err)
            }
        )
    }
}

module.exports = Db
