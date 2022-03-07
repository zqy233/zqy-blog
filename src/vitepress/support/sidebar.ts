import { SidebarConfig, SidebarGroup } from '../config'
import { ensureStartingSlash } from './utils'

/**
 * Get the `SidebarConfig` from sidebar option. This method will ensure to get
 * correct sidebar config from `MultiSideBarConfig` with various path
 * combinations such as matching `guide/` and `/guide/`. If no matching config
 * was found, it will return empty array.
 */
export function getSidebar(
  sidebar: SidebarConfig,
  path: string
): SidebarGroup[] {
  if (Array.isArray(sidebar)) {
    return sidebar
  }

  path = ensureStartingSlash(path)
  console.log(path, sidebar)

  for (const dir in sidebar) {
    // make sure the multi sidebar key starts with slash too
    // startsWith 查看字符串是否以dir开头，返回true或false

    console.log(111, ensureStartingSlash(dir))

    if (path.startsWith(ensureStartingSlash(dir))) {
      console.log(1, sidebar[dir])

      return sidebar[dir]
    }
  }

  return []
}
