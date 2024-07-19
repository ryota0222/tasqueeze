// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var service_pb = require('./service_pb.js');

function serialize_Todos_Hero(arg) {
  if (!(arg instanceof service_pb.Hero)) {
    throw new Error('Expected argument of type Todos.Hero');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Todos_Hero(buffer_arg) {
  return service_pb.Hero.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Todos_HeroById(arg) {
  if (!(arg instanceof service_pb.HeroById)) {
    throw new Error('Expected argument of type Todos.HeroById');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Todos_HeroById(buffer_arg) {
  return service_pb.HeroById.deserializeBinary(new Uint8Array(buffer_arg));
}


var HeroServiceService = exports.HeroServiceService = {
  findOne: {
    path: '/Todos.HeroService/FindOne',
    requestStream: false,
    responseStream: false,
    requestType: service_pb.HeroById,
    responseType: service_pb.Hero,
    requestSerialize: serialize_Todos_HeroById,
    requestDeserialize: deserialize_Todos_HeroById,
    responseSerialize: serialize_Todos_Hero,
    responseDeserialize: deserialize_Todos_Hero,
  },
};

exports.HeroServiceClient = grpc.makeGenericClientConstructor(HeroServiceService);
