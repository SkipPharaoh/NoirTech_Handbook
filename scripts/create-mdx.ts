import fs from "fs";
import path from "path";
import inquirer from "inquirer";

async function createMDX() {
  // Get the name of the MDX file from user input
  const { MDXName } = await inquirer.prompt([
    {
      type: "input",
      name: "MDXName",
      message: "Enter the name of the MDX file (PascalCase):",
      validate: (input: string) => {
        if (!/^[A-Z][a-zA-Z0-9]*$/.test(input)) {
          return "Component name must be in PascalCase.";
        }
        return true;
      },
    },
  ]);

  const mdxFolderPath = path.join(
    __dirname,
    "../apps/docs/src/pages/components"
  );

  // Generate the mdx file
  const mdxTemplate = `
    # ${MDXName}

    import { ${MDXName}, DocsComponentLayout } from '@noirtribe/ui';
    import { PropData } from '../../../../../packages/@noirtribe-ui/src/lib/docs/utils';

    \`\`\`tsx
    type ${MDXName}Props = ComponentProps<typeof ${MDXName}>
    \`\`\`

    <div className="pb-24">
      <DocsComponentLayout propInfo={PropData}>
        <${MDXName} />
      </DocsComponentLayout>
    </div>;
  `;

  fs.writeFileSync(path.join(mdxFolderPath, `${MDXName}.mdx`), mdxTemplate);

  // MDX File created successfully
  console.log(
    `\nCongratulations! You have successfully created the ${MDXName} MDX file.`
  );
}

createMDX();
