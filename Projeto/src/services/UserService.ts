import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";


class UserService {
  private UserRep: Repository<User>;

  constructor() {
    this.UserRep = getCustomRepository(UserRepository);
  }

  async create(email: string) {

    //verificar se usuario existe
    const userExists = await this.UserRep.findOne({
      email
    });
    if (userExists) {
      return userExists;
    }
    //se nao existir salvar no db

    const user = this.UserRep.create({
      email
    });

    await this.UserRep.save(user);


    // se existir retornar user
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.UserRep.findOne({ email });

    return user;
  }


}

export { UserService };