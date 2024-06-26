import { BaseClass, CodeGenerator, FileStructures as OriginFileStructures } from "pont-engine"

export default class MyGenerator extends CodeGenerator {
  getBaseClassInDeclaration(base: BaseClass) {
    const data = super.getBaseClassInDeclaration(base)
    return data.replace(/object/g, "Record<string, any>")
  }
}

export class FileStructures extends OriginFileStructures {
  getMultipleOriginsFileStructures() {
    for (const generate of this.generators) {
      generate.dataSource.mods = []
    }
    return super.getMultipleOriginsFileStructures()
  }

  getFileStructures() {
    const result =
      this.usingMultipleOrigins || this.generators.length > 1
        ? this.getMultipleOriginsFileStructures()
        : this.getOriginFileStructures(this.generators[0])

    return result
  }
}
