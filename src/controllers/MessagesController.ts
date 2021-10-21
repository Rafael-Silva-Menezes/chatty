import { Request, Response } from 'express';

import { MessagesService } from '../services/MessageService';

class MessagesController {
  async create(request: Request, response: Response): Promise<Response> {
    const { admin_id, user_id, text } = request.body;

    const messagesServices = new MessagesService();
    const messages = await messagesServices.create({
      admin_id,
      text,
      user_id,
    });

    return response.json(messages);
  }

  async ShowByUser(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const messagesServices = new MessagesService();

    const list = await messagesServices.listByUser(id);

    return response.json(list);
  }
}

export { MessagesController };
