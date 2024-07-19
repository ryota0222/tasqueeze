// package: Todos
// file: service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as service_pb from "./service_pb";

interface IHeroServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    findOne: IHeroServiceService_IFindOne;
}

interface IHeroServiceService_IFindOne extends grpc.MethodDefinition<service_pb.HeroById, service_pb.Hero> {
    path: "/Todos.HeroService/FindOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_pb.HeroById>;
    requestDeserialize: grpc.deserialize<service_pb.HeroById>;
    responseSerialize: grpc.serialize<service_pb.Hero>;
    responseDeserialize: grpc.deserialize<service_pb.Hero>;
}

export const HeroServiceService: IHeroServiceService;

export interface IHeroServiceServer extends grpc.UntypedServiceImplementation {
    findOne: grpc.handleUnaryCall<service_pb.HeroById, service_pb.Hero>;
}

export interface IHeroServiceClient {
    findOne(request: service_pb.HeroById, callback: (error: grpc.ServiceError | null, response: service_pb.Hero) => void): grpc.ClientUnaryCall;
    findOne(request: service_pb.HeroById, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.Hero) => void): grpc.ClientUnaryCall;
    findOne(request: service_pb.HeroById, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.Hero) => void): grpc.ClientUnaryCall;
}

export class HeroServiceClient extends grpc.Client implements IHeroServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public findOne(request: service_pb.HeroById, callback: (error: grpc.ServiceError | null, response: service_pb.Hero) => void): grpc.ClientUnaryCall;
    public findOne(request: service_pb.HeroById, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.Hero) => void): grpc.ClientUnaryCall;
    public findOne(request: service_pb.HeroById, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.Hero) => void): grpc.ClientUnaryCall;
}
