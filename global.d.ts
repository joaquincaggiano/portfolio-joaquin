type Messages = typeof import("./messages/es.json");
type EnMessages = typeof import("./messages/en.json");

declare interface IntlMessages extends Messages, EnMessages {}