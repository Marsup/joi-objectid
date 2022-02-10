'use strict';

const Lab = require('@hapi/lab');
const { ObjectId } = require('bson');

const Extension = require('..');
const Joi = require('joi').extend(Extension);

const { describe, it, expect } = exports.lab = Lab.script();

describe('joi-objectId', () => {

    it('should expose the default export', () => {

        expect(Extension.default).to.exist();
    });

    it('should validate a string', () => {

        const schema = Joi.objectId();
        const { value, error } = schema.validate('a'.repeat(24));
        expect(error).to.not.exist();
        expect(value).to.be.an.instanceof(ObjectId);
        expect(value.toString()).to.equal('aaaaaaaaaaaaaaaaaaaaaaaa');
    });

    it('should validate a string in strict mode', () => {

        const schema = Joi.objectId().strict();
        const { value, error } = schema.validate('a'.repeat(24));
        expect(error).to.not.exist();
        expect(value).to.equal('aaaaaaaaaaaaaaaaaaaaaaaa');
    });

    it('should fail on invalid string', () => {

        const schema = Joi.objectId();
        const { value, error } = schema.validate('a'.repeat(23));
        expect(value).to.equal('aaaaaaaaaaaaaaaaaaaaaaa');
        expect(error).to.be.an.error('should be an ObjectId');
    });

    it('should validate an objectid', () => {

        const schema = Joi.objectId();
        const { value, error } = schema.validate(new ObjectId('a'.repeat(24)));
        expect(error).to.not.exist();
        expect(value).to.be.an.instanceof(ObjectId);
        expect(value.toString()).to.equal('aaaaaaaaaaaaaaaaaaaaaaaa');
    });

    it('should validate an objectid in strict mode', () => {

        const schema = Joi.objectId().strict();
        const { value, error } = schema.validate(new ObjectId('a'.repeat(24)));
        expect(error).to.not.exist();
        expect(value).to.be.an.instanceof(ObjectId);
        expect(value.toString()).to.equal('aaaaaaaaaaaaaaaaaaaaaaaa');
    });

    it('should fail on invalid object', () => {

        const schema = Joi.objectId();
        const { value, error } = schema.validate({});
        expect(value).to.equal({});
        expect(error).to.be.an.error('should be an ObjectId');
    });
});
