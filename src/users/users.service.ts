import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from '../dto/users.dto'; // Assurez-vous que le chemin est correct
import { User, UserDocument } from '../models/users.models'; // Assurez-vous que le chemin est correct
import { faker } from '@faker-js/faker';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async Add(body: UserDto) {
    return await this.userModel.create(body); // Utilisation de await pour gérer les opérations asynchrones
  }

  async FindAll() {
    return await this.userModel.find();
  }

  async FindOne(id: string) {
    return await this.userModel.findOne({ _id: id });
  }

  async Update(id: string, body: UserDto) {
    return await this.userModel.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true },
    );
  }

  async Delete(id: string) {
    return await this.userModel.deleteOne({ _id: id });
  }

  async Search(key: string) {
    const keyword = key
      ? {
          $or: [
            { fullname: { $regex: key, $options: 'i' } },
            { email: { $regex: key, $options: 'i' } },
          ],
        }
      : {};
    return await this.userModel.find(keyword);
  }

  async Faker() {
    for (let index = 0; index < 30; index++) {
      const fakeUser = {
        fullname: faker.name.fullName(),
        email: faker.internet.email(),
        age: 30,
        country: faker.address.city(),
      };
      await this.userModel.create(fakeUser); // Utilisation de await pour gérer les opérations asynchrones
    }
    return 'success';
  }
}
