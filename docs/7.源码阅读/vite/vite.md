## rollup.config.ts

```ts
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import MagicString from 'magic-string'
import type { Plugin, RollupOptions } from 'rollup'
import { defineConfig } from 'rollup'
import licensePlugin from './rollupLicensePlugin'

// 读取当前模块所在的 package.json 文件，并将其解析为一个 JavaScript 对象，存储在变量 pkg 中。
// readFileSync 是 Node.js 提供的文件读取同步方法，可以同步地读取文件内容，并返回文件内容。它的用法类似于浏览器端的 XMLHttpRequest 或 fetch 方法中的读取本地文件。
// import.meta.url 表示当前模块的 URL 地址，new URL('./package.json', import.meta.url) 表示当前模块所在目录下的 package.json 文件的 URL 地址。readFileSync 函数读取该文件的内容，返回一个 Buffer 对象，再使用 toString() 方法将其转换为字符串。最后使用 JSON.parse 方法将字符串解析为 JavaScript 对象，并将该对象赋值给变量 pkg。
const pkg = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url)).toString(),
)

// 在ES模块中，__dirname不像CommonJS模块中一样被定义为模块的绝对路径。取而代之的是，ES模块中的import.meta.url提供了模块的URL地址。而在Node.js中，使用fileURLToPath()方法将URL转换为路径，并赋值给__dirname，从而获取ES模块的目录路径。
// 具体来说，new URL('.', import.meta.url)中的.表示当前目录，import.meta.url获取了当前模块的URL，fileURLToPath()将其转换为路径格式，最终得到的__dirname是当前ES模块的目录路径。
const __dirname = fileURLToPath(new URL('.', import.meta.url))

// 这段代码是一个 Rollup 配置文件中的一个对象，用于将 TypeScript 源代码编译为 ES6 模块。
// 具体来说，这个对象使用了 Rollup 的 defineConfig 函数，用于定义 Rollup 的配置信息。这个配置信息包含以下内容：
// input 属性指定了源代码的入口文件，即 TypeScript 文件的路径。在这个例子中，入口文件位于 src/client/env.ts。
// plugins 属性是一个插件数组，其中包含了需要使用的插件。在这个例子中，使用了 typescript 插件，用于编译 TypeScript 文件。
// output 属性指定了输出文件的配置信息。具体来说，它包含以下属性：
// file 属性指定了输出文件的路径和文件名。在这个例子中，输出文件位于 dist/client/env.mjs。
// sourcemap 属性用于生成源代码映射文件。在这个例子中，开启了源代码映射。
// sourcemapPathTransform 属性是一个函数，用于将生成的源代码映射文件中的路径转换为相对路径。在这个例子中，这个函数将源代码映射文件中的路径转换为文件名。
// sourcemapIgnoreList 属性是一个函数，用于设置哪些源代码映射文件需要被忽略。在这个例子中，这个函数返回了 true，表示所有的源代码映射文件都应该被忽略。
const envConfig = defineConfig({
  input: path.resolve(__dirname, 'src/client/env.ts'),
  plugins: [
    typescript({
      tsconfig: path.resolve(__dirname, 'src/client/tsconfig.json'),
    }),
  ],
  output: {
    file: path.resolve(__dirname, 'dist/client', 'env.mjs'),
    sourcemap: true,
    sourcemapPathTransform(relativeSourcePath) {
      // path.basename() 是 Node.js 中的一个方法，用于返回一个文件路径的最后一部分，也就是文件名（包括扩展名）。比如，path.basename('/home/user/file.txt') 返回的是 file.txt。如果指定第二个参数，可以去掉文件扩展名。例如，path.basename('/home/user/file.txt', '.txt') 返回的是 file。在示例中，sourcemapPathTransform 函数使用 path.basename() 方法将相对源代码路径转换为文件名，用于生成 sourcemap。
      return path.basename(relativeSourcePath)
    },
    sourcemapIgnoreList() {
      return true
    },
  },
})

// input 属性指定了客户端代码入口文件的路径为 src/client/client.ts。
// external 属性指定了需要外部引入的模块，其中 ./env 和 @vite/env 是需要外部引入的模块。
// 在这个配置中，external 属性指定了一些模块，这些模块将不会被打包到最终的输出文件中，而是会被视为外部依赖，在运行时需要从其他地方引入。在这个配置中，external 属性指定了 ./env 和 @vite/env 两个模块，因此这些模块会被视为外部依赖，并且不会被打包到最终的输出文件中。这意味着在使用最终的输出文件时，这些模块必须从其他地方进行引入，否则会导致运行时错误。
// plugins 属性是一个数组，其中包含了 TypeScript 编译器的配置信息，指定了 TypeScript 配置文件的路径为 src/client/tsconfig.json。
// output 属性指定了输出文件的相关信息，包括输出文件的路径为 dist/client/client.mjs，开启了生成 sourcemap 功能并指定了源代码路径转换函数和忽略列表函数。
const clientConfig = defineConfig({
  input: path.resolve(__dirname, 'src/client/client.ts'),
  external: ['./env', '@vite/env'],
  plugins: [
    typescript({
      tsconfig: path.resolve(__dirname, 'src/client/tsconfig.json'),
    }),
  ],
  output: {
    file: path.resolve(__dirname, 'dist/client', 'client.mjs'),
    sourcemap: true,
    sourcemapPathTransform(relativeSourcePath) {
      return path.basename(relativeSourcePath)
    },
    sourcemapIgnoreList() {
      return true
    },
  },
})

// treeshake 属性指定了打包时的 Tree-shaking 配置，包括禁用 tryCatchDeoptimization 选项，设置 propertyReadSideEffects 为 false，并且对于外部模块，使用 no-external 选项来进行 Tree-shaking，也就是只对模块内部的代码进行优化。
// output 属性指定了输出文件的相关信息，包括输出目录为 ./dist，入口文件的命名规则为 node/[name].js，chunk 文件的命名规则为 node/chunks/dep-[hash].js，使用 ESM 格式进行输出，并且禁用了 external live bindings。
// onwarn 属性指定了一个函数，用于处理警告信息。在这个函数中，如果警告信息中包含了 "Circular dependency" 字符串，就忽略这个警告，否则将调用默认的 warn 函数进行警告输出。
const sharedNodeOptions = defineConfig({
  treeshake: {
    moduleSideEffects: 'no-external',
    propertyReadSideEffects: false,
    tryCatchDeoptimization: false,
  },
  output: {
    dir: './dist',
    entryFileNames: `node/[name].js`,
    chunkFileNames: 'node/chunks/dep-[hash].js',
    exports: 'named',
    format: 'esm',
    externalLiveBindings: false,
    freeze: false,
  },
  onwarn(warning, warn) {
    if (warning.message.includes('Circular dependency')) {
      return
    }
    warn(warning)
  },
})

// 使用 nodeResolve 插件解析 Node.js 模块路径。
// 使用 typescript 插件编译 TypeScript 代码。
// 使用 shimDepsPlugin 插件解决一些依赖库的问题。
// 使用 commonjs 插件将 CommonJS 模块转换为 ES6 模块。
// 使用 json 插件将 JSON 文件转换为 ES6 模块。
// 使用 licensePlugin 插件添加许可证信息。
// 使用 cjsPatchPlugin 插件修复一些 CommonJS 模块的问题。
// 其中，一些插件只在生产环境下生效，如 shimDepsPlugin 和 licensePlugin。函数最终返回的是一个包含这些插件的数组。
function createNodePlugins(
  isProduction: boolean,
  sourceMap: boolean,
  declarationDir: string | false,
): (Plugin | false)[] {
  return [
    // Rollup 构建工具中使用 @rollup/plugin-node-resolve 插件进行模块解析。解析模块依赖关系，并返回对应的模块路径，以便 Rollup 在打包过程中能够正确地将各个模块打包成一个或多个文件。
    // nodeResolve({ preferBuiltins: true }) 是对该插件的配置，表示在解析模块时优先使用 Node.js 核心模块，这有助于提高打包的效率和稳定性。当然，如果某个模块不存在于核心模块中，该插件也会去查找项目中安装的第三方模块
    nodeResolve({ preferBuiltins: true }),
    typescript({
      tsconfig: path.resolve(__dirname, 'src/node/tsconfig.json'),
      sourceMap,
      declaration: declarationDir !== false,
      declarationDir: declarationDir !== false ? declarationDir : undefined,
    }),

    // Some deps have try...catch require of optional deps, but rollup will
    // generate code that force require them upfront for side effects.
    // Shim them with eval() so rollup can skip these calls.
    isProduction &&
      shimDepsPlugin({
        // chokidar -> fsevents
        'fsevents-handler.js': {
          src: `require('fsevents')`,
          replacement: `__require('fsevents')`,
        },
        // postcss-import -> sugarss
        'process-content.js': {
          src: 'require("sugarss")',
          replacement: `__require('sugarss')`,
        },
        'lilconfig/dist/index.js': {
          pattern: /: require,/g,
          replacement: `: __require,`,
        },
        // postcss-load-config calls require after register ts-node
        'postcss-load-config/src/index.js': {
          pattern: /require(?=\((configFile|'ts-node')\))/g,
          replacement: `__require`,
        },
        'json-stable-stringify/index.js': {
          pattern: /^var json = typeof JSON.+require\('jsonify'\);$/gm,
          replacement: 'var json = JSON',
        },
        // postcss-import uses the `resolve` dep if the `resolve` option is not passed.
        // However, we always pass the `resolve` option. Remove this import to avoid
        // bundling the `resolve` dep.
        'postcss-import/index.js': {
          src: 'const resolveId = require("./lib/resolve-id")',
          replacement: 'const resolveId = (id) => id',
        },
      }),

    // @rollup/plugin-commonjs 是 Rollup.js 打包工具的插件之一，它可以将 CommonJS 模块转换成 ES6 模块，以便在浏览器中使用。
    // 在这个代码段中，commonjs 插件被调用并传递了一个配置对象，该对象包括以下选项：
    // extensions：一个字符串数组，指定要解析的文件扩展名。在这里，.js 表示只解析 JavaScript 文件。
    // ignore：一个字符串数组，指定要忽略的依赖项。在这里，插件忽略了 bufferutil 和 utf-8-validate，这是 ws 模块的本机依赖项，但这些依赖项对于该项目的性能不是很重要。
    commonjs({
      extensions: ['.js'],
      // Optional peer deps of ws. Native deps that are mostly for performance.
      // Since ws is not that perf critical for us, just ignore these deps.
      ignore: ['bufferutil', 'utf-8-validate'],
    }),
    json(),
    isProduction &&
      licensePlugin(
        path.resolve(__dirname, 'LICENSE.md'),
        'Vite core license',
        'Vite',
      ),
    cjsPatchPlugin(),
  ]
}

function createNodeConfig(isProduction: boolean) {
  return defineConfig({
    ...sharedNodeOptions,
    input: {
      index: path.resolve(__dirname, 'src/node/index.ts'),
      cli: path.resolve(__dirname, 'src/node/cli.ts'),
      constants: path.resolve(__dirname, 'src/node/constants.ts'),
    },
    output: {
      ...sharedNodeOptions.output,
      sourcemap: !isProduction,
    },
    external: [
      'fsevents',
      ...Object.keys(pkg.dependencies),
      ...(isProduction ? [] : Object.keys(pkg.devDependencies)),
    ],
    plugins: createNodePlugins(
      isProduction,
      !isProduction,
      // in production we use api-extractor for dts generation
      // in development we need to rely on the rollup ts plugin
      isProduction ? false : './dist/node',
    ),
  })
}

function createCjsConfig(isProduction: boolean) {
  return defineConfig({
    ...sharedNodeOptions,
    input: {
      publicUtils: path.resolve(__dirname, 'src/node/publicUtils.ts'),
    },
    output: {
      dir: './dist',
      entryFileNames: `node-cjs/[name].cjs`,
      chunkFileNames: 'node-cjs/chunks/dep-[hash].js',
      exports: 'named',
      format: 'cjs',
      externalLiveBindings: false,
      freeze: false,
      sourcemap: false,
    },
    // fsevents 是 Node.js 中一个第三方的模块，主要用于监视文件系统中的变化。它是 macOS 系统下的一个专用模块，通过监听 macOS 上的 FSEvents API 实现了对文件和目录变化的实时监测，包括新建、修改、删除等。
    // 在一些 Node.js 应用程序或模块中，fsevents 被用于实现实时监测文件变化，从而在文件发生变化时自动执行某些操作，例如重新构建应用程序或重新加载模块等。fsevents 可以通过 Node.js 的包管理器 NPM 进行安装和使用，但需要注意的是，由于它是 macOS 专用的模块，因此在其他平台上可能会出现兼容性问题
    external: [
      'fsevents',
      ...Object.keys(pkg.dependencies),
      ...(isProduction ? [] : Object.keys(pkg.devDependencies)),
    ],
    plugins: [...createNodePlugins(false, false, false), bundleSizeLimit(120)],
  })
}

// 根据传入的命令行参数（commandLineArgs）生成 Rollup 的配置信息，并将这些配置信息组合成一个 RollupOptions 数组进行输出
// RollupOptions 是一个对象，包含了 Rollup 打包工具进行构建时所需要的各种配置信息。RollupOptions 对象中的配置信息包括输入（input）、输出（output）、插件（plugins）、外部依赖项（external）等，用于描述打包构建的过程和结果。
// 在这个代码示例中，生成了多个 RollupOptions 对象，分别对应不同的环境和构建目标，这些 RollupOptions 对象被放置在一个数组中，用于将这些不同的配置信息进行组合，以生成最终的构建结果。
// 数组中的每个元素都是一个 RollupOptions 对象，表示了一个独立的 Rollup 打包任务，可以通过执行 rollup 命令来对其进行构建。最终生成的构建结果可能是一个或多个 JavaScript 文件，可以用于在浏览器或 Node.js 环境中运行相应的应用程序或库
export default (commandLineArgs: any): RollupOptions[] => {
  // 通过解析 commandLineArgs 中的 watch 属性，判断当前是否为开发环境。
  const isDev = commandLineArgs.watch
  const isProduction = !isDev

  // 根据当前环境（开发环境或生产环境）生成相应的 Rollup 配置信息，包括 envConfig（环境变量配置）、clientConfig（客户端配置）、createNodeConfig（Node.js 配置）和 createCjsConfig（CommonJS 配置）。
  // 使用 defineConfig 函数将这些配置信息组合成一个 RollupOptions 数组，并返回该数组。
  return defineConfig([
    envConfig,
    clientConfig,
    createNodeConfig(isProduction),
    createCjsConfig(isProduction),
  ])
}

// 这段注释是用来标记代码区域的，类似于一种标记或者提醒作用。在这段代码中，注释的内容是 Plugins，表示下面的代码段主要是关于 Rollup 插件的定义和配置。这种注释通常被称为 "代码区域标记" 或 "代码区域分隔符"，它可以帮助开发人员更快地浏览和理解代码，并提高代码的可读性和可维护性。
// region 是一种特殊的注释标记，它可以用来标记代码区域的开始和结束。这种标记通常与 endregion 配合使用，用于将代码分成不同的区域，使得开发人员可以更方便地阅读和理解代码。
// 在一些编程语言和开发工具中，如 Visual Studio Code，region 和 endregion 注释标记还可以折叠代码块，从而更方便地浏览和编辑代码。
// #region ======== Plugins ========

interface ShimOptions {
  src?: string
  replacement: string
  pattern?: RegExp
}

// 在编程中，shim（或 polyfill）指的是一个兼容性代码块，用于在旧版本的浏览器或其他环境中模拟缺少的新功能或 API。shim 通常是一小段代码，可以插入到应用程序中，以兼容不同的环境或浏览器。
// 在 Rollup 中，shimmed 指的是一个模块，在其导入或导出的依赖关系中有一个未解析的依赖项。Rollup 在打包时会将这些依赖项替换为一个 shimming 模块，以确保应用程序在运行时能够正确引用所需的依赖项。

// 这段代码是一个 Rollup 插件，用于在构建过程中替换特定依赖的代码。插件的作用是读取一个包含特定文件和替换选项的对象，然后在打包过程中查找这些文件并根据选项进行替换。
// 具体来说，这个插件会在构建过程中遍历所有的源代码文件，对于指定的依赖文件，如果其路径与源文件路径匹配，则根据定义的选项对依赖文件进行替换。替换方式可以是简单的字符串替换（用 replacement 替换 src），也可以是正则表达式匹配（用 replacement 替换所有匹配 pattern 的字符串）。
// 替换完成后，插件会返回一个新的代码字符串和 sourcemap，然后将其传递给下一个插件。如果有任何错误发生（例如无法找到文件或匹配模式），则插件会在构建结束时报告错误。
function shimDepsPlugin(deps: Record<string, ShimOptions>): Plugin {
  // Record 是一个泛型类型，接收两个类型参数，第一个类型参数表示对象的键的类型，第二个类型参数表示对象的值的类型
  const transformed: Record<string, boolean> = {}
  return {
    name: 'shim-deps',
    transform(code, id) {
      // 这是 JavaScript 中一种用于遍历对象属性的 for 循环语法。在这里，"const file" 是一个变量名，它用于在每次迭代时存储当前属性的名称，而 "deps" 则是一个对象，它包含需要遍历的属性。
      // 因此，"for (const file in deps)" 可以理解为遍历对象 "deps" 中的每个属性，并将当前属性的名称存储在变量 "file" 中。在循环体中，您可以使用 "file" 变量访问当前属性的值。
      // 请注意，由于这里使用了 const 关键字，因此 "file" 变量是一个常量，它的值不能在循环内更改。这种 for 循环语法通常用于遍历对象属性而不需要更改它们的值。
      for (const file in deps) {
        // 使用正则表达式 /\/g 查找 "id" 字符串中的所有反斜杠，并将其替换为斜杠。这是因为在文件路径中，Windows 系统使用反斜杠作为路径分隔符，而 Unix 系统使用斜杠。因此，将所有反斜杠替换为斜杠可以确保代码在任何系统上都能正常工作。
        // 使用字符串方法 endsWith() 检查经过替换后的 "id" 字符串是否以 "file" 字符串结尾。endsWith() 方法返回一个布尔值，表示字符串是否以指定的子字符串结尾。
        // 为什么通过判断模块的文件路径（变量 id）是否以依赖项的名称（变量 file）结尾来判断是否是该依赖项?
        // 这是因为该插件需要通过文件路径来判断当前的模块是否依赖于某个特定的模块。在 JavaScript 中，模块通常是通过 import 或 require 语句引入的。在这种情况下，模块的文件路径就是由这些语句指定的。
        // 例如，假设有一个模块 "a.js"，它包含以下代码：
        // import foo from './foo.js'
        // 在这里，模块 "a.js" 依赖于模块 "foo.js"。模块 "foo.js" 的文件路径是 "./foo.js"。因此，当处理模块 "a.js" 时，该插件需要通过检查 "a.js" 的文件路径来判断它是否依赖于 "foo.js"。由于模块的文件路径以模块名结尾，因此可以通过检查模块的文件路径是否以依赖项的名称结尾来判断是否是该依赖项。如果是，则说明当前模块依赖于该模块
        if (id.replace(/\\/g, '/').endsWith(file)) {
          const { src, replacement, pattern } = deps[file]

          // MagicString 是一个 JavaScript 库，用于在字符串上执行复杂的编辑操作，如插入、删除和替换。它最初是为了在 Rollup 中使用而创建的，用于处理 JavaScript 代码的转换和优化。
          // MagicString 的一个主要特点是它能够跟踪字符串中的每个字符的位置，并在编辑时保持相对位置不变。这意味着它可以进行更细粒度的编辑，而不会破坏代码的结构和语法。
          // 在代码中，MagicString 用于对源代码进行编辑，以实现对依赖项的替换。具体来说，它通过 overwrite() 方法在源代码中查找指定的字符串，并将其替换为另一个字符串。然后，toString() 方法用于将修改后的代码输出为字符串，以便返回给 Rollup 处理管道。
          const magicString = new MagicString(code)
          if (src) {
            const pos = code.indexOf(src)
            if (pos < 0) {
              this.error(
                `Could not find expected src "${src}" in file "${file}"`,
              )
            }
            transformed[file] = true
            magicString.overwrite(pos, pos + src.length, replacement)
            console.log(`shimmed: ${file}`)
          }
          if (pattern) {
            let match
            while ((match = pattern.exec(code))) {
              transformed[file] = true
              const start = match.index
              const end = start + match[0].length
              magicString.overwrite(start, end, replacement)
            }
            if (!transformed[file]) {
              this.error(
                `Could not find expected pattern "${pattern}" in file "${file}"`,
              )
            }
            console.log(`shimmed: ${file}`)
          }
          return {
            code: magicString.toString(),
            // magicString.generateMap({ hires: true }) 是指生成一个 source map，其中 hires 表示生成的 source map 精度较高。
            // source map 是一种文件格式，它提供了一个映射关系，将转换后的代码映射回原始源代码的位置。这对于调试和开发非常有用，特别是在代码压缩和合并之后，可以帮助我们快速定位原始代码中的问题。
            // hires 是一个布尔型参数，当为 true 时，生成的 source map 精度更高，能够提供更准确的行列信息。但这也会导致生成的 source map 文件更大，因此在生产环境中建议设置为 false。
            map: magicString.generateMap({ hires: true }),
          }
        }
      }
    },
    buildEnd(err) {
      if (!err) {
        for (const file in deps) {
          if (!transformed[file]) {
            this.error(
              `Did not find "${file}" which is supposed to be shimmed, was the file renamed?`,
            )
          }
        }
      }
    },
  }
}

/**
 * Inject CJS Context for each deps chunk
 */
// 该插件的作用是在生成的 Chunk 文件中注入一段 CommonJS 模块的 polyfill，以确保这些文件可以在浏览器中正常运行
// 具体来说，该插件会在每个以 chunks/dep- 开头的 Chunk 文件中，注入一段 CommonJS 模块的 polyfill 代码。这段代码通过 import 语句引入了 Node.js 的 url、path 和 module 模块，并在代码中定义了几个常量和函数，包括：
// __filename：当前模块的文件名，通过调用 fileURLToPath 函数得到；
// __dirname：当前模块的目录名，通过调用 dirname 函数得到；
// require：用于加载 CommonJS 模块的函数，通过调用 createRequire 函数得到；
// __require：require 函数的别名，用于避免和其他代码中的 require 变量重名。
// 然后，插件通过 renderChunk 钩子来处理每个 Chunk 文件的代码。对于符合条件的 Chunk 文件，插件会在最后一个 import 语句后面插入上述的 CommonJS 模块的 polyfill 代码，并返回修改后的代码和 Source Map。

// cjsPatchPlugin 是一个自定义的函数名称，这里的命名方式是基于常见的 JavaScript 命名约定。
// cjsPatchPlugin 可以拆分为三部分：
// cjs：缩写，代表 CommonJS。
// Patch：动词，代表修改、修补、打补丁等含义。
// Plugin：名词，代表插件、扩展等含义。
// 综合起来，cjsPatchPlugin 的含义就是 CommonJS 模块打补丁的插件，也就是为了解决 CommonJS 模块在浏览器环境下运行问题而编写的 Rollup.js 插件。函数名采用这种命名约定可以更清晰地表达函数的作用和用途，方便阅读和理解代码。
function cjsPatchPlugin(): Plugin {
  const cjsPatch = `
