import nodemailer from 'nodemailer'

import { IMailProvider, IMessage } from '../IMailProvider'

export class MailtrapMailProvider implements IMailProvider {
  private transporter

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smt.mailtrap.io',
      port: 2525,
      auth: {
        user: '',
        pass: '',
      },
    })
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
    })
  }
}
