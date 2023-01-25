import React, { useState, useMemo } from "react";
import { Product } from "./api/projects.types";
import { getProject } from "./api/sample";

const Sample: React.FC = () => {
  let name: string = "경화";
  let age: number = 16;

  const [count, setCount] = useState<number>(0);

  let a: any = 0;
  a = true;
  a = "typescript";
  a = {};

  let aa: string | number;
  aa = "jinjoo";

  type centimeter = number;
  type kilogram = number;

  type Student = {
    name: string;
    height: centimeter;
    weight: kilogram;
  };

  let student: Student = {
    name: "daeun",
    height: 163,
    weight: 53,
  };

  type Student1 = {
    name?: string;
    height: centimeter;
    weight: kilogram;
  };

  let student1: Student1 = {
    height: 153,
    weight: 53,
  };

  let list: number[] = [1, 2, 3, 4, 5];

  let member: string[] = ["천경화", "박진주", "천윤호"];
  member.push("라이켓");

  let member1: (string | number | boolean | null)[] = [
    "천경화",
    10,
    true,
    null,
  ];

  let str: Array<string | number> = ["박진주", 10];
  let str2: typeof str = ["천윤호", 20];

  let arr: Array<() => string> = [() => "라이켓", () => "김멋사"];
  console.log(arr[0]());

  let member2: [string, number] = ["김멋사", 10];
  console.log(member2);

  // tuple
  let member3: [string, number] = ["천경화", 48];
  console.log(member);

  const [products, setProducts] = useState<Product[] | null>(null);

  return (
    <div>
      <table>
        {Array.isArray(products) &&
          products?.map((product) => (
            <tr key={product.id}>
              <td>{product.productName}</td>
            </tr>
          ))}
      </table>
      <br />
      <button>button</button>
    </div>
  );
};

export default Sample;
