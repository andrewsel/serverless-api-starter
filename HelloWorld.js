import { success, failure } from "./libs/response-lib";

export async function main(event) {
  return success("Hello world");
}
