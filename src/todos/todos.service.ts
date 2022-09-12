import { InjectModel } from "@nestjs/mongoose";
import { Todo } from "./todo.entity";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { UpdateTodoDto } from "../dto/update-todo.dto";
import { Model } from "mongoose";

export class TodosService {
  constructor(
    @InjectModel('Todo')
    private readonly todoRepository: Model<Todo>
  ) { }

  // CRUD
  create(todo: CreateTodoDto) {
    return this.todoRepository.create(todo);
  }

  getAll() {
    return this.todoRepository.find({});
  }

  // updateMany(todo: UpdateTodoDto) {
  //   return this.todoRepository.updateMany(todo);
  // }

  async delete(id: string) {
    const { affected } = await this.todoRepository.remove({ id });
    return affected > 0;
  }
}