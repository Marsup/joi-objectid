[![npm version](https://badge.fury.io/js/@marsup%2Fjoi-objectid.svg)](http://badge.fury.io/js/@marsup%2Fjoi-objectid)
[![Build Status](https://github.com/Marsup/joi-objectid/actions/workflows/main.yaml/badge.svg)](https://github.com/Marsup/joi-objectid/actions?query=workflow%3Amain)

# @marsup/joi-objectid

This is a simple [joi](https://joi.dev/) extension to validate MongoDB's ObjectIDs.

## Installation

`npm install --save @marsup/joi-objectid`

## Usage
```js
const Joi = require('joi').extend(require('@marsup/joi-objectid'));

Joi.objectId().validate(new ObjectId("aaaaaaaaaaaaaaaaaaaaaaaa")) // Valid => ObjectId("aaaaaaaaaaaaaaaaaaaaaaaa")  
Joi.objectId().validate("aaaaaaaaaaaaaaaaaaaaaaaa") // Valid ObjectId("aaaaaaaaaaaaaaaaaaaaaaaa")
Joi.objectId().strict().validate("aaaaaaaaaaaaaaaaaaaaaaaa") // Invalid
Joi.objectId().strict().validate(new ObjectId("aaaaaaaaaaaaaaaaaaaaaaaa")) // Valid => ObjectId("aaaaaaaaaaaaaaaaaaaaaaaa")  
```

### With Typescript
```ts
import BaseJoi from 'joi';
import JoiObjectId from '@marsup/joi-objectid';

const Joi = BaseJoi.extend(JoiObjectId);
```
