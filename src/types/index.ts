import type { Message, Update } from "telegraf/typings/core/types/typegram";
import type { NarrowedContext, Scenes } from "telegraf";

export interface SessionData extends Scenes.WizardSessionData {
  order?: {
    address?: string;
    phone?: string;
  };
}

export type BotContext = Scenes.WizardContext<SessionData>;

export type TextContext = NarrowedContext<BotContext, Update.MessageUpdate<Message.TextMessage>>;
