'use strict';

const { ObjectId } = require('bson');

const extension = (joi) => ({
    type: 'objectId',
    messages: {
        'objectId.base': 'should be an ObjectId'
    },
    validate(value, { schema, prefs, error }) {

        if (ObjectId.isValid(value)) {
            if (prefs.convert) {
                return { value: new ObjectId(value) };
            }
            else if (value instanceof ObjectId) {
                return { value };
            }

            return { value };
        }

        return { value, errors: error('objectId.base') };
    }
});

extension.default = extension;

module.exports = extension;
