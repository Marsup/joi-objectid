import { AnySchema, ExtensionFactory } from "joi";

declare module "joi" {
  export interface Root {
    objectId(): AnySchema;
  }
}

declare const extension: ExtensionFactory;

export default extension;
