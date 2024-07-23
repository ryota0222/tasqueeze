import * as grpc from '@grpc/grpc-js';
import { TaskManagerService } from '@repo/proto/generate/server/service_grpc_pb';
import { TodosRequest, TodosResponse } from '@repo/proto/generate/server/service_pb';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 50051;

export const TodoService: { [method: string]: grpc.UntypedHandleCall } = {
  getTodoList: (
    call: grpc.ServerUnaryCall<TodosRequest, TodosResponse>,
    callback: grpc.sendUnaryData<TodosResponse>
  ) => {
    console.log('GetTodoList called!');
    const page = call.request.getPage();
    const limit = call.request.getLimit();
    const todos = new TodosResponse();
    todos.setTodosList([]);
    todos.setLimit(limit);
    todos.setPage(page);
    todos.setTotalItems(100);
    callback(null, todos);
  }
};

function main() {
  const server = new grpc.Server();
  server.addService(TaskManagerService, TodoService);
  server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), (error, port) => {
    if (error) {
      console.error(`Server binding failed: ${error.message}`);
      return;
    }
    console.log(`Server running at http://0.0.0.0:${port}`);
  });
}

main();