import { fileURLToPath as __cjs_fileURLToPath } from 'node:url';
import { dirname as __cjs_dirname } from 'node:path';
import { createRequire as __cjs_createRequire } from 'node:module';

const __filename = __cjs_fileURLToPath(import.meta.url);
const __dirname = __cjs_dirname(__filename);
const require = __cjs_createRequire(import.meta.url);
const __require = require;
`.trimStart()

  return {
    name: 'cjs-chunk-patch',
    renderChunk(code, chunk) {
      if (!chunk.fileName.includes('chunks/dep-')) return

      const match = code.match(/^(?:import[\s\S]*?;\s*)+/)
      const index = match ? match.index! + match[0].length : 0
      const s = new MagicString(code)
      // inject after the last `import`
      s.appendRight(index, cjsPatch)
      console.log('patched cjs context: ' + chunk.fileName)

      return {
        code: s.toString(),
        map: s.generateMap({ hires: true }),
      }
    },
  }
}

// 这是一个 Rollup 插件函数，作用是限制打包后的代码体积不超过指定的大小限制 limit，如果超过限制则会抛出错误。
// 该插件函数返回一个对象，对象包含了一个 name 属性和一个 generateBundle 方法。name 属性表示该插件的名称，generateBundle 方法是在 Rollup 生成 bundle 时被调用的钩子函数，用于在 bundle 生成完成后执行一些自定义的操作。具体来说，该插件在生成 bundle 时会计算 bundle 的大小，如果超过了指定的大小限制 limit，则会抛出一个错误，中断打包流程。
// 在 generateBundle 方法中，首先使用 Object.values 方法获取 bundle 对象中所有文件的代码字符串，然后通过 Buffer.byteLength 方法计算所有代码的字节数，最后将字节数转换为千字节（KB）并进行大小比较。如果超过了限制，则抛出一个错误，否则不执行任何操作。
/**
 * Guard the bundle size
 *
 * @param limit size in KB
 */
function bundleSizeLimit(limit: number): Plugin {
  return {
    name: 'bundle-limit',
    generateBundle(options, bundle) {
      const size = Buffer.byteLength(
        // 检查对象 i 是否包含一个名为 code 的属性
        Object.values(bundle)
          .map((i) => ('code' in i ? i.code : ''))
          .join(''),
        'utf-8',
      )
      const kb = size / 1024
      if (kb > limit) {
        throw new Error(
          `Bundle size exceeded ${limit}kb, current size is ${kb.toFixed(
            2,
          )}kb.`,
        )
      }
    },
  }
}

// #endregion
```



