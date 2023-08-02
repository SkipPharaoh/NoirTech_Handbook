"use client";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@noirtribe/ui";
import { CardData } from "../../../../packages/@noirtribe-ui/src/lib/docs/utils";
import { getMetadata } from "../metadata";

getMetadata();

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
          Web
          <span className="block bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent px-2">
            Turborepo Example
          </span>
        </h1>
        <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
          <Button variant="link" size="xl">
            Test Button
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 place-content-evenly">
          {CardData.map((card) => (
            <Card
              key={card.title}
              backGroundColor={card.backGroundColor as any}
            >
              <CardHeader>
                <CardTitle titleColor={card.titleColor as any}>
                  {card.title}
                </CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter href={card.href} className="hover:underline">
                {card.cta}
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
