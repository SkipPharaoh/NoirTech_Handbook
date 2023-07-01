import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../Table";
import { DisplayComponent } from "../DisplayComponent";
import { forwardRef } from "react";
import { DocsComponentLayoutProps } from "./DocsComponentLayoutProps";
import { cn } from "../../../lib/styling/utils";

export default forwardRef<HTMLDivElement, DocsComponentLayoutProps>(
  function DocsComponentLayout(
    { className, children, propInfo, ...props },
    ref
  ) {
    const isDefaultClassName = className === undefined ? "h-[60vh]" : className;

    return (
      <div ref={ref} {...props} className={cn(isDefaultClassName)}>
        <div className={cn("h-1/2 flex justify-center items-center")}>
          <DisplayComponent>{children}</DisplayComponent>
        </div>
        <div className={cn("flex flex-col")}>
          <div className={cn("overflow-x-auto")}>
            <div className={cn("inline-block min-w-full")}>
              <div className={cn("overflow-hidden border-b")}>
                <Table>
                  <TableCaption>A list of the props available</TableCaption>
                  <TableHeader className={cn("border")}>
                    <TableRow>
                      <TableHead className={cn("w-[100px] border-r")}>
                        Prop
                      </TableHead>
                      <TableHead className={cn("border-r")}>Type</TableHead>
                      <TableHead className={cn("border-r")}>
                        Default Value
                      </TableHead>
                      <TableHead className={cn("text-left")}>
                        Description
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {propInfo.map((prop) => (
                      <TableRow
                        key={prop.name}
                        className={cn(
                          "transition duration-300 ease-in-out hover:bg-secondaryHoverandFocus hover:text-white"
                        )}
                      >
                        <TableCell className={cn("font-medium border-x")}>
                          {prop.name}
                        </TableCell>
                        <TableCell className={cn("border-r")}>
                          {prop.type}
                        </TableCell>
                        <TableCell className={cn("border-r")}>
                          {prop.defaultValue}
                        </TableCell>
                        <TableCell className={cn("text-left border-r")}>
                          {prop.description}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
