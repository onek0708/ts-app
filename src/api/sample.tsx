import axios from "axios";
import type { Product } from "./projects.types";

const ENDPOINT = "http://localhost:3001/v1/projects";

export async function getProject() {
  return await axios("http://localhost:3001/v1/products").then(
    (res) => res.data
  );
}
