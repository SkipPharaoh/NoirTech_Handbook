import fs from "fs";
import path from "path";
import inquirer from "inquirer";

async function createComponent() {
  // Get the name of the component from user input
  const { ComponentName } = await inquirer.prompt([
    {
      type: "input",
      name: "ComponentName",
      message: "Enter the name of the component (PascalCase):",
      validate: (input: string) => {
        if (!/^[A-Z][a-zA-Z0-9]*$/.test(input)) {
          return "Component name must be in PascalCase.";
        }
        return true;
      },
    },
  ]);

  // Get the list of available folders
  const componentFolders = fs
    .readdirSync(
      path.join(__dirname, "../packages/@noirtribe-ui/src/components"),
      { withFileTypes: true }
    )
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  // Prompt the user to select a folder from the available options
  const { targetFolder } = await inquirer.prompt([
    {
      type: "list",
      name: "targetFolder",
      message: "Select the folder to add the component:",
      choices: componentFolders,
    },
  ]);

  const targetComponentPath = path.join(
    __dirname,
    `../packages/@noirtribe-ui/src/components/${targetFolder}/${ComponentName}`
  );
  const mdxFolderPath = path.join(
    __dirname,
    "../apps/docs/src/pages/components"
  );

  // Create the component folder if it doesn't exist
  if (!fs.existsSync(targetComponentPath)) {
    fs.mkdirSync(targetComponentPath, { recursive: true });
  }

  // Generate the component files
  const componentTemplate = (componentName: string) => `
    import { forwardRef } from 'react';
    import { cn } from '../../../lib/styling/utils';
    import { ${componentName}Props } from './${componentName}Props';

    export default forwardRef<HTMLDivElement, ${componentName}Props>(function ${componentName}(
      { className, ...props },
      ref
    ) {
      return (
        <div className={cn( className )} ref={ref} {...props}>
          Hi
        </div>
      );
    });
  `;

  const indexTemplate = (componentName: string) => `
    import ${componentName} from './${componentName}';
    import * as ${componentName}Props from './${componentName}Props';

    export { ${componentName}, ${componentName}Props };
  `;

  const propsTemplate = `
    import React from 'react';

    export interface ${ComponentName}Props extends React.HTMLAttributes<HTMLDivElement> {}
  `;

  const specTemplate = `
    import { cleanup, render, screen } from "@testing-library/react";
    import { afterEach, describe, expect, it } from "vitest";
    import { ${ComponentName} } from ".";

    describe('${ComponentName}', () => {
      it('renders without error', () => {
        render(<${ComponentName} />);
        const ${ComponentName}Element = screen.getByText("Hi");
        expect(${ComponentName}Element).toBeDefined();
      });
    });
  `;

  fs.writeFileSync(
    path.join(targetComponentPath, "index.ts"),
    indexTemplate(ComponentName)
  );
  fs.writeFileSync(
    path.join(targetComponentPath, `${ComponentName}.tsx`),
    componentTemplate(ComponentName)
  );
  fs.writeFileSync(
    path.join(targetComponentPath, `${ComponentName}Props.tsx`),
    propsTemplate
  );
  // fs.writeFileSync(
  //   path.join(targetComponentPath, `${ComponentName}.spec.tsx`),
  //   specTemplate
  // );

  // Generate the mdx file
  const mdxTemplate = `
    # ${ComponentName}

    import { ${ComponentName} } from '@noirtribe/ui';
    import { PropData } from '../../../../../packages/@noirtribe-ui/src/lib/docs/utils';
    import { DocsComponentLayout } from "../../../../../packages/@noirtribe-ui/src/components/doc/DocsComponentLayout/index"

    \`\`\`tsx
    type ${ComponentName}Props = ComponentProps<typeof ${ComponentName}>
    \`\`\`

    <div>
  <DocsComponentLayout propInfo={PropData}>
    <${"ComponentName"} />
  </DocsComponentLayout>
</div>;
  `;

  fs.writeFileSync(
    path.join(mdxFolderPath, `${ComponentName}.mdx`),
    mdxTemplate
  );

  // Update the index.tsx file in the @noirtribe-ui folder manually
  console.log(
    "\nTo complete the component creation, update the index.tsx file in the @noirtribe-ui folder."
  );
  console.log(
    `Add the following export statement to the appropriate location in the file:`
  );
  console.log(
    `export * from './components/${targetFolder}/${ComponentName}/index';`
  );
}

createComponent();