## package.json

###   `"//": "READ CONTRIBUTING.md to understand what to put under deps vs. devDeps!"`

"//" 是 JSON 格式中的注释，其作用是给代码添加注释说明，但并不会被解析器执行。在这个示例中，这个注释是用来提醒开发者要阅读 CONTRIBUTING.md 文件，以便了解该在 deps 还是 devDeps 下添加依赖项。这个注释并不会被 npm 解析器执行，也不会对依赖项的安装和使用产生任何影响。

### peerDependencies

```json
 "peerDependencies": {
    "@types/node": ">= 14",
    "less": "*",
    "sass": "*",
    "stylus": "*",
    "sugarss": "*",
    "terser": "^5.4.0"
  },
```

这是一个 Node.js 模块的 package.json 文件中的 peerDependencies 字段，用于声明该模块所需要的运行时或编译时的 peer 依赖。

peerDependencies 字段中声明的依赖，是指当前模块运行或编译时需要依赖的其他模块，但这些依赖模块不会被当前模块直接安装。而是在安装当前模块的应用程序或库中，需要手动安装这些 peer 依赖模块的特定版本。

在这个示例中，peerDependencies 字段中声明了 "@types/node"、"less"、"sass"、"stylus"、"sugarss"、"terser" 这些 peer 依赖。其中 "@types/node" 是 TypeScript 对 Node.js 类型定义文件的依赖，而其他依赖是一些预处理器（Preprocessor）和代码压缩工具。通过声明这些 peer 依赖，可以确保应用程序或库的开发者，在使用当前模块时，需要安装这些依赖的特定版本，以避免可能出现的依赖冲突或版本不兼容问题。

