const express = require('express');
const app = express();
const request = require('supertest');
const expect = require('chai').expect;

app.get('/first', (err, res) => {
    res.status(200).json({"ok": "response"});
});

app.get('/greet', (err, res) => {
    res.status(200).json({"greet": "Hello Sanjiv"});
});

describe('First test', () => {
    it('OK response', () => {
        request(app)
        .get('/first')
        .end((err, res) => {
            expect(res.statusCode).to.be.equal(200);
            expect(res.body.ok).to.be.equal('response');
        });
    })
});

describe('Greet test', () => {
    it('Greet response', () => {
        request(app)
        .get('/greet')
        .end((err, res) => {
            expect(res.statusCode).to.be.equal(200);
            expect(res.body.greet).to.be.equal('Hello Sanjiv');
        });
    })
});