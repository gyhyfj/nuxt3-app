// @ts-check
/// <reference types="zx/globals" />

const msgPath = path.resolve('.git/COMMIT_EDITMSG')
const msg = fs.readFileSync(msgPath, 'utf-8').trim()

const commitRE =
  /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.log()
  console.error(
    `  ${chalk.white.bgRed(' ERROR ')} ${chalk.red(`invalid commit message format.`)}\n\n` +
      chalk.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`,
      ) +
      `    ${chalk.green(`feat: add 'comments' option`)}\n` +
      `    ${chalk.green(`fix(editor): handle events on blur`)}\n\n` +
      chalk.red(`  See Angular's commit convention for more details.\n`),
  )
  process.exit(1)
}