在 `peerDependencies` 中，`*` 表示对应的依赖没有版本限制，也就是可以使用任意版本。这意味着安装该模块时可以使用已安装的任意版本或者安装最新版本。但需要注意，使用 `*` 可能会导致依赖不稳定，因为每次安装都可能得到不同版本的依赖。因此，最好是指定所需要的具体版本，以确保稳定性和可重复性。

### peerDependenciesMeta

```json
 "peerDependenciesMeta": {
    "@types/node": {
      "optional": true
    },
    "sass": {
      "optional": true
    },
    "stylus": {
      "optional": true
    },
    "less": {
      "optional": true
    },
    "sugarss": {
      "optional": true
    },
    "terser": {
      "optional": true
    }
  }
```

这是 `package.json` 文件中的 `"peerDependenciesMeta"` 字段，用于描述指定的对等依赖项的元数据，它的含义如下：

当一个包依赖另一个包时，如果这个依赖是一个对等依赖（peer dependency），那么它是一个不同于普通依赖的特殊类型的依赖。对等依赖是指两个包（或多个包）共享同一个依赖项，但这个依赖项不会被包含在这些包的 `node_modules` 目录中。相反，它被期望在它们的共享环境中存在，例如在一个应用程序的顶层 `node_modules` 目录中，或者在一个公共的库中。

在这里，`peerDependenciesMeta` 中列出了一些对等依赖项，例如 `sass`、`stylus`、`less` 等。对于每个对等依赖项，它们都有一个 `"optional": true` 标记，表示这些依赖是可选的，如果没有安装，也不会影响到包的功能，但是如果安装了这些对等依赖，包的功能可能会得到增强或者优化。

在一些情况下，对等依赖会被用于共享一些全局的库，比如 `typescript`，如果多个包都依赖于 `typescript`，那么如果它们都依赖于不同的 `typescript` 版本，就会导致问题。因此，这些包可以将 `typescript` 列为对等依赖项，让它们共享同一个全局 `typescript` 版本。

## bin/vite.js

```

```

