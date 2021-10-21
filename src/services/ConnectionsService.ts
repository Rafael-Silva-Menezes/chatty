import { getCustomRepository, Repository } from 'typeorm';

import { Connection } from '../entities/Connections';
import { ConnectionsRepository } from '../repositories/ConnectionsRepository';

type IConnectionCreate = {
  socket_id: string;
  user_id: string;
  admin_id?: string;
  id?: string;
};

class ConnectionsServices {
  private connectionRepository: Repository<Connection>;

  constructor() {
    this.connectionRepository = getCustomRepository(ConnectionsRepository);
  }

  async create({
    socket_id,
    user_id,
    admin_id,
    id,
  }: IConnectionCreate): Promise<Connection> {
    const connection = this.connectionRepository.create({
      socket_id,
      user_id,
      admin_id,
      id,
    });

    await this.connectionRepository.save(connection);

    return connection;
  }

  async findByUserId(user_id: string): Promise<Connection> {
    const connection = await this.connectionRepository.findOne({
      user_id,
    });

    return connection;
  }
}

export { ConnectionsServices };
