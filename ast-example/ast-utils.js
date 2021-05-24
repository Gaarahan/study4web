function importInjectorFactory(importName, source) {
  return function ({types, template}) {
    const myImport = template(`import %%importName%% from '%%source%%';`)({importName, source});

    return {
      visitor: {
        Program(path, state) {
          const lastImport = path.get("body").filter(p => p.isImportDeclaration()).pop();

          if (lastImport) {
            lastImport.insertAfter(myImport);
          }
        },
      },
    };
  }
}

module.exports = {
  importInjectorFactory
}

